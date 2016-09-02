import { Routes, RouterModule } from '@angular/router';
import {MainBoardComponent} from './votingApp/main.board.component';

export const CustomRoutes: Routes = [
    //{path: '', component: 'MainBoardComponent'}

];

export const CustomRouting = RouterModule.forRoot(CustomRoutes);