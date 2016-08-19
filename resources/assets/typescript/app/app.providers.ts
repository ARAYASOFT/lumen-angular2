import { AuthGuard } from './modules/auth/auth.guard';
import { AppState } from './app.service';
import { ApiService } from './modules/api/api.service';
import { UserService } from './modules/user/user.service';

// Application wide providers
export const APP_PROVIDERS = [
    AppState,
    ApiService,
    UserService,
    AuthGuard
];
