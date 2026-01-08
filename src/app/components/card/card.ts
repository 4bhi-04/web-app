import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
cards: any[]=[];
  
  constructor(
    private api_service: ApiService, 
    private cdr: ChangeDetectorRef,
    private router: Router
    ){}

  ngOnInit() {
    this.api_service.getProducts().subscribe((data:any) =>{
    console.log(data);
    this.cards=data.products;
    this.cdr.detectChanges();
    })
    }

    viewProductDetails(product : any)
    {
        this.router.navigate(['/items',product.id],{state :{product}});
    }
}

