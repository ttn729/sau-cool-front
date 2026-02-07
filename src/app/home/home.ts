import { Component } from '@angular/core';
import { HiddenWords } from '../hidden-words/hidden-words';

@Component({
  selector: 'app-home',
  imports: [HiddenWords],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
