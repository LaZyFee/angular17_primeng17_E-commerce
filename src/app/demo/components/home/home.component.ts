import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
interface Product {
  id?: string;
  name?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  inventoryStatus?: string;
}

interface Category {
  name: string;
  icon: string;
}

interface FlashSaleProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  sku: string;
  originalPrice: number;
  flashSalePrice: number;
  discountPercentage: number;
  currency: string;
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
  images: {
    primary: string;
    gallery: string[];
    thumbnail: string;
  };
  specifications: {
    [key: string]: string | number | boolean;
  };
  inStock: boolean;
  stockQuantity: number;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: string;
  };
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

interface RecommendedProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  sku: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  currency: string;
  image: string;
  images: string[];
  thumbnail: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  recommendationReason: string;
  recommendationType: 'trending' | 'similar' | 'frequently_bought' | 'viewed_together' | 'personalized' | 'bestseller';
  confidence: number;
  tags: string[];
  isNew?: boolean;
  isFreeShipping?: boolean;
  estimatedDelivery?: string;
}

interface RecommendationSection {
  sectionId: string;
  title: string;
  subtitle?: string;
  type: 'trending' | 'similar' | 'frequently_bought' | 'viewed_together' | 'personalized' | 'bestseller';
  products: RecommendedProduct[];
  showMoreLink?: string;
}

interface UserRecommendations {
  userId: string;
  generatedAt: string;
  sections: RecommendationSection[];
}
@Pipe({
  name: 'filterByRecommendationType',
  standalone: true
})
export class FilterByRecommendationTypePipe implements PipeTransform {
  transform(products: RecommendedProduct[], type: string): RecommendedProduct[] {
    return products.filter(product => product.recommendationType === type);
  }
}
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule, BadgeModule, CardModule, RouterModule, FilterByRecommendationTypePipe],
})
export class HomeComponent {
  constructor(private router: Router) { }
  viewProductDetails(product: any) {
    this.router.navigate(['/products', product.id]);
  }

  products: Product[] = [
    { id: '1000', name: 'Hero Banner 1', image: 'assets/carousel/1.avif' },
    { id: '1001', name: 'Hero Banner 2', image: 'assets/carousel/2.avif' },
    { id: '1002', name: 'Hero Banner 3', image: 'assets/carousel/3.avif' },
    { id: '1003', name: 'Hero Banner 4', image: 'assets/carousel/4.avif' }
  ];

  categories: Category[] = [
    { name: 'Accessories', icon: 'pi pi-fw pi-tag' },
    { name: 'Clothing', icon: 'pi pi-fw pi-book' },
    { name: 'Electronics', icon: 'pi pi-fw pi-desktop' },
    { name: 'Fitness', icon: 'pi pi-fw pi-heart' },
    { name: 'Food', icon: 'pi pi-fw pi-shopping-cart' },
    { name: 'Home', icon: 'pi pi-fw pi-home' },
    { name: 'Music', icon: 'pi pi-fw pi-music' },
    { name: 'Sports', icon: 'pi pi-fw pi-star' },
  ];

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

  flashSaleProductExample: FlashSaleProduct = {
    id: 'fs_prod_001',
    name: 'Samsung Galaxy Watch 6 Classic 47mm',
    description: 'Premium smartwatch with advanced health monitoring, GPS, and sleek design. Perfect for fitness enthusiasts and professionals alike.',
    category: 'Electronics',
    brand: 'Samsung',
    sku: 'SGW6C-47-BLK',
    originalPrice: 399.99,
    flashSalePrice: 279.99,
    discountPercentage: 30,
    currency: 'USD',
    flashSale: {
      id: 'flash_001',
      startTime: '2025-09-28T12:00:00Z',
      endTime: '2025-12-01T23:59:59Z',
      isActive: true,
      totalQuantity: 100,
      soldQuantity: 67,
      remainingQuantity: 33,
      maxPerCustomer: 2
    },
    images: {
      primary: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'
    },
    specifications: {
      'Display Size': '1.5 inches',
      'Battery Life': '40 hours',
      'Water Resistance': '5ATM + IP68',
      Connectivity: 'Bluetooth 5.3, WiFi, GPS',
      Sensors: 'Heart Rate, SpO2, Sleep, Stress',
      'Compatible OS': 'Android 8.0+',
      Material: 'Stainless Steel',
      Color: 'Black'
    },
    inStock: true,
    stockQuantity: 33,
    weight: 0.059,
    dimensions: {
      length: 4.6,
      width: 4.6,
      height: 1.09,
      unit: 'cm'
    },
    slug: 'samsung-galaxy-watch-6-classic-47mm-black',
    metaTitle: 'Samsung Galaxy Watch 6 Classic 47mm - Flash Sale 30% Off',
    metaDescription: 'Get the Samsung Galaxy Watch 6 Classic at 30% off during our flash sale. Premium smartwatch with health monitoring and GPS.',
    tags: ['smartwatch', 'samsung', 'fitness', 'health', 'gps', 'flash-sale'],
    createdAt: '2025-09-27T10:00:00Z',
    updatedAt: '2025-09-28T14:30:00Z',
    isActive: true
  };

  recommendedProducts: RecommendedProduct[] = [
    {
      id: 'rec_001',
      name: 'Apple iPhone 15 Pro Max',
      description: 'The ultimate iPhone with titanium design, A17 Pro chip, and incredible camera system.',
      category: 'Electronics',
      brand: 'Apple',
      sku: 'IPHONE15PM-256-TITAN',
      price: 1199.99,
      originalPrice: 1299.99,
      discountPercentage: 8,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop',
      rating: 4.8,
      reviewCount: 2547,
      inStock: true,
      stockQuantity: 45,
      recommendationReason: 'Most popular item this week',
      recommendationType: 'trending',
      confidence: 95,
      tags: ['smartphone', 'apple', '5g', 'premium'],
      isNew: true,
      isFreeShipping: true,
      estimatedDelivery: '2-3 business days'
    },
    {
      id: 'rec_002',
      name: 'Sony WH-1000XM5 Headphones',
      description: 'Industry-leading noise cancellation with premium sound quality and all-day comfort.',
      category: 'Electronics',
      brand: 'Sony',
      sku: 'WH1000XM5-BLK',
      price: 349.99,
      originalPrice: 399.99,
      discountPercentage: 13,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=200&fit=crop',
      rating: 4.7,
      reviewCount: 1834,
      inStock: true,
      stockQuantity: 23,
      recommendationReason: 'Trending in audio category',
      recommendationType: 'trending',
      confidence: 88,
      tags: ['headphones', 'noise-cancellation', 'wireless', 'premium'],
      isFreeShipping: true,
      estimatedDelivery: '1-2 business days'
    },
    {
      id: 'rec_003',
      name: 'Apple MacBook Air M2',
      description: 'Supercharged by M2 chip. Up to 18 hours of battery life. Liquid Retina display.',
      category: 'Electronics',
      brand: 'Apple',
      sku: 'MBA-M2-256-SLV',
      price: 1099.99,
      originalPrice: 1199.99,
      discountPercentage: 8,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop',
      rating: 4.9,
      reviewCount: 3421,
      inStock: true,
      stockQuantity: 12,
      recommendationReason: 'Perfect match for your tech preferences',
      recommendationType: 'personalized',
      confidence: 92,
      tags: ['laptop', 'apple', 'm2-chip', 'ultrabook'],
      isFreeShipping: true,
      estimatedDelivery: '2-3 business days'
    },
    {
      id: 'rec_004',
      name: 'Fitbit Versa 4',
      description: 'Health and fitness smartwatch with built-in GPS, music storage, and 6+ day battery.',
      category: 'Fitness',
      brand: 'Fitbit',
      sku: 'VERSA4-BLK-L',
      price: 199.99,
      originalPrice: 229.99,
      discountPercentage: 13,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop',
      rating: 4.5,
      reviewCount: 987,
      inStock: true,
      stockQuantity: 34,
      recommendationReason: 'Matches your fitness interests',
      recommendationType: 'personalized',
      confidence: 87,
      tags: ['smartwatch', 'fitness', 'gps', 'health-tracking'],
      isFreeShipping: true,
      estimatedDelivery: '1-2 business days'
    },
    {
      id: 'rec_005',
      name: 'Nintendo Switch OLED',
      description: '7-inch OLED screen, enhanced audio, wide adjustable stand, and dock with wired LAN port.',
      category: 'Gaming',
      brand: 'Nintendo',
      sku: 'NSW-OLED-WHT',
      price: 349.99,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=200&fit=crop',
      rating: 4.8,
      reviewCount: 1654,
      inStock: true,
      stockQuantity: 18,
      recommendationReason: 'Based on your gaming interests',
      recommendationType: 'personalized',
      confidence: 85,
      tags: ['gaming', 'console', 'oled', 'nintendo'],
      isFreeShipping: true,
      estimatedDelivery: '2-3 business days'
    },
    {
      id: 'rec_006',
      name: 'Anker PowerCore 10000 Portable Charger',
      description: 'Ultra-compact 10000mAh power bank with high-speed charging technology.',
      category: 'Electronics',
      brand: 'Anker',
      sku: 'AK-PC10K-BLK',
      price: 29.99,
      originalPrice: 39.99,
      discountPercentage: 25,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=200&fit=crop',
      rating: 4.6,
      reviewCount: 5234,
      inStock: true,
      stockQuantity: 156,
      recommendationReason: '90% of customers also buy this',
      recommendationType: 'frequently_bought',
      confidence: 90,
      tags: ['power-bank', 'portable-charger', 'anker', 'compact'],
      isFreeShipping: false,
      estimatedDelivery: '3-5 business days'
    },
    {
      id: 'rec_007',
      name: 'Apple AirPods Pro (2nd Gen)',
      description: 'Adaptive Transparency, Personalized Spatial Audio, and up to 2x more noise cancellation.',
      category: 'Electronics',
      brand: 'Apple',
      sku: 'AIRPODS-PRO2',
      price: 229.99,
      originalPrice: 249.99,
      discountPercentage: 8,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=200&h=200&fit=crop',
      rating: 4.7,
      reviewCount: 8743,
      inStock: true,
      stockQuantity: 67,
      recommendationReason: 'Perfect companion for Apple devices',
      recommendationType: 'frequently_bought',
      confidence: 88,
      tags: ['earbuds', 'apple', 'noise-cancellation', 'wireless'],
      isFreeShipping: true,
      estimatedDelivery: '1-2 business days'
    },
    {
      id: 'rec_008',
      name: 'Amazon Echo Dot (5th Gen)',
      description: 'Smart speaker with bigger vibrant sound, helpful routines, and Alexa built-in.',
      category: 'Smart Home',
      brand: 'Amazon',
      sku: 'ECHO-DOT5-CHR',
      price: 39.99,
      originalPrice: 49.99,
      discountPercentage: 20,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=200&h=200&fit=crop',
      rating: 4.4,
      reviewCount: 15647,
      inStock: true,
      stockQuantity: 234,
      recommendationReason: '#1 bestseller in Smart Speakers',
      recommendationType: 'bestseller',
      confidence: 96,
      tags: ['smart-speaker', 'alexa', 'voice-assistant', 'compact'],
      isFreeShipping: false,
      estimatedDelivery: '2-3 business days'
    },
    {
      id: 'rec_009',
      name: 'Samsung 65" 4K QLED Smart TV',
      description: 'Quantum Dot technology, 4K AI upscaling, and smart TV features with multiple streaming apps.',
      category: 'Electronics',
      brand: 'Samsung',
      sku: 'QN65Q60C-65',
      price: 899.99,
      originalPrice: 1199.99,
      discountPercentage: 25,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop',
      rating: 4.6,
      reviewCount: 3241,
      inStock: true,
      stockQuantity: 8,
      recommendationReason: 'Top-rated in TVs category',
      recommendationType: 'bestseller',
      confidence: 91,
      tags: ['smart-tv', '4k', 'qled', 'samsung'],
      isFreeShipping: true,
      estimatedDelivery: '5-7 business days'
    }
  ];

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

