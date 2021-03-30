import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Model } from '../model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiserviceService) { }

  id: number;
  topTen:any;
  private sub: any;
  loading = true;
  Images: any;
  restaurant: Model;
  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.fetchRestaurant(this.id);
      this.fetchImages();
      setTimeout(() => {
        this.loading = false;

      }, 1000)

    });


  }

  fetchRestaurant(id) {
    this.restaurant = this.apiService.getRestaurantDetail(id)
    this.topTen = this.restaurant['Top Ten']
  }

  fetchImages() {
    this.Images = this.apiService.getImages();
    console.log(this.Images)

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
