import { Component } from '@angular/core';
import { tour } from './tour';

@Component({
  selector: 'app-listtours',
  templateUrl: './listtours.component.html',
  styleUrls: ['./listtours.component.css']
})
export class ListtoursComponent {

  filterText = "";

  tours : tour[] = [
    { id:1 ,name: "Fethiye", price: 2000, description:"Fethiye müq", imageUrl: "https://www.odamax.com/omag/wp-content/uploads/2022/05/fethiye-gezilecek-yerler.jpg"},
    { id:2 ,name: "Antalya", price: 1900, description:"Antalya müq", imageUrl: "https://antalyaeksprescomtr.teimg.com/crop/1280x720/antalyaekspres-com-tr/uploads/2023/07/kapak-antalya-1.jpg"},
    { id:3 ,name: "Denizli", price: 1150, description:"Denizli müq", imageUrl: "https://itgp-cdn.tga.gov.tr/other/1-denizli-pamukkale.jpg"},
    { id:4 ,name: "Balıkesir", price: 1200, description:"Balıkesir müq", imageUrl: "https://iasbh.tmgrup.com.tr/59ed6e/0/0/0/0/1000/659?u=https://isbh.tmgrup.com.tr/sbh/2022/08/23/iki-deniz-bir-sehir-balikesir-1661276807177.jpeg&mw=700"},
    { id:5 ,name: "İstanbul", price: 1800, description:"İstanbul müq", imageUrl: "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg"},
    { id:6 ,name: "İzmir", price: 1700, description:"İzmir müq", imageUrl: "https://cdn1.ntv.com.tr/gorsel/eCTRJXDyC0SKKC1hq1yy1Q.jpg?width=1000&mode=crop&scale=both"}
  ]
}
