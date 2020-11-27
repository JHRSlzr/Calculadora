import { Component, Input, OnInit } from '@angular/core';

//Redux
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import {NumberOperationAction, OperatorOperationAction, ResultOperationAction, ClearOperationAction, OperationState } from './../../models/operation/operation.redux';
import { IOperation} from './../../interfaces/operation.interface';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  @Select(OperationState.GetResult) result$: Observable<number>;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }



  sendNumber(value: number) {
    this.store.dispatch(new NumberOperationAction(value));
  }

  sendOperator(value: string) {
    this.store.dispatch(new OperatorOperationAction(value));
  }

  doOperation() {
    this.store.dispatch(new ResultOperationAction());
  }

  clearAll() {
    this.store.dispatch(new ClearOperationAction());
  }
}
