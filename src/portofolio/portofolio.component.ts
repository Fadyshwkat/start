import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css'
})
export class PortofolioComponent {
  imgsSrc:string[] = ['./assets/poert1.png','./assets/poert2.png','./assets/poert3.png','./assets/poert1.png'
    ,'./assets/poert2.png','./assets/poert3.png'];
   
   
    isOverlayOpen: boolean = false; 
    layerImgSrc: string = ''; 
  
    openOverlay(imgSrc: string): void {
      this.layerImgSrc = imgSrc; 
      this.isOverlayOpen = true; 
    }
  
    closeOverlay(): void {
      this.isOverlayOpen = false;
    }
}
