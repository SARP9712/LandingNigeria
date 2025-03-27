import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-skills',
  // standalone: true, // Indica que el componente es standalone
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  titleSection: string = "Tailored luxury, redefined";
  containFather:string = "Our resort is designed to cater to your every <br> desire, with bespoke experiences that indulge the senses and elevate relaxation.";
  discover:string="Discover paradise in every <br> moment. Discover paradise <br> in every momentDisecover <br> paradise in every moment"
  BtnExplorer:string="EXPLORE APARTMENTS"
}
