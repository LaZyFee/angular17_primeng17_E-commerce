import { Injectable } from '@angular/core';
// Define FlashSaleProduct interface here if not available elsewhere
export interface FlashSaleProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  inventoryStatus: string;
  category?: string;
  rating?: number;
  availableSizes?: string[];
  reviewCount?: number;
  description?: string;
  availableColors?: string[];
  specifications?: { key: string; value: string }[];
  stock?: number;
  ratingDistribution?: { stars: number; count: number; percentage: number }[];
  reviews?: { userName: string; rating: number; date: Date; comment: string; helpfulCount: number }[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  flashSaleProducts: FlashSaleProduct[] = [

    {
      id: 'fs_prod_001',
      name: 'Samsung Galaxy Watch 6',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      price: 279.99,
      originalPrice: 399.99,
      discount: 30,
      inventoryStatus: 'INSTOCK',
      category: 'Wearables',
      rating: 4.5,
      reviewCount: 100,
      description:
        'The Samsung Galaxy Watch 6 offers advanced health monitoring, a sleek design, and seamless connectivity with your smartphone.',
      availableColors: ["red", "blue", "#FFD700", "black"],
      availableSizes: ['40mm', '44mm'],
      specifications: [
        { key: 'Display', value: '1.4-inch Super AMOLED, 450 x 450 resolution, Always-On Display' },
        { key: 'Processor', value: 'Samsung Exynos W930 Dual-core 1.4 GHz' },
        { key: 'RAM', value: '2GB' },
        { key: 'Storage', value: '16GB internal storage' },
        { key: 'Battery Life', value: 'Up to 40 hours, Wireless Fast Charging' },
        { key: 'Operating System', value: 'Wear OS powered by Samsung (One UI Watch 5)' },
        { key: 'Connectivity', value: 'Bluetooth 5.3, Wi-Fi, NFC, Optional LTE' },
        { key: 'Sensors', value: 'Optical Heart Rate, BioActive Sensor, Accelerometer, Gyroscope, Barometer, Temperature Sensor' },
        { key: 'Health Features', value: 'ECG, Blood Pressure Monitoring, Sleep Tracking, SpO2, Body Composition Analysis' },
        { key: 'Water Resistance', value: '5 ATM + IP68 + MIL-STD-810H' },
        { key: 'Compatibility', value: 'Android 10.0 or later, not compatible with iOS' },
        { key: 'Case Size', value: '40mm / 44mm options' },
        { key: 'Weight', value: '33.3g (40mm), 28.7g (44mm) without strap' },
        { key: 'Strap', value: 'Interchangeable Quick-Release Straps' }
      ],
      stock: 50,
      ratingDistribution: [
        { stars: 5, count: 70, percentage: 70 },
        { stars: 4, count: 20, percentage: 20 },
        { stars: 3, count: 5, percentage: 5 },
        { stars: 2, count: 3, percentage: 3 },
        { stars: 1, count: 2, percentage: 2 },
      ],

      reviews: [
        {
          userName: 'Alice Johnson',
          rating: 5,
          date: new Date('2025-09-01'),
          comment: 'Absolutely love this watch! The battery lasts long and the display is gorgeous.',
          helpfulCount: 12,
        },
        {
          userName: 'Michael Smith',
          rating: 4,
          date: new Date('2025-08-21'),
          comment: 'Great performance, but I wish it had more color options.',
          helpfulCount: 7,
        },
        {
          userName: 'Sophia Williams',
          rating: 3,
          date: new Date('2025-08-15'),
          comment: 'Good overall, but the strap quality could be better.',
          helpfulCount: 3,
        },
      ],
    },
    {
      id: 'fs_prod_002',
      name: 'Apple AirPods Pro',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
      price: 179.99,
      originalPrice: 249.99,
      discount: 28,
      inventoryStatus: 'INSTOCK',
      category: 'Audio',
      rating: 4.7,
      availableSizes: ['Standard'],
      reviewCount: 2847,
      description: 'Active Noise Cancellation with Adaptive Audio. Personalized Spatial Audio with dynamic head tracking. Up to 6 hours of listening time with ANC enabled.',
      availableColors: ['White'],
      specifications: [
        { key: 'Connectivity', value: 'Bluetooth 5.3' },
        { key: 'Battery Life', value: 'Up to 6 hours (30 hours with case)' },
        { key: 'Water Resistance', value: 'IPX4' },
        { key: 'Chip', value: 'Apple H2' }
      ],
      stock: 150,
      ratingDistribution: [
        { stars: 5, count: 1823, percentage: 64 },
        { stars: 4, count: 712, percentage: 25 },
        { stars: 3, count: 199, percentage: 7 },
        { stars: 2, count: 71, percentage: 2 },
        { stars: 1, count: 42, percentage: 2 }
      ],
      reviews: [
        {
          userName: 'Sarah M.',
          rating: 5,
          date: new Date('2025-09-15'),
          comment: 'Best earbuds I\'ve ever owned. The noise cancellation is phenomenal and the sound quality is crystal clear.',
          helpfulCount: 156
        },
        {
          userName: 'James K.',
          rating: 4,
          date: new Date('2025-09-10'),
          comment: 'Great sound and ANC, but I wish the battery lasted a bit longer on a single charge.',
          helpfulCount: 89
        },
        {
          userName: 'Emily R.',
          rating: 5,
          date: new Date('2025-09-05'),
          comment: 'The adaptive audio feature is a game changer. Seamlessly switches between noise cancellation modes.',
          helpfulCount: 203
        }
      ]
    },
    {
      id: 'fs_prod_003',
      name: 'Sony WH-1000XM4',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
      price: 248.99,
      originalPrice: 349.99,
      discount: 29,
      inventoryStatus: 'LOWSTOCK',
      category: 'Audio',
      rating: 4.8,
      availableSizes: ['Standard'],
      reviewCount: 4521,
      description: 'Industry-leading noise cancellation with Dual Noise Sensor technology. Up to 30-hour battery life. Touch sensor controls. Speak-to-chat technology.',
      availableColors: ['Black', 'Silver', 'Blue'],
      specifications: [
        { key: 'Connectivity', value: 'Bluetooth 5.0, NFC' },
        { key: 'Battery Life', value: 'Up to 30 hours' },
        { key: 'Driver Unit', value: '40mm dome type' },
        { key: 'Weight', value: '254g' }
      ],
      stock: 23,
      ratingDistribution: [
        { stars: 5, count: 3155, percentage: 70 },
        { stars: 4, count: 1085, percentage: 24 },
        { stars: 3, count: 181, percentage: 4 },
        { stars: 2, count: 54, percentage: 1 },
        { stars: 1, count: 46, percentage: 1 }
      ],
      reviews: [
        {
          userName: 'Michael T.',
          rating: 5,
          date: new Date('2025-09-20'),
          comment: 'The noise cancellation is absolutely incredible. Perfect for flights and commuting. Battery life is amazing too.',
          helpfulCount: 342
        },
        {
          userName: 'Lisa P.',
          rating: 5,
          date: new Date('2025-09-18'),
          comment: 'Best headphones for the price. Comfortable for long listening sessions and the sound quality is superb.',
          helpfulCount: 287
        },
        {
          userName: 'David H.',
          rating: 4,
          date: new Date('2025-09-12'),
          comment: 'Great headphones overall. Only minor complaint is they can feel a bit warm after extended use.',
          helpfulCount: 124
        }
      ]
    },
    {
      id: 'fs_prod_004',
      name: 'iPhone 15 Pro',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      price: 899.99,
      originalPrice: 1199.99,
      discount: 25,
      inventoryStatus: 'INSTOCK',
      category: 'Smartphones',
      rating: 4.6,
      availableSizes: ['128GB', '256GB', '512GB', '1TB'],
      reviewCount: 5632,
      description: 'Titanium design with A17 Pro chip. ProMotion display with Always-On. Pro camera system with 48MP Main camera. Action button.',
      availableColors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
      specifications: [
        { key: 'Display', value: '6.1" Super Retina XDR' },
        { key: 'Chip', value: 'A17 Pro' },
        { key: 'Camera', value: '48MP Main, 12MP Ultra Wide, 12MP Telephoto' },
        { key: 'Battery', value: 'Up to 23 hours video playback' },
        { key: 'Material', value: 'Titanium' }
      ],
      stock: 287,
      ratingDistribution: [
        { stars: 5, count: 3379, percentage: 60 },
        { stars: 4, count: 1464, percentage: 26 },
        { stars: 3, count: 507, percentage: 9 },
        { stars: 2, count: 169, percentage: 3 },
        { stars: 1, count: 113, percentage: 2 }
      ],
      reviews: [
        {
          userName: 'Alex W.',
          rating: 5,
          date: new Date('2025-09-22'),
          comment: 'The titanium feels premium and the camera system is outstanding. A17 Pro handles everything I throw at it.',
          helpfulCount: 445
        },
        {
          userName: 'Rachel B.',
          rating: 4,
          date: new Date('2025-09-19'),
          comment: 'Love the phone, but the price is quite steep. The action button is a nice addition though.',
          helpfulCount: 312
        },
        {
          userName: 'Tom S.',
          rating: 5,
          date: new Date('2025-09-14'),
          comment: 'Best iPhone yet. The ProMotion display is buttery smooth and battery life has been great.',
          helpfulCount: 278
        }
      ]
    },
    {
      id: 'fs_prod_005',
      name: 'MacBook Air M2',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      price: 999.99,
      originalPrice: 1299.99,
      discount: 23,
      inventoryStatus: 'INSTOCK',
      category: 'Laptops',
      rating: 4.9,
      availableSizes: ['13.6"'],
      reviewCount: 3892,
      description: 'M2 chip with 8-core CPU. 13.6" Liquid Retina display. Up to 18 hours battery life. Fanless design. MagSafe charging.',
      availableColors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'],
      specifications: [
        { key: 'Display', value: '13.6" Liquid Retina (2560x1664)' },
        { key: 'Chip', value: 'Apple M2' },
        { key: 'Memory', value: '8GB Unified Memory' },
        { key: 'Storage', value: '256GB SSD' },
        { key: 'Weight', value: '2.7 lbs (1.24 kg)' },
        { key: 'Battery', value: 'Up to 18 hours' }
      ],
      stock: 194,
      ratingDistribution: [
        { stars: 5, count: 3190, percentage: 82 },
        { stars: 4, count: 545, percentage: 14 },
        { stars: 3, count: 117, percentage: 3 },
        { stars: 2, count: 23, percentage: 1 },
        { stars: 1, count: 17, percentage: 0 }
      ],
      reviews: [
        {
          userName: 'Jennifer L.',
          rating: 5,
          date: new Date('2025-09-25'),
          comment: 'Perfect laptop for everyday use. Silent, fast, and the battery lasts forever. Best purchase I\'ve made this year.',
          helpfulCount: 521
        },
        {
          userName: 'Mark D.',
          rating: 5,
          date: new Date('2025-09-21'),
          comment: 'The M2 chip is incredibly powerful for such a thin and light laptop. No fan noise is a huge plus.',
          helpfulCount: 467
        },
        {
          userName: 'Sophie K.',
          rating: 4,
          date: new Date('2025-09-16'),
          comment: 'Great laptop overall. Wish it came with more than 256GB storage at this price point.',
          helpfulCount: 298
        }
      ]
    },
    {
      id: 'fs_prod_006',
      name: 'iPad Pro 12.9"',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      price: 799.99,
      originalPrice: 1099.99,
      discount: 27,
      inventoryStatus: 'INSTOCK',
      category: 'Tablets',
      rating: 4.7,
      availableSizes: ['128GB', '256GB', '512GB', '1TB', '2TB'],
      reviewCount: 2934,
      description: 'M2 chip delivers incredible performance. Liquid Retina XDR display. ProMotion technology. Works with Apple Pencil and Magic Keyboard.',
      availableColors: ['Space Gray', 'Silver'],
      specifications: [
        { key: 'Display', value: '12.9" Liquid Retina XDR' },
        { key: 'Chip', value: 'Apple M2' },
        { key: 'Camera', value: '12MP Wide, 10MP Ultra Wide' },
        { key: 'Front Camera', value: '12MP TrueDepth' },
        { key: 'Battery', value: 'Up to 10 hours' },
        { key: 'Weight', value: '1.5 lbs (682g)' }
      ],
      stock: 142,
      ratingDistribution: [
        { stars: 5, count: 1960, percentage: 67 },
        { stars: 4, count: 763, percentage: 26 },
        { stars: 3, count: 147, percentage: 5 },
        { stars: 2, count: 41, percentage: 1 },
        { stars: 1, count: 23, percentage: 1 }
      ],
      reviews: [
        {
          userName: 'Chris M.',
          rating: 5,
          date: new Date('2025-09-23'),
          comment: 'Replaced my laptop with this. The display is stunning and M2 handles video editing like a breeze.',
          helpfulCount: 389
        },
        {
          userName: 'Amanda Y.',
          rating: 5,
          date: new Date('2025-09-17'),
          comment: 'Perfect for digital art. Apple Pencil responsiveness is fantastic and the screen real estate is generous.',
          helpfulCount: 312
        },
        {
          userName: 'Robert F.',
          rating: 4,
          date: new Date('2025-09-11'),
          comment: 'Excellent tablet but expensive when you add the keyboard and pencil. Performance is top-notch though.',
          helpfulCount: 245
        }
      ]
    }
  ];

  constructor() { }

  getProductById(id: string) {
    return this.flashSaleProducts.find(p => p.id === id);
  }
}
