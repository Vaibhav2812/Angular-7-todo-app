import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
public questions: any[];
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

}
