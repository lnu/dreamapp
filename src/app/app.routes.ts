import { AlbumDetailsComponent } from './spotify/component/album-details/album-details.component';
import { SearchComponent } from './spotify/component/search/search.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'spotify', component: SearchComponent },
 { path: 'spotify/:id', component: AlbumDetailsComponent }
];