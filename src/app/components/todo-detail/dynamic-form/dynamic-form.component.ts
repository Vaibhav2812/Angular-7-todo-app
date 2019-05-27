import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/question-control.service';
import { QuestionBase } from 'src/app/models/question-base';
import { TodoService } from 'src/app/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() public questions: QuestionBase<any>[];
  public form: FormGroup;
  constructor(private qcs: QuestionControlService,
              private todoService: TodoService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  public onSubmit() {
    this.todoService.updateTodoById(this.form.value);
    this.router.navigate(['/todo-list']);
  }
}
