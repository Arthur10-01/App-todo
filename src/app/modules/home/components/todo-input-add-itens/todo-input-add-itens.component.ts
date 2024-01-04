import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-input-add-itens',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input-add-itens.component.html',
  styleUrl: './todo-input-add-itens.component.scss'
})
export class TodoInputAddItensComponent {

@Output() public emitItemTaskList = new EventEmitter

public addItemTaskList : string = "";
constructor(){}

public submitItemTaskList(){
  console.log(this.addItemTaskList)

  this.addItemTaskList = this.addItemTaskList.trim();
  if(this.addItemTaskList){
  this.emitItemTaskList.emit(this.addItemTaskList);
  this.addItemTaskList = "";
  }
  
}

}
