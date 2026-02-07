import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PMC } from './pmc/pmc';
import { HiddenWords } from './hidden-words/hidden-words';
import { HiddenWordsList } from './hidden-words-list/hidden-words-list';


export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Sâu Cool Home'
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
        path: 'pmc',
        component: PMC,
        title: 'Phương Mỹ Chi'
    }
];
