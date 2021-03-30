import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Model } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


allRestaurant:Model[];
  restaurant: Model[]
  Images: any;
loading=false;



  constructor(private apiService: ApiserviceService, private router: Router) {

  }

  ngOnInit() {
    this.getRestaurent();
    this.getImages()
  }

  getRestaurent() {
   this.restaurant =  this.apiService.getLocalRestaurant();
   this.allRestaurant = this.restaurant;
     
  }


  searchData(event){
    console.log(event)
    
    var variable =  this.allRestaurant.filter((data) => {
      if(data.Brand.toLowerCase().indexOf(event.toLowerCase()) !== -1 || ! event.toLowerCase()){
        
        return data;
      }
    })

    console.log(variable)
    this.restaurant = variable
  }
sort(){
  this.loading=true;

  this.restaurant.sort((a,b) =>{
if(a.Stars==NaN){
a.Stars = 0;
return b.Stars - a.Stars;
}
else if(b.Stars==NaN){
  b.Stars = 0;
  return b.Stars - a.Stars
}

return b.Stars - a.Stars;
  } )

  setTimeout(() => {
    this.loading = false;

  }, 1000)
}
  refresh(){
    this.loading=true;
    this.restaurant = this.allRestaurant;
    setTimeout(() => {
      this.loading = false;

    }, 1000)
  }
  getImages() {
   this.Images =  this.apiService.getImages();

     
  }

// getRestaurant2(){
//   this.apiService.getRestaurant().
//   subscribe((data:Model[]) => {
//     this.restaurant = data
//   });
// }
  viewRestaurant(event) {
    this.router.navigate(['/id', event]);
  }

}
