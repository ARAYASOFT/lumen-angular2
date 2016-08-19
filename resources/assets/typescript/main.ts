///<reference path="../../../typings/index.d.ts"/>

/*
 * Providers provided by Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';

/*
 * Platform and Environment
 * our providers/directives/pipes
 */
import { PLATFORM_PROVIDERS } from './platform/browser/browser';
import { ENV_PROVIDERS, decorateComponentRef } from './platform/environment';

/*
 * App Component
 * our top level component that holds all of our components
 */
import { AppComponent } from "./app/app.component";
import { APP_PROVIDERS } from "./app/app.providers";

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
bootstrap(AppComponent, [
    // To add more vendor providers please look in the platform/ folder
    ...PLATFORM_PROVIDERS,
    ...ENV_PROVIDERS,
    ...APP_PROVIDERS,
])
    .then(decorateComponentRef)
    .catch(err => console.error(err));
