import { Component, ViewChild } from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Quotes-App';
  @ViewChild(ModalDirective) modal!: ModalDirective;
}
