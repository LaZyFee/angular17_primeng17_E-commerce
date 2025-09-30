import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, FlashSaleProduct } from './services/product.service';

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
  product?: FlashSaleProduct;

  // ✅ Add these missing properties used in template
  breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Details' }
  ];

  selectedImage?: string;
  selectedQuantity = 1;
  isInWishlist = false;

  // For reviews dialog
  showReviewDialog = false;

  newReview = {
    rating: 0,
    userName: '',
    comment: ''
  };

  reviews = [
    // example reviews
    { userName: 'Alice', rating: 5, comment: 'Great product!', date: new Date(), helpfulCount: 3 },
    { userName: 'Bob', rating: 4, comment: 'Very useful', date: new Date(), helpfulCount: 1 }
  ];

  ratingDistribution = [
    { stars: 5, count: 10, percentage: 50 },
    { stars: 4, count: 5, percentage: 25 },
    { stars: 3, count: 3, percentage: 15 },
    { stars: 2, count: 1, percentage: 5 },
    { stars: 1, count: 1, percentage: 5 }
  ];

  relatedProducts: FlashSaleProduct[] = []; // example placeholder

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.product = this.productService.getProductById(this.productId);
    if (!this.product) console.warn(`Product with ID ${this.productId} not found.`);
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warning';
      case 'OUTOFSTOCK': return 'danger';
      default: return 'info';
    }
  }

  addToCart() { console.log('Add to cart', this.selectedQuantity); }
  toggleWishlist() { this.isInWishlist = !this.isInWishlist; }
  shareProduct() { console.log('Share product'); }
  submitReview() {
    console.log('Submitting review', this.newReview);
    this.showReviewDialog = false;
  }
}
