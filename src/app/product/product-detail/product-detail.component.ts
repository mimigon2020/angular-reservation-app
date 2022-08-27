import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // サービスからObservableを取得
      const productObservable = this.productService.getProductById(params.get('productId')!);

      // Observableを観測
      productObservable.subscribe(
        (data) => {
          this.product = data
        },
        (error) => {
          console.log('次のエラーが発生しました：' + error);
        }
      )
    })
  }

}
