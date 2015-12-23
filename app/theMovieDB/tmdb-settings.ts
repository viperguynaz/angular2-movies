import {Configuration} from './configuration'

export interface TmdbSettings {
    configuration?: Configuration;
    baseUrl: string;
    apiKey: string;
}