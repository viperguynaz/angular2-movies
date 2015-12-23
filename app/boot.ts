import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {LoggerService} from './logger.service'
import {MovieService} from './theMovieDB/movie.service'
import {AppComponent} from './app.component'

bootstrap(AppComponent, [HTTP_PROVIDERS, LoggerService, MovieService]);