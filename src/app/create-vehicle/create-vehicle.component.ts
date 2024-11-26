import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

constructor(private vehicleService:VehicleService){}

public vehicleForm:FormGroup = new FormGroup(
  {
    Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image:new FormControl(),
      cost: new FormControl(),
  }
)
submit(){
  this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("create")
    },
    (err:any)=>{
      alert("error")
    }
  )
}

}
