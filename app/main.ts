import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app.router';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { SpotifyService } from './services/spotify.service';


bootstrap(AppComponent, 
	[ appRouterProviders,
		SpotifyService,
		HTTP_PROVIDERS,
		disableDeprecatedForms(), 
		provideForms()
	]
);
