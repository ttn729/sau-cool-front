import { Injectable } from '@angular/core';
import { type HiddenWords } from './types';


@Injectable({
  providedIn: 'root',
})
export class HiddenWordsService {
  private hiddenWords: HiddenWords[] =
    [
      { topicTitle: 'Grade 4 - Lesson 3A' },
      { topicTitle: 'Grade 5 - Lesson 3A' },
      { topicTitle: 'Grade 6 - Lesson 2A' },
      { topicTitle: 'Grade 6 - Lesson 3A' },
      { topicTitle: 'Grade 7 - Lesson 3A' },
      { topicTitle: 'Grade 8 - Lesson 2A' },
      { topicTitle: 'Grade 8 - Lesson 3A' },
    ]

  addHiddenWord(topicTitle: string): void {
    this.hiddenWords.push({ topicTitle })
  }

  getHiddenWordByTopicTitle(topicTitle: string): HiddenWords | undefined {
    return this.hiddenWords.find(hw => hw.topicTitle === topicTitle)
  }

  getHiddenWords(): HiddenWords[] {
    return [...this.hiddenWords]
  }

  deleteHiddenWords(topicTitle: string): void {
    this.hiddenWords = this.hiddenWords.filter(hw => hw.topicTitle !== topicTitle)
  }
}
