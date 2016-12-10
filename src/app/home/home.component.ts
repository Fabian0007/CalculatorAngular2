import { Component, OnInit } from '@angular/core';
import { TMDBAPIService } from '../tmdbapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  	constructor(
  		private tmdbapiService: TMDBAPIService
  	) { }
  	
  	 movies= [];
    
  	ngOnInit(){
            //var api = this.tmdbapiService.Discover();
            //api.discover.movies().then(function ( response ) {
            //    this.view.movies = response.data;
            //});
            this.tmdbapiService.get().subscribe(response => {
              console.log(response);
              this.movies = response;
            });
  	}
  	
  	


}