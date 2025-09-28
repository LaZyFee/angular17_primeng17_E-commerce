import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

interface Product {
  id?: string;
  name?: string;
  image?: string;
  price?: number;
  inventoryStatus?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
})
export class HomeComponent {
  products: Product[] = [
    {
      id: '1000',
      image: 'assets/carousel/1.avif',
    },
    {
      id: '1001',
      image: 'assets/carousel/2.avif',
    },
    {
      id: '1002',
      image: 'assets/carousel/3.avif',
    },
    {
      id: '1003',
      image: 'assets/carousel/4.avif',
    },
    {
      id: '1004',
      image: 'assets/carousel/5.avif',
    },
    {
      id: '1005',
      image: 'assets/carousel/6.avif',
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
      numVisible: 2,
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
}
