import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/add/operator/map';

import {Movie} from './theMovieDB/movie'
import {MovieListComponent} from './movie-list.component'
import {MovieDetailComponent} from './movie-detail.component'
import {LoggerService} from './logger.service'
import {MovieService} from './theMovieDB/movie.service'


@Component({
    selector: 'my-app', 
    templateUrl: './views/layout.html',
    providers: [
        HTTP_PROVIDERS,
        LoggerService,
        MovieService
    ],
    directives: [ROUTER_DIRECTIVES]

})

@RouteConfig([
  { path:'/',               name: 'Home',          component: MovieListComponent },
  { path:'/movie/:id',      name: 'MovieDetail',   component: MovieDetailComponent }
])

export class AppComponent implements OnInit { 
    
    public movieList: Movie[];

    constructor(
        private _movieService: MovieService, 
        private _logger: LoggerService, 
        private _router: Router) { }   
    
    ngOnInit() {
         this._movieService.init();    
    }
}
