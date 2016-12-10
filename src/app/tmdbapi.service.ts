import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class TMDBAPIService {
    
    apiUrl: string = '//api.themoviedb.org/';
    apiKey: string = '802cd9bec58e75474a66bfa717fd1106';
    apiImg: string = '//image.tmdb.org/t/p/w500';
    baseUrl:string =  "https://api.themoviedb.org/3/movie/popular";
    constructor(private http:Http) {
    
        
    }
      
     
     get():Observable<any>{
         return this.http.get(`${this.baseUrl}?api_key=${this.apiKey}`)
         .map((response) =>
             response.json()
         );
     };
      
      
    _normalizeEndpoint() {
        return {'url': this.apiUrl + 3,
            'apiKey': this.apiKey};
            };
            
      Discover ():any {
            var serviceBase    = this._normalizeEndpoint();
    
            /* http://docs.themoviedb.apiary.io/reference/discover/discovermovie */
            var movieList = function ( sortBy, page, includeAdult ) {
                if ( sortBy === undefined ) {
                    sortBy = 'popularity.desc';
                }
                if ( page === undefined ) {
                    page = 1;
                }
                if ( includeAdult === undefined ) {
                    includeAdult = 'false';
                }
                var uri = serviceBase.url + '/discover/movie?page=' + page + '&include_adult=' + includeAdult + '&sort_by=' + sortBy + '&api_key=' + serviceBase.apiKey;
                return this.http.get( uri );
            };
    
            /* http://docs.themoviedb.apiary.io/reference/discover/discovertv */
            var televisionList = function ( sortBy, page ) {
                if ( sortBy === undefined ) {
                    sortBy = 'popularity.desc';
                }
                if ( page === undefined ) {
                    page = 1;
                }
                var uri = serviceBase.url + '/discover/tv?page=' + page + '&sort_by=' + sortBy + '&api_key=' + serviceBase.apiKey;
                return this.http.get( uri );
            };
    
            return {
                discover: {
                    movies: movieList,
                    tv: televisionList
                }
            };
    };

}
