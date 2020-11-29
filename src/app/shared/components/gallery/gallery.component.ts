import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../service/local/products.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() products;
  @Input() nombre: string;
  @Input() precio: number;
  constructor(private productslocalService: ProductsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('La galería tiene la información');
    });
  }
  selectProduct(prod){
    this.productslocalService.editProduct(prod);
  }

}
