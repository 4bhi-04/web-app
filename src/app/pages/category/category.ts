import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pill } from "../../components/pill/pill";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, Pill],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {

  cards: any[] = [];
  categoryName!: string;

  constructor(
    private api_service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('name')!;

      this.api_service
        .getProductsByCategory(this.categoryName)
        .subscribe((data: any) => {
          this.cards = data.products;
          this.cdr.detectChanges();
        });
    });
  }

  viewProductDetails(product: any) {
    this.router.navigate(['/items', product.id], {
      state: { product }
    });
  }
}
