import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import{HttpClient} from '@angular/common/http'
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  products:Product[] = [];
  apiUrl='https://localhost:44388/api/Products/GetAll'
  
  constructor(private httpClient:HttpClient){}

  getProducts(){
    this.httpClient
    .get<ProductResponseModel>(this.apiUrl)
    .subscribe((response)=>{this.products = response.data});
  }

  ngOnInit():void{
    this.getProducts();
  }
}