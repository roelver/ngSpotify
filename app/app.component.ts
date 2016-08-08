import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	 moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    precompile: [AboutComponent, SearchComponent]
})

export class AppComponent { }
