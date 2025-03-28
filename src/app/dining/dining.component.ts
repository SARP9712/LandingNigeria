import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin'; // Import CSSPlugin

// Register plugins
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent implements AfterViewInit {
  experience = "A Fine Dining Experience";
  best = "Indulge in our exclusive dining experiences, carefully curated for you.";
  
  @ViewChildren('subtitle') subtitles!: QueryList<ElementRef>;
  @ViewChildren('textDinner') textDinners!: QueryList<ElementRef>;
  @ViewChildren('image') images!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    // Ensure elements are available before animating
    if (this.subtitles && this.textDinners && this.images) {
      // Convert QueryList to native array elements
      const subtitleElements = this.subtitles.map(el => el.nativeElement);
      const textDinnerElements = this.textDinners.map(el => el.nativeElement);
      const imageElements = this.images.map(el => el.nativeElement);

      // Subtitle animation
      gsap.from(subtitleElements, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.section-dining',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        }
      });

      // Text animation
      gsap.from(textDinnerElements, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.section-dining',
          start: 'top 75%',
          end: 'top 30%',
          scrub: true,
        }
      });

      // Image animation
      gsap.from(imageElements, {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.section-dining',
          start: 'top 70%',
          end: 'top 30%',
          scrub: true,
        }
      });
    } else {
      console.error("No elements found for animation");
    }
  }
}