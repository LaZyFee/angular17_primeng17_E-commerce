import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    cities = [
        { name: 'Dhaka', code: 'DHK' },
        { name: 'Chittagong', code: 'CHI' },
        { name: 'Sylhet', code: 'SYL' },
        { name: 'Khulana', code: 'KHL' },
        { name: 'Rajshahi', code: 'RJS' },
        { name: 'Rangpur', code: 'RGP' },
        { name: 'Mymensingh', code: 'MYS' }
    ];
    selectedCity: City | null = null;

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;

    favoritesCount: number = 0;
    cartCount: number = 0;
    isLoggedIn: boolean = false;
    currentLanguage: 'en' | 'bn' = 'en';

    userMenuItems: MenuItem[] = [
        { label: 'Profile', icon: 'pi pi-user', command: () => this.goToProfile() },
        { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.onLogout() }
    ];

    constructor(public layoutService: LayoutService) { }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'bn' : 'en';
        // Implement additional language switch logic if needed
    }
    onLogin() {
        // Implement login logic
    }

    onLogout() {
        // Implement logout logic
    }

    goToProfile() {
        // Implement profile navigation
    }
}
