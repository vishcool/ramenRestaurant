import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {


  Images:any = [
    {
       "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexee3e8a8.jpeg"
    },
    {
       "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/images135ea53.jpeg"
    },
    {
       "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/garlic-noodles-61-700x6802c7f765.jpeg"
    },
    {
       "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/Hakka-Noodles-2-34755e38.jpeg"
    },
    {
       "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/1200px-Mama_instant_noodle_block625f483.jpeg"
    },
    {
       "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/20190530-ramen-noodles-vicky-wasik-76-1500x11257be7d5b.jpeg"
    },
    {
       "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/200702_Hand-Pulled-Noodles_55099856b5.jpeg"
    }
 ]


 restaurant2:any=[
  {
    "Brand": "MAMA",
    "Variety": "Instant Noodles Coconut Milk Flavour",
    "Style": "Pack",
    "Country": "Myanmar",
    "Stars": 5,
    "Top Ten": "2016 #10"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Laksa Wholegrain La Mian",
    "Style": "Nan",
    "Country": "Singapore",
    "Stars": 5,
    "Top Ten": "2016 #1"
  },
  {
    "Brand": "Prima",
    "Variety": "Juzz's Mee Creamy Chicken Flavour",
    "Style": "Pack",
    "Country": "SG",
    "Stars": "NaN",
    "Top Ten": "2016 #8"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Curry Wholegrain La Mian",
    "Style": "Pack",
    "Country": "Singapore",
    "Stars": 5,
    "Top Ten": "2016 #5"
  },
  {
    "Brand": "Tseng Noodles",
    "Variety": "Scallion With Sichuan Pepper  Flavor",
    "Style": "Pack",
    "Country": "Taiwan",
    "Stars": 5,
    "Top Ten": "2016 #9"
  },
  {
    "Brand": "Wugudaochang",
    "Variety": "Tomato Beef Brisket Flavor Purple Potato Noodle",
    "Style": "Pack",
    "Country": "China",
    "Stars": 5,
    "Top Ten": "2016 #7"
  },
  {
    "Brand": "A-Sha Dry Noodle",
    "Variety": "Veggie Noodle Tomato Noodle With Vine Ripened Tomato Sauce",
    "Style": "Pack",
    "Country": "Taiwan",
    "Stars": 5,
    "Top Ten": "NaN"
  },
  {
    "Brand": "MyKuali",
    "Variety": "Penang Hokkien Prawn Noodle (New Improved Taste)",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "NaN"
  },
  {
    "Brand": "CarJEN",
    "Variety": "Nyonya Curry Laksa",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "2015 #4"
  },
  {
    "Brand": "Maruchan",
    "Variety": "Gotsumori Sauce Yakisoba",
    "Style": "Tray",
    "Country": "JPN",
    "Stars": 5,
    "Top Ten": "2015 #9"
  },
  {
    "Brand": "Mamee",
    "Variety": "Chef Gold Recipe Mi Kari Seribu Rasa",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "2015 #6"
  },
  {
    "Brand": "MyKuali",
    "Variety": "Penang Red Tom Yum Goong Noodle",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "2015 #1"
  },
  {
    "Brand": "Mama",
    "Variety": "Instant Noodles Shrimp Creamy Tom Yum Flavour Jumbo Pack",
    "Style": "Pack",
    "Country": "Thailand",
    "Stars": 5,
    "Top Ten": "2013 #10"
  },
  {
    "Brand": "Mama",
    "Variety": "Oriental Style Instant Noodles Green Curry Flavour Jumbo Pack",
    "Style": "Pack",
    "Country": "Thailand",
    "Stars": 5,
    "Top Ten": "2015 #8"
  },
  {
    "Brand": "Mamee",
    "Variety": "Chef Curry Laksa Flavour",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": "NaN",
    "Top Ten": "2014 #7"
  },
  {
    "Brand": "Sapporo Ichiban",
    "Variety": "Otafuku Okonomi Sauce Yakisoba",
    "Style": "Tray",
    "Country": "Japan",
    "Stars": "NaN",
    "Top Ten": "2014 #4"
  },
  {
    "Brand": "Nongshim",
    "Variety": "Soon Veggie Noodle Soup",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 5,
    "Top Ten": "2014 #9"
  },
  {
    "Brand": "Mama",
    "Variety": "Instant Noodles Yentafo Tom Yum Mohfai Flavour",
    "Style": "Pack",
    "Country": "Thailand",
    "Stars": 5,
    "Top Ten": "2014 #10"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Chilli Crab La Mian",
    "Style": "NaN",
    "Country": "Singapore",
    "Stars": 5,
    "Top Ten": "NaN"
  },
  {
    "Brand": "Samyang Foods",
    "Variety": "Maesaengyitangmyun Baked Noodle",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 5,
    "Top Ten": "2014 #5"
  },
  {
    "Brand": "Paldo",
    "Variety": "Cheese Noodle",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 5,
    "Top Ten": "2014 #6"
  },
  {
    "Brand": "MyKuali",
    "Variety": "Penang White Curry Noodle",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "2014 #1"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Laksa La Mian",
    "Style": "Pack",
    "Country": "SG",
    "Stars": 5,
    "Top Ten": "2013 #1"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Curry La Mian",
    "Style": "Pack",
    "Country": "Singapore",
    "Stars": "NaN",
    "Top Ten": "2013 #2"
  },
  {
    "Brand": "Nongshim",
    "Variety": "Jinjja Jinjja Flamin' Hot & Nutty",
    "Style": "Pack",
    "Country": "USA",
    "Stars": 5,
    "Top Ten": "2013 #4"
  },
  {
    "Brand": "Paldo",
    "Variety": "Kokomen Spicy Chicken",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 5,
    "Top Ten": "2013 #9"
  },
  {
    "Brand": "Indomie",
    "Variety": "Mi Goreng Rendang (Import)",
    "Style": "Pack",
    "Country": "Indonesia",
    "Stars": 5,
    "Top Ten": "2013 #3"
  },
  {
    "Brand": "Koka",
    "Variety": "Spicy Black Pepper",
    "Style": "Pack",
    "Country": "SG",
    "Stars": 5,
    "Top Ten": "NaN"
  },
  {
    "Brand": "Nongshim",
    "Variety": "Shin Ramyun Black",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 4.75,
    "Top Ten": "2012 #7"
  },
  {
    "Brand": "Mi Sedaap",
    "Variety": "Kari Spesial",
    "Style": "Pack",
    "Country": "Indonesia",
    "Stars": 4.5,
    "Top Ten": "2012 #5"
  },
  {
    "Brand": "Nissin",
    "Variety": "Yakisoba Noodles Karashi",
    "Style": "Tray",
    "Country": "Japan",
    "Stars": 5,
    "Top Ten": "2012 #3"
  },
  {
    "Brand": "Myojo",
    "Variety": "Hyoubanya No Chukasoba Oriental",
    "Style": "Pack",
    "Country": "JPN",
    "Stars": 4.25,
    "Top Ten": "2012 #6"
  },
  {
    "Brand": "Doll",
    "Variety": "Artificial Chicken",
    "Style": "Pack",
    "Country": "Hong Kong",
    "Stars": 4.5,
    "Top Ten": "2012 #9"
  },
  {
    "Brand": "Indomie",
    "Variety": "Special Fried Curly Noodle",
    "Style": "Pack",
    "Country": "Indonesia",
    "Stars": 5,
    "Top Ten": "2012 #1"
  },
  {
    "Brand": "Indomie",
    "Variety": "Mi Goreng Jumbo Barbecue Chicken",
    "Style": "Pack",
    "Country": "Indonesia",
    "Stars": "NaN",
    "Top Ten": "2012 #2"
  },
  {
    "Brand": "Myojo",
    "Variety": "Ippeichan Yakisoba",
    "Style": "Tray",
    "Country": "Japan",
    "Stars": 4,
    "Top Ten": "2013 #6"
  },
  {
    "Brand": "Sapporo Ichiban",
    "Variety": "Chow Mein",
    "Style": "Pack",
    "Country": "JPN",
    "Stars": 5,
    "Top Ten": "2012 #4"
  }
]
  constructor(private http: HttpClient) { }


  getRestaurant() {
    return this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json");
  }


  getLocalRestaurant(){
return this.restaurant2;
  }


  getImages(){
    return this.Images;
  }

  getRestaurantDetail(id){
    return this.restaurant2[id];
  }

  


  
}