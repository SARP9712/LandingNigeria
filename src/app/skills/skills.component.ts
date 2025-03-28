import { Component, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importar ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Registrar ScrollTrigger

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  titleSection1: string = "Tailored luxury, redefined";
  containFather: string = "Our resort is designed to cater to your every <br> desire, with bespoke experiences that indulge the senses and elevate relaxation.";
  discover: string = "Discover paradise in every <br> moment. Discover paradise <br> in every momentDisecover <br> paradise in every moment";
  BtnExplorer: string = "EXPLORE APARTMENTS";

  @ViewChildren('titleSection') titleSections!: QueryList<ElementRef>;
  @ViewChildren('imageResort') imageResorts!: QueryList<ElementRef>;
  @ViewChildren('btnExplorer') btnExplorers!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.animateWithScroll();
  }

  animateWithScroll(): void {
    const tl = gsap.timeline();

    // Animar el título cuando esté en el viewport
    this.titleSections.toArray().forEach((element, index) => {
      gsap.from(element.nativeElement, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element.nativeElement, // Elemento que dispara la animación
          start: 'top 80%', // La animación se activa cuando el top del elemento llega al 80% de la ventana
          end: 'top 20%', // La animación finaliza cuando el top del elemento llega al 20% de la ventana
          scrub: true, // Hace que la animación se sincronice con el scroll
        }
      });
    });

    // Animar la imagen del resort cuando esté en el viewport
    this.imageResorts.toArray().forEach((element, index) => {
      gsap.from(element.nativeElement, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element.nativeElement, // Elemento que dispara la animación
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        }
      });
    });

    // Animar los botones cuando estén en el viewport
    this.btnExplorers.toArray().forEach((element, index) => {
      gsap.from(element.nativeElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element.nativeElement, // Elemento que dispara la animación
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        }
      });
    });
  }
}
