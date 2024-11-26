import { Component } from '@angular/core';
import { PicsService } from '../pics.service';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent {
picsdata:any=[];

constructor(private picsData:PicsService){
  this.picsData.getPics().subscribe(
    (data:any)=>{
      this.picsdata=data;
    },
    (err:any)=>{
      alert("internal error")
    }
  )
}

}
