import { Injectable } from '@angular/core';
import { QuestionBase } from './models/question-base';
import { QuestionDropdown } from './models/question-dropdown';
import { QuestionTextbox } from './models/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions() {
    const questions: QuestionBase<any>[] = [
      new QuestionDropdown({
        key: 'gender',
        label: 'Gender',
        options: [
          { key: 'male', value: 'MALE' },
          { key: 'female', value: 'FEMALE' }
        ],
        order: 6
      }),
      new QuestionTextbox({
        key: 'firstName',
        label: 'First Name',
        value: null,
        required: true,
        order: 1
      }),
      new QuestionTextbox({
        key: 'middleName',
        label: 'Middle Name',
        value: null,
        required: true,
        order: 2
      }),
      new QuestionTextbox({
        key: 'lastName',
        label: 'Last Name',
        value: null,
        required: true,
        order: 3
      }),
      new QuestionTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      }),
      new QuestionTextbox({
        key: 'phone',
        label: 'Phone',
        type: 'text',
        order: 5
      })
    ];

    return questions.sort((a, b) => a.order - b.order)
  }
}
