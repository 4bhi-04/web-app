import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
product: any;
  
  constructor(
    private route: ActivatedRoute
    ){}

  ngOnInit() {
    this.route.queryParams.subscribe(()=>{
    if(history.state && history.state.product)
    {
        this.product=history.state.product;
    }
  }
    );
    }
}
