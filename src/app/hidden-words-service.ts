import { Injectable } from '@angular/core';
import { type HiddenWords } from './types';


@Injectable({
  providedIn: 'root',
})
export class HiddenWordsService {
  private hiddenWords: HiddenWords[] =
    [
      { topicTitle: "Grade 4 - Lesson 3A", percentHidden: 80, numLinesToAppend: 25, words: "amazing\nmake it yourself\nbuilding dollhouses\ncardboard\ncreativity\nhorse-riding\ncommon\ncollecting teddy bears\nmake model\ncollecting coins\ngardening\nlearn how to do something\ngo to the club\ngo jogging\ndo yoga\ndo judo\ngo camping\nkeep fit\nsurf\nplay the violin\nrise\nleave\nflow through\ntimetable\ndrawing class\nset\nplay basketball\narrive\nstart\nbegin\nbe interested in something\nread books\nlisten to music\nexercise\nbelong to\ninsect and bug\noutdoor activity\ndevelop creativity\nreduce stress\npatient\ntake on responsibility\njoin in\nmaturity\nmake someone happy\nspend time together\nvaluable lesson\nwater plants\nbenefit\nduty\nshare\nfootballer\nplay sport\nrun through\ndivide into\nbrainstorm\ntake it up\ndiscuss", meanings: "tuyệt vời\ntự làm lấy\nxây nhà búp bê\nbìa cứng, các-tông\nsự sáng tạo\ncưỡi ngựa\nphổ biến, thịnh hành\nsưu tầm gấu bông\nlàm mô hình\nsưu tầm đồng xu\nviệc làm vườn\nhọc cách làm việc gì\nđi câu lạc bộ\nchạy bộ\ntập yoga\ntập võ judo\ncắm trại\ngiữ dáng\nlướt sóng\nchơi đàn vĩ cầm\nmọc, nhô lên\nrời khỏi\nchảy qua\nthời khóa biểu\nlớp học vẽ\nlặn\nchơi bóng rổ\nđến\nbắt đầu = begin\nbắt đầu\nhứng thú về việc gì\nđọc sách\nnghe nhạc\ntập thể dục\nthuộc về\ncôn trùng và bọ\nhoạt động ngoài trời\nphát triển khả năng sáng tạo\ngiảm căng thẳng\nkiên nhẫn\nchịu trách nhiệm\ntham gia\nsự trưởng thành\nlàm ai đó vui vẻ\ndành thời gian cho nhau\nbài học giá trị\ntưới cây\nlợi ích\nnghĩa vụ, bổn phận\nchia sẻ\ncầu thủ đá bóng\nchơi thể thao\nchảy qua\nchia thành\nđộng não\nbắt đầu một thói quen, sở thích\nthảo luận" },
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