  getStarRating(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 'pi pi-star-half' : '';
    const emptyStars = 5 - Math.ceil(rating);
    return 'pi pi-star'.repeat(fullStars) + (halfStar ? ` ${halfStar}` : '') + ' pi pi-star-o'.repeat(emptyStars);
  }

  onCategorySelect(category: any) {
    console.log('Selected category:', category);
  }

  onProductSelect(product: Product) {
    console.log('Selected product:', product);
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
  }

  addToWishlist(product: Product) {
    console.log('Added to wishlist:', product);
  }

  timeRemaining: { hours: number; minutes: number; seconds: number } = { hours: 0, minutes: 0, seconds: 0 };
  private intervalId: any;

  getTimeRemaining(): { hours: number; minutes: number; seconds: number } {
    const now = new Date().getTime();
    const endTime = new Date(this.flashSaleProductExample.flashSale.endTime).getTime();
    const distance = endTime - now;

    if (distance <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.timeRemaining = this.getTimeRemaining();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  getStockPercentage(): number {
    const { soldQuantity, totalQuantity } = this.flashSaleProductExample.flashSale;
    return (soldQuantity / totalQuantity) * 100;
  }
  changeMainImage(image: string) {
    this.flashSaleProductExample.images.primary = image;
  }
  getTypeSubtitle(type: string): string {
    switch (type) {
      case 'trending':
        return 'Popular products everyone is buying';
      case 'personalized':
        return 'Based on your browsing and purchase history';
      case 'frequently_bought':
        return 'Customers who bought similar items also purchased';
      case 'bestseller':
        return 'Top-rated products loved by customers';
      default:
        return '';
    }
  }

  getTypeLink(type: string): string {
    switch (type) {
      case 'trending':
        return '/trending-products';
      case 'personalized':
        return '/personalized-recommendations';
      case 'frequently_bought':
        return '/frequently-bought';
      case 'bestseller':
        return '/bestsellers';
      default:
        return '/products';
    }
  }
}