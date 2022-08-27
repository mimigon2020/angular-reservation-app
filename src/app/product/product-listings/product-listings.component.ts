import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // サービスからObservableを取得
    const productObservable = this.productService.getProducts();
    
    // Observableを観測
    productObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (error) => { 
        console.log('次のエラーが発生しました：' + error);
      }
    );
  }

}
