import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, Router} from 'angular2/router';
import 'rxjs/add/operator/map';

import {Movie} from './theMovieDB/movie'
import {LoggerService} from './logger.service'
import {MovieService} from './theMovieDB/movie.service'

@Component({        
    selector: 'my-app', 
    templateUrl: './views/movieDetail.html',
    providers: [
        HTTP_PROVIDERS,
        LoggerService,
        MovieService
    ]   
})

export class MovieDetailComponent implements OnInit { 
    public movie: Movie;
    
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: MovieService,
        private _logger: LoggerService) { }
    
    ngOnInit() { 
        let id = this._routeParams.get('id');
        this._service.getMovie(+id)
            .subscribe( 
                data => this.movie = data,
                err => this._logger.error(err),
                () => console.log("getMovie complete....."));
    }    
}