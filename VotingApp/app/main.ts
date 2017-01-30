import {platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module'; //123

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
