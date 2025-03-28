import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  Title: string = 'IKOGOSI';  // Solo un valor fijo como ejemplo
  subtitle: string = 'WARM SPRINGS'
  firstContain: string = 'Best holiday resort <br> in Nigeria, 2024'; 
  secondContain: string ='Your sanctuary <br> away from <br> home';
  Reservation: string = 'MAKE A RESERVATION';
  explorer:string="Unrivaled experience of <br> comfort and sophostication <br> amidst the scenic beauty of <br> Ikogosi warm springs";
  ExplorerAct:string="EXPLORE ACTIVITES"


  @ViewChild('title1') text1!: ElementRef;
  @ViewChild('title2') text2!: ElementRef;

  @ViewChildren('text') texts!: QueryList<ElementRef>;

   ngAfterViewInit():void {
    const tl = gsap.timeline();

    gsap.from(this.text1.nativeElement,{
      opacity:0,
      y:50,
      duration:1,
      ease: 'power2.out'
    });


    gsap.from(this.text2.nativeElement,{
      opacity:0,
      y:50,
      duration:1.8,
      ease: 'power2.out'
    })

    this.texts.toArray().forEach((element, index) => {
      tl.from( element.nativeElement,{
        opacity:0,
        y:50,
        duration:1,
        ease:'power2.out',
        delay:index * 0.2,
      })
      
    });




   }

}
