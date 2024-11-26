import { Component } from '@angular/core';
import { SocialService } from '../social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
socialdata:any=[];

constructor(private socialData:SocialService) {

  socialData.getSocial().subscribe(
    (data:any)=>{
      this.socialdata=data;
    },
    (err:any)=>{
      alert("internal error")
    }
  )
}

}
