import {Component} from 'angular2/core';
import{Movie} from './theMovieDB/movie'
import {LoggerService} from './logger.service'
import{MovieService} from './theMovieDB/movie.service'
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app', 
    templateUrl: './views/movieList.html'
})

export class AppComponent { 
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
        movieService.getNowPlaying()
            .subscribe( 
                data => this.movieList = data,
                err => this._logger.error(err),
                () => console.log("getNowPlaying complete....."));
    }   
}
