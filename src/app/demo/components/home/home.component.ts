import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
interface Product {
  id?: string;
  name?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  inventoryStatus?: string;
}

interface FlashSaleProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  sku: string;

  // Pricing
  originalPrice: number;
  flashSalePrice: number;
  discountPercentage: number;
  currency: string;

  // Flash Sale Specific
  flashSale: {
    id: string;
    startTime: string;
    endTime: string;
    isActive: boolean;
    totalQuantity: number;
    soldQuantity: number;
    remainingQuantity: number;
    maxPerCustomer: number;
  };

  // Product Images
  images: {
    primary: string;
    gallery: string[];
    thumbnail: string;
  };

  // Product Details
  specifications: {
    [key: string]: string | number | boolean;
  };

  // Inventory & Shipping
  inStock: boolean;
  stockQuantity: number;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: string;
  };

  // SEO & Meta
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  tags: string[];

  // Tracking
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule, BadgeModule, CardModule, RouterModule],
})
export class HomeComponent {
  // Carousel banner products
  products: Product[] = [
    {
      id: '1000',
      name: 'Hero Banner 1',
      image: 'assets/carousel/1.avif',
    },
    {
      id: '1001',
      name: 'Hero Banner 2',
      image: 'assets/carousel/2.avif',
    },
    {
      id: '1002',
      name: 'Hero Banner 3',
      image: 'assets/carousel/3.avif',
    },
    {
      id: '1003',
      name: 'Hero Banner 4',
      image: 'assets/carousel/4.avif',
    }
  ];

  // Categories
  categories: any[] = [
    { name: 'Accessories', icon: 'pi pi-fw pi-tag' },
    { name: 'Clothing', icon: 'pi pi-fw pi-book' },
    { name: 'Electronics', icon: 'pi pi-fw pi-desktop' },
    { name: 'Fitness', icon: 'pi pi-fw pi-heart' },
    { name: 'Food', icon: 'pi pi-fw pi-shopping-cart' },
    { name: 'Home', icon: 'pi pi-fw pi-home' },
    { name: 'Music', icon: 'pi pi-fw pi-music' },
    { name: 'Sports', icon: 'pi pi-fw pi-star' },
  ];

  // Flash Sale Products - Multiple products for grid display
  flashSaleProducts: Product[] = [
    {
      id: 'fs_prod_001',
      name: 'Samsung Galaxy Watch 6',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      price: 279.99,
      originalPrice: 399.99,
      discount: 30,
      inventoryStatus: 'INSTOCK'
    },
    {
      id: 'fs_prod_002',
      name: 'Apple AirPods Pro',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
      price: 179.99,
      originalPrice: 249.99,
      discount: 28,
      inventoryStatus: 'INSTOCK'
    },
    {
      id: 'fs_prod_003',
      name: 'Sony WH-1000XM4',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
      price: 248.99,
      originalPrice: 349.99,
      discount: 29,
      inventoryStatus: 'LOWSTOCK'
    },
    {
      id: 'fs_prod_004',
      name: 'iPhone 15 Pro',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      price: 899.99,
      originalPrice: 1199.99,
      discount: 25,
      inventoryStatus: 'INSTOCK'
    },
    {
      id: 'fs_prod_005',
      name: 'MacBook Air M2',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      price: 999.99,
      originalPrice: 1299.99,
      discount: 23,
      inventoryStatus: 'INSTOCK'
    },
    {
      id: 'fs_prod_006',
      name: 'iPad Pro 12.9"',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      price: 799.99,
      originalPrice: 1099.99,
      discount: 27,
      inventoryStatus: 'INSTOCK'
    }
  ];

  // Detailed flash sale product (your original one)
  flashSaleProductExample: FlashSaleProduct = {
    "id": "fs_prod_001",
    "name": "Samsung Galaxy Watch 6 Classic 47mm",
    "description": "Premium smartwatch with advanced health monitoring, GPS, and sleek design. Perfect for fitness enthusiasts and professionals alike.",
    "category": "Electronics",
    "brand": "Samsung",
    "sku": "SGW6C-47-BLK",

    "originalPrice": 399.99,
    "flashSalePrice": 279.99,
    "discountPercentage": 30,
    "currency": "USD",

    "flashSale": {
      "id": "flash_001",
      "startTime": "2025-09-28T12:00:00Z",
      "endTime": "2025-09-28T23:59:59Z",
      "isActive": true,
      "totalQuantity": 100,
      "soldQuantity": 67,
      "remainingQuantity": 33,
      "maxPerCustomer": 2
    },

    "images": {
      "primary": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
      "gallery": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=600&fit=crop"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop"
    },

    "specifications": {
      "Display Size": "1.5 inches",
      "Battery Life": "40 hours",
      "Water Resistance": "5ATM + IP68",
      "Connectivity": "Bluetooth 5.3, WiFi, GPS",
      "Sensors": "Heart Rate, SpO2, Sleep, Stress",
      "Compatible OS": "Android 8.0+",
      "Material": "Stainless Steel",
      "Color": "Black"
    },

    "inStock": true,
    "stockQuantity": 33,
    "weight": 0.059,
    "dimensions": {
      "length": 4.6,
      "width": 4.6,
      "height": 1.09,
      "unit": "cm"
    },

    "slug": "samsung-galaxy-watch-6-classic-47mm-black",
    "metaTitle": "Samsung Galaxy Watch 6 Classic 47mm - Flash Sale 30% Off",
    "metaDescription": "Get the Samsung Galaxy Watch 6 Classic at 30% off during our flash sale. Premium smartwatch with health monitoring and GPS.",
    "tags": ["smartwatch", "samsung", "fitness", "health", "gps", "flash-sale"],

    "createdAt": "2025-09-27T10:00:00Z",
    "updatedAt": "2025-09-28T14:30:00Z",
    "isActive": true
  };

  responsiveOptions: any[] = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return 'info';
  }

  onCategorySelect(category: any) {
    console.log('Selected category:', category);
    // Implement category selection logic
  }

  onProductSelect(product: Product) {
    console.log('Selected product:', product);
    // Implement product selection logic
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
    // Implement add to cart logic
  }

  addToWishlist(product: Product) {
    console.log('Added to wishlist:', product);
    // Implement wishlist logic
  }

  // Timer logic for flash sale countdown
  getTimeRemaining(): { hours: number, minutes: number, seconds: number } {
    const now = new Date().getTime();
    const endTime = new Date(this.flashSaleProductExample.flashSale.endTime).getTime();
    const distance = endTime - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  getStockPercentage(): number {
    const { soldQuantity, totalQuantity } = this.flashSaleProductExample.flashSale;
    return (soldQuantity / totalQuantity) * 100;
  }
}