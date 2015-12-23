// angular imports
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

// local imports
import {LoggerService} from '../logger.service'
import {Movie} from './movie'
import {Configuration} from './configuration'
import {TmdbSettings} from './tmdb-settings'

@Injectable()
export class MovieService {
    private _http: Http;
    private _logger: LoggerService;
    public settings: TmdbSettings;

    constructor (http: Http, logger: LoggerService) {
        this._http = http;
        this._logger = logger;
        this.settings = {
            baseUrl: 'https://api.themoviedb.org/3',
            apiKey: 'api_key=5790941f2517a716faad72ae4958ca7f'
        }
    }
     
    init() {
        this._http.get(this.tmdbAction('/configuration'))
            .map(res => res.json())
            .subscribe(
                data => this.settings.configuration = data,
                err => this._logger.error(err),
                () => console.log("getConfiguration complete....."));
    }
    
    getMovie(id: number) {
        return this._http.get(this.tmdbAction(`/movie/${id}`)).map(res => res.json());
    }
    
    getNowPlaying() {
        return this._http.get(this.tmdbAction('/movie/now_playing')).map(res => res.json());
    }
    
    private tmdbAction(action: string) : string {
        return `${this.settings.baseUrl}${action}?${this.settings.apiKey}`
    }
}