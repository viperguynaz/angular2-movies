import {Genre} from './genre'
import {ProductionCompany} from './production-company'
import {ProductionCountry} from './production-country'
import {SpokenLanguage} from './spoken-language'

export interface Movie {
    adult?                : boolean;
    backdrop_path?        : string;
    belongs_to_collection?: any;
    budget?               : number;
    genres?               : Genre[];
    homepage?             : string;
    id                    : number;
    imdb_id?              : number;
    original_title?       : string;
    overview?             : string;
    popularity?           : number;
    poster_path?          : string;
    production_companies? : ProductionCompany[];
    production_countries? : ProductionCountry[];
    release_date?         : Date;
    revenue?              : number;
    runtime?              : number;
    spoken_languages?     : SpokenLanguage[];
    status?               : string;
    tagline?              : string;
    title                 : string;
    vote_average?         : number;
    vote_count?           : number;
}