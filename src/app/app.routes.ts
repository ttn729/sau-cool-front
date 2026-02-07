import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PMC } from './pmc/pmc';
import { HiddenWords } from './hidden-words/hidden-words';

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
        path: 'pmc',
        component: PMC,
        title: 'Phương Mỹ Chi'
    }
];
