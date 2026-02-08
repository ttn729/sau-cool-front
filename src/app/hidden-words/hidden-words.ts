import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HiddenWordsService } from '../hidden-words-service';

@Component({
  selector: 'app-hidden-words',
  imports: [FormsModule],
  templateUrl: './hidden-words.html',
  styleUrl: './hidden-words.css',
})
export class HiddenWords {
  hiddenWordsService = inject(HiddenWordsService)
  currentYear = new Date().getFullYear()

  isPrinterFriendly = signal(false)
  isHideWords = signal(false)
  topicTitle = signal('')
  words = signal('')
  meanings = signal('')
  numLinesToAppend = signal<number | null>(null);
  percentHidden = signal<number | null>(null);
  numWordsToKeep = signal<number | null>(null);

  wordMeaningPairs = computed(() => {
    const wordsArr = this.words().split('\n');
    const meaningsArr = this.meanings().split('\n');

    let maxLength = Math.max(wordsArr.length, meaningsArr.length);
    maxLength = Math.min(maxLength, this.numWordsToKeep() ?? maxLength)
    return Array.from({ length: maxLength }, (_, i) => ({ index: i, word: wordsArr[i] ?? '', meaning: meaningsArr[i] ?? '' }));
  });

  constructor(route: ActivatedRoute) {
    const topicTitle: string = route.snapshot.params['topicTitle'];

    const hiddenWord = this.hiddenWordsService.getHiddenWordByTopicTitle(topicTitle)
    if (hiddenWord) {
      this.topicTitle.set(hiddenWord.topicTitle)
      this.words.set(hiddenWord.words ?? '')
      this.meanings.set(hiddenWord.meanings ?? '')
      this.numLinesToAppend.set(hiddenWord.numLinesToAppend ?? null)
      this.percentHidden.set(hiddenWord.percentHidden ?? null)
    }
  }

  scrambleOrder() {
    /** This function was generated with the help of Copilot, 
     * based on my original code in Hidden Words Project */
    const wordsArray = this.words().split('\n');
    const meaningsArray = this.meanings().split('\n');

    for (let i = wordsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
      [meaningsArray[i], meaningsArray[j]] = [meaningsArray[j], meaningsArray[i]];
    }

    this.words.set(wordsArray.join('\n'));
    this.meanings.set(meaningsArray.join('\n'));
  }


  toggleHideWords() {
    console.log(this.wordMeaningPairs())
    this.isHideWords.update((prev) => !prev)
  }

  togglePrinterFriendly() {
    this.isPrinterFriendly.update((prev) => !prev)
  }
}
