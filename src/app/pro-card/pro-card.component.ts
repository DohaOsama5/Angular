import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro-card',
  standalone: true,
  imports: [],
  templateUrl: './pro-card.component.html',
  styleUrl: './pro-card.component.css'
})
export class ProCardComponent {
  
  @Input()pro :any=[];
constructor (private router:Router){}
showDetails(id:string)
{
  this.router.navigate(['pro-list',id])
}
}
