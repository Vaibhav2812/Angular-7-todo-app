import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDetailModule } from './components/todo-detail/todo-detail.module';
import { TodoListModule } from './components/todo-list/todo-list.module';
import { TopHeaderComponent } from './top-header/top-header.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    TodoDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
