import { Component, DoCheck, OnInit } from '@angular/core';


//Inteface
import { TaskList } from '../../model/task-list';

//Componentes
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from '../todo-input-add-itens/todo-input-add-itens.component';

//Modulos

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs/internal/operators/first';
import { last } from 'rxjs/internal/operators/last';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoButtonDeleteAllComponent, TodoInputAddItensComponent, CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  ngDoCheck(){
    this.setLocalStorage();
  }


  public deleteItemTaskList(event : number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Deseja realmente deletar todas as Tasks ?")

    if(confirm){
    this.taskList = [];
    }
  }

  public SetEmitTaskList(event : string){
    this.taskList.push({task:event, checked : false})
    
  }

  public validationInput(event: string, index: number){


    console.log("Cai aqui");
    if(!event.length){
      const confirm = window.confirm("A task está vazia, deseja excluir?")

      if(confirm){
        this.deleteItemTaskList(index)
      }
      
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first,last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
      }
  }
}
