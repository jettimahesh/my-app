import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  term:string="";
  pname:string="";
  pprice:number=0;
  prating:number=0;
  pfreedeliv:boolean=true;

  products: any = [
    { productname: 'Bag', price: 500, rating: 5, freedelivery: false },
    { productname: 'Shirt', price: 400, rating: 3, freedelivery: true },
    { productname: 'Cap', price: 250, rating: 3, freedelivery: false },
    { productname: 'Mobile', price: 10000, rating: 4, freedelivery: true },
    { productname: 'Laptop', price: 35000, rating: 4, freedelivery: true },
    { productname: 'Mobile case', price: 350, rating: 3, freedelivery: false },
    { productname: 'Charger', price: 300, rating: 2, freedelivery: false },
    { productname: 'Airpads', price: 4000, rating: 4, freedelivery: true },
    { productname: 'Watch', price: 5000, rating: 5, freedelivery: true }
  ];
  
  delete(i:number){
    this.products.splice(i,1)
  }
 search(){
  this.products = this.products.filter((product: any) =>product.productname.toLowerCase().includes(this.term.toLowerCase()));
  
 }
 free(){
  this.products = this.products.filter((product: any) =>product.freedelivery==true);
 }

 phtol(){
  this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
 }
 pltoh(){
  this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
 }
 rhtol(){
  this.products = this.products.sort((a:any,b:any)=>b.rating-a.rating);
 }
 rltoh(){
  this.products = this.products.sort((a:any,b:any)=>a.rating-b.rating);
 }
 discount(){
  this.products = this.products.map((product:any)=>{
    product.price = product.price*0.5
    return product;
  })
 }
 deliver(){
  this.products=this.products.map((product:any)=>{
    product.price=product.price + 45;
    return product;
  })
 }
 total(){
  let total = this.products.reduce((sum:any, product:any)=> sum+product.price,0)
  alert(total)
 }
 cart(){
  let cart = this.products.length;
  alert(cart)
 }
 addp(){
  let product = {
    productname:this.pname,
    price:this.pprice,
    rating:this.prating,
    freedelivery:this.pfreedeliv
  }
  this.products.unshift(product);
 }
}

  // this.products = this.products.filter((product:any)=>product.freedelivery==true)

