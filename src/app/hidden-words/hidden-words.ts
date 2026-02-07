import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hidden-words',
  imports: [FormsModule],
  templateUrl: './hidden-words.html',
  styleUrl: './hidden-words.css',
})
export class HiddenWords {
  isPrinterFriendly = false
  isHideWords = false
  percentHidden: Number | null = null
  numLinesToAppend: Number | null = null
  topicTitle = ''

  words = ''
  meanings = ''

  scrambleOrder() {
    /** This function was generated with the help of Copilot, 
     * based on my original code in Hidden Words Project */
    const wordsArray = this.words.split('\n');
    const meaningsArray = this.meanings.split('\n');

    for (let i = wordsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
      [meaningsArray[i], meaningsArray[j]] = [meaningsArray[j], meaningsArray[i]];
    }

    this.words = wordsArray.join('\n');
    this.meanings = meaningsArray.join('\n');
  }


  toggleHideWords() {
    this.isHideWords = !this.isHideWords;
  }

  togglePrinterFriendly() {
    this.isPrinterFriendly = !this.isPrinterFriendly;
  }


}
