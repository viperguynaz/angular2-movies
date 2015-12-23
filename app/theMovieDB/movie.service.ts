import {Injectable} from 'angular2/core';
import {LoggerService} from '../logger.service'
import {Movie} from './movie'
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
    private _http: Http;
    private _logger: LoggerService;
    private _baseUrl = 'https://api.themoviedb.org/3';
    private _apiKey = 'api_key=5790941f2517a716faad72ae4958ca7f';
    
    constructor (http: Http, logger: LoggerService) {
        this._http = http;
        this._logger = logger;
     }
    
    getMovie(id: number) {
        return this._http.get(this._baseUrl + '/movie/' + id + '?' + this._apiKey).map(res => res.json());
    }
    
    getNowPlaying() {
        return this._http.get(this._baseUrl + '/movie/now_playing?' + this._apiKey).map(res => res.json());
    }
}