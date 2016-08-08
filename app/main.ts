import { bootstrap }    from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app.router';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [appRouterProviders]);
