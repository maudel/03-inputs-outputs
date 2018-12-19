import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista de Pasos para hacer un proyecto con Angular';
  esMartes = false;
  valorFinal = 1;
  rojo = 'blue';
  todoList = [
    {title: 'Inslala NodeJS'},
    {title: 'Instala Angular CLI'},
    {title: 'crear new app'},
    {title: 'correr app'},
    {title: 'desarrolladro app'},
    {title: 'deployar app'},
  ];
  excede = this.todoList.length > 0;

  cambiarRojo() {
    return 'red';
  }
  cambiarColor() {
    if (this.valorFinal === 1) {
      this.valorFinal = 0;
    } else {
      this.valorFinal = 1;
    }
    return this.valorFinal;
  }
  addItem(title: string): void {
    this.todoList.push({ title });
  }
  agregaItem(): void {

    this.todoList.push({ title: this.title});
  }
  cambiarTitulo (event: any): void {
    console.log(event);
    this.title = event.target.value;

  }

}
