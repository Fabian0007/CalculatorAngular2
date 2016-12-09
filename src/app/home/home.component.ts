import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TMDBAPIService } from '../tmdbapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TMDBAPIService]
})
export class HomeComponent implements OnInit {

  	constructor(
  		private route: ActivatedRoute,
  		private router: Router,
  		private tmdbapiService: TMDBAPIService
  	) { }
  	
  	view: any = {
                movies: [],
            };
    
  	ngOnInit(){
            var api = this.tmdbapiService.Discover();
            api.discover.movies().then(function ( response ) {
                this.view.movies = response.data;
            });
  	}
  	
  	


}