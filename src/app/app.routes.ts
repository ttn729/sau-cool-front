import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PMC } from './pmc/pmc';
import { HiddenWords } from './hidden-words/hidden-words';
import { HiddenWordsList } from './hidden-words-list/hidden-words-list';
import { SpicyScrambler } from './spicy-scrambler/spicy-scrambler';
import { HiddenWordsAbout } from './hidden-words-about/hidden-words-about';
import { SpicyScramblerAbout } from './spicy-scrambler-about/spicy-scrambler-about';


export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Sâu Cool Home'
    },
    {
        path: 'hidden-words-about',
        component: HiddenWordsAbout,
        title: 'About Hidden Words'
    },
    {
        path: 'hidden-words',
        component: HiddenWords,
        title: 'Hidden Words'
    },
    {
        path: 'hidden-words/:topicTitle',
        component: HiddenWords,
        title: 'Hidden Words'
    },
    {
        path: 'hidden-words-list',
        component: HiddenWordsList,
        title: 'Hidden Words List'
    },
    {
        path: 'spicy-scrambler',
        component: SpicyScrambler,
        title: 'Spicy Scrambler'
    },
    {
        path: 'spicy-scrambler-about',
        component: SpicyScramblerAbout,
        title: 'About Spicy Scrambler'
    },
    {
        path: 'pmc',
        component: PMC,
        title: 'Phương Mỹ Chi'
    }
];
