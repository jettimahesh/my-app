import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{ HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
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
import { UserRegisComponent } from './user-regis/user-regis.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelocmeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    EmployeeRegistrationComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    EcartComponent,
    EmailComponent,
    PicsComponent,
    WeatherComponent,
    BlogComponent,
    ImbdComponent,
    PokemanComponent,
    SocialComponent,
    StudentComponent,
    StudentIdComponent,
    UserRegisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
