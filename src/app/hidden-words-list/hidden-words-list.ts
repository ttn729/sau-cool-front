import { Component, inject } from '@angular/core';
import { HiddenWordsService } from '../hidden-words-service'
import { type HiddenWords } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hidden-words-list',
  imports: [],
  templateUrl: './hidden-words-list.html',
  styleUrl: './hidden-words-list.css',
})
export class HiddenWordsList {
  private router = inject(Router);

  hiddenWordsList: HiddenWords[] = []
  hiddenWordsService = inject(HiddenWordsService)

  constructor() {
    this.hiddenWordsList = this.hiddenWordsService.getHiddenWords()
  }

  deleteHiddenWords(topicTitle: string) {
    this.hiddenWordsService.deleteHiddenWords(topicTitle)
    this.hiddenWordsList = this.hiddenWordsService.getHiddenWords()
  }

  editHiddenWords(topicTitle: string) {
    console.log('navigating')
    this.router.navigate(['/hidden-words', topicTitle]);
  }
}
