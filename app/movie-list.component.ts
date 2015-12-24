import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, Router} from 'angular2/router';
import 'rxjs/add/operator/map';

import {Movie} from './theMovieDB/movie'
import {LoggerService} from './logger.service'
import {MovieService} from './theMovieDB/movie.service'

@Component({        
    selector: 'my-app', 
    templateUrl: './views/movieList.html',
    providers: [
        HTTP_PROVIDERS,
        LoggerService,
        MovieService
    ]   
})

export class MovieListComponent implements OnInit { 
    public movieList: Movie[];
    
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: MovieService,
        private _logger: LoggerService) { }
    
    ngOnInit() { 
         this._service.getNowPlaying()
            .subscribe( 
                data => this.movieList = data,
                err => this._logger.error(err),
                () => console.log("getNowPlaying complete....."));  
    } 
    
    onSelect(movie: Movie) {
        this._router.navigate( ['MovieDetail', { id: movie.id }] );
    } 
}