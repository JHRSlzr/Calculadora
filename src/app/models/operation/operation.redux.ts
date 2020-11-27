import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface IROperation {
    value1?: number;
    value2?: number;
    operator?: string;
    result?: number;
    validation?:boolean;
}

export class NumberOperationAction {
    public static type = '[Operation] Add';
    constructor(public value: number) {}
}

export class OperatorOperationAction {
    public static type = '[Operation] Operator';
    constructor(public operator: string) {}
}

export class ResultOperationAction {
    public static type = '[Operation] Result';
    constructor() {}
}
export class ClearOperationAction {
    public static type = '[Operation] Clear';
    constructor() {}
}

@State<IROperation>({
    name: 'OperationState',
    defaults: {
        value1: 0,
        value2: 0,
        operator: "",
        result: 0,
        validation:false,
    }
})

@Injectable()
export class OperationState {
    constructor() {}


    @Selector()
    static GetResult(state: IROperation) {
      return state.result;
    }

    @Action(NumberOperationAction)
    getNumber(state: StateContext<IROperation>, action:NumberOperationAction ) {
        if(action.value != 0){
                if(state.getState().validation==false){
                state.patchState({value1:Number(String(state.getState().value1)+ action.value) });
                state.patchState({result:state.getState().value1});
            }
            else
            {

                state.patchState({value2:Number(String(state.getState().value2)+ action.value) });
                state.patchState({validation:false});
            }
        }
    }

    @Action(OperatorOperationAction)
    getOperator(state: StateContext<IROperation>, action:OperatorOperationAction) {
        if(state.getState().value2!=0){
            switch(action.operator)
            {
                case '+':
                    state.patchState({result:state.getState().value1+state.getState().value2});
                    break;
                case '/':
                    state.patchState({result:state.getState().value1/state.getState().value2});
                    break;
                case '*':
                    state.patchState({result:state.getState().value1*state.getState().value2});                     
                    break;
                case '-':
                    state.patchState({result:state.getState().value1-state.getState().value2});
                    break;
            }
            state.patchState({value1:state.getState().result});
            state.patchState({operator:""});
            state.patchState({validation:false});
        }
        else{
            state.patchState({operator:action.operator});
            state.patchState({validation:true});
        }
    }

    @Action(ResultOperationAction)
    getResult(state: StateContext<IROperation>, action:ResultOperationAction) {
        switch(state.getState().operator)
        {
            case '+':
                state.patchState({result:state.getState().value1+state.getState().value2});
                break;
            case '/':
                state.patchState({result:state.getState().value1/state.getState().value2});
                break;
            case '*':
                state.patchState({result:state.getState().value1*state.getState().value2});                     
                break;
            case '-':
                state.patchState({result:state.getState().value1-state.getState().value2});
                break;
        }
        state.patchState({value1:state.getState().result});
        state.patchState({value2:0});
        state.patchState({operator:""});
        state.patchState({validation:true});
    }

    @Action(ClearOperationAction)
    doClear(state: StateContext<IROperation>, action:ClearOperationAction) {
        state.setState({
            value1: 0,
            value2: 0,
            operator: "",
            validation: false,
            result: 0,
          });
    }
}