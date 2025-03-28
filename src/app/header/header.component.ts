import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('headerElement') header!: ElementRef; // Corrige 'viewChild' a 'ViewChild'

  ngAfterViewInit(): void {  // Implementa ngAfterViewInit
    // Animación con GSAP
    gsap.from(this.header.nativeElement, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out'
    });
  }
}
