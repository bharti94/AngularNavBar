import { Component } from '@angular/core';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent
{
  productTableHeading:string="Product List";
  productList:any[]=[
    {
      productName:"Bose Headphones",
      productPrice:20000,
      productDescripton:"High quality headphones"
    },
    {
      productName:"Cadbury bournville",
      productPrice:150,
      productDescripton:"Dark chocolate"
    },
    {
      productName:"Parker pen",
      productPrice:500,
      productDescripton:"Gel pen"
    }
  ]



}
