import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelocmeComponent } from './welocme/welocme.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { EcartComponent } from './ecart/ecart.component';
import { EmailComponent } from './email/email.component';
import { PicsComponent } from './pics/pics.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImbdComponent } from './imbd/imbd.component';
import { PokemanComponent } from './pokeman/pokeman.component';
import { SocialComponent } from './social/social.component';
import { StudentComponent } from './student/student.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { UserRegisComponent } from './user-regis/user-regis.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelocmeComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'caluc',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'derectives',component:DirectivesComponent},
    {path:'eventregistration',component:EventRegistrationComponent},
    {path:'employeeregistration',component:EmployeeRegistrationComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'account', component:AccountsComponent},
    {path:'createaccount', component:CreateAccountComponent},
    {path:'createvehilcle', component:CreateVehicleComponent},
    {path:'ecart', component:EcartComponent},
    {path:'emaile', component:EmailComponent},
    {path:'pics', component:PicsComponent},
    {path:'weather', component:WeatherComponent},
    {path:'blog', component:BlogComponent},
    {path:'IMDb', component:ImbdComponent},
    {path:'pokeman', component:PokemanComponent},
    {path:'social', component:SocialComponent},
    {path:'student', component:StudentComponent},
    {path:'studentid', component:StudentIdComponent},
    {path:'createUser',component:UserRegisComponent},
    {path:'',component:HomeComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
