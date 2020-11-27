import { Action, State, StateContext } from '@ngxs/store';

export interface IROperation {
    value1?: number;
    value2?: number;
    operator?: string;
    result?: number;
    validation?:boolean;
    status?: string;
}

export class NumberOperationAction {
    public static type = '[Operation] Add';
    constructor(public value: number) {}
}

export class OperatorOperationAction {
    public static type = '[Operation] Add';
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
        value1: null,
        value2: null,
        operator: "",
        result: 0,
        validation:false,
        status: ""
    }
})
export class OperationSate {
    constructor() {}
    @Action(NumberOperationAction)
    Number(state: StateContext<IROperation>, action:NumberOperationAction ) {
        if(action.value != null)
                if(state.getState().validation==false){
                state.patchState({value1:Number(String(state.getState().value1)+ action.value) });
                state.patchState({status:""+state.getState().value1})
                state.patchState({validation:true});
            }
            else
            {
                state.patchState({value2:Number(String(state.getState().value1)+ action.value) });
                state.patchState({validation:false});
                state.patchState({status:""+state.getState().value1})

            }
    }

    @Action(OperatorOperationAction)
    Operator(state: StateContext<IROperation>, action:OperatorOperationAction) {

    }

    @Action(ResultOperationAction)
    Result(state: StateContext<IROperation>) {

    }

    @Action(ClearOperationAction)
    Clear(state: StateContext<IROperation>) {
        
    }

}