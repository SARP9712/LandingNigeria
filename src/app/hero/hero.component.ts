import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  Title: string = 'IKOGOSI';  // Solo un valor fijo como ejemplo
  subtitle: string = 'WARM SPRINGS'
  firstContain: string = 'Best holiday resort <br> in Nigeria, 2024'; 
  secondContain: string ='Your sanctuary <br> away from <br> home';
  Reservation: string = 'MAKE A RESERVATION';
  explorer:string="Unrivaled experience of <br> comfort and sophostication <br> amidst the scenic beauty of <br> Ikogosi warm springs";
  ExplorerAct:string="EXPLORE ACTIVITES"

}
