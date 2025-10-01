import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, DetailsOfProduct } from './services/product.service';

// PrimeNG Modules
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbModule,
    ToastModule,
    ButtonModule,
    RatingModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    ChipModule,
    TabViewModule,
    TagModule,
    DialogModule,
    ProgressSpinnerModule,
    AvatarModule,
    TooltipModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId!: string;
  product?: DetailsOfProduct;
  selectedColor?: string;
  selectedSize?: string;
  selectedImage?: string;
  selectedQuantity = 1;
  isInWishlist = false;

  breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Details' }
  ];

  showReviewDialog = false;

  newReview = {
    rating: 0,
    userName: '',
    comment: ''
  };

  relatedProducts: DetailsOfProduct[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.product = this.productService.getProductById(this.productId);
    if (!this.product) {
      console.warn(`Product with ID ${this.productId} not found.`);
    } else {
      // Set default selected image
      this.selectedImage = this.product.image;
      // Set default color and size if available
      this.selectedColor = this.product.availableColors?.[0];
      this.selectedSize = this.product.availableSizes?.[0];
      // Populate related products
      this.relatedProducts = this.productService.getRelatedProducts(this.product.category, this.productId);
    }
  }

  // Getter to handle images as array
  get productImages(): string[] {
    return this.product?.image ? [this.product.image] : [];
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warning';
      case 'OUTOFSTOCK': return 'danger';
      default: return 'info';
    }
  }

  addToCart() {
    console.log('Add to cart', this.selectedQuantity);
  }

  toggleWishlist() {
    this.isInWishlist = !this.isInWishlist;
  }

  shareProduct() {
    console.log('Share product');
  }

  submitReview() {
    console.log('Submitting review', this.newReview);
    this.showReviewDialog = false;
  }
}