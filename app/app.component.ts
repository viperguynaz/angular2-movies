import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

import{Movie} from './theMovieDB/movie'
import {LoggerService} from './logger.service'
import{MovieService} from './theMovieDB/movie.service'


@Component({
    selector: 'my-app', 
    templateUrl: './views/movieList.html',
    providers: [
        HTTP_PROVIDERS,
        LoggerService,
        MovieService
    ]
})

export class AppComponent implements OnInit { 
    public movie: Movie;
    public movieList: Movie[];
    private _movieService: MovieService;
    private _logger: LoggerService;
    constructor(movieService: MovieService, logger: LoggerService) {
        this._logger = logger;
        this._movieService = movieService;
        // movieService.getMovie(550)
        //     .subscribe( 
        //         data => this.movie = data,
        //         err => this._logger.error(err),
        //         () => console.log("getMovie complete....."));

    }   
    
    ngOnInit() {
         this._movieService.init();
         this._movieService.getNowPlaying()
            .subscribe( 
                data => this.movieList = data,
                err => this._logger.error(err),
                () => console.log("getNowPlaying complete....."));        
    }
}
