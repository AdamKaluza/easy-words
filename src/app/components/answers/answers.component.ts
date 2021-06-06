import {Component, Input, OnInit} from '@angular/core';
import {WordType} from "../../data/models";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() words: WordType[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
