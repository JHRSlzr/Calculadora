import { Component } from '@angular/core';
import { IOperation} from './interfaces/operation.interface';
import { Store } from '@ngxs/store';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OperationState } from './models/operation/operation.redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CALCULADORA';

  @Select(OperationState.GetResult) result$: Observable<number>;
  constructor(private store: Store) { }

}
