import { RouterConfig, provideRouter } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

const routes: RouterConfig = [
   { path: '', component: SearchComponent},
   { path: 'about', component: AboutComponent}
];

export const appRouterProviders = [
	provideRouter(routes);
];

