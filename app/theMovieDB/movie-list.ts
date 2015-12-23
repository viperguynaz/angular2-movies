import {Movie} from './movie'
import {Dates} from './dates'

export interface MovieList {
    page: number;
    results: Movie[];
    dates: Dates;
    total_pages: number;
    total_results: number;
}

