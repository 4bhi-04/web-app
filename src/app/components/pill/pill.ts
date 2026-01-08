import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pill',
  imports: [CommonModule, RouterModule],
  templateUrl: './pill.html',
  styleUrl: './pill.css',
})
export class Pill {
  @Input() browse : string="";
  constructor(private router: Router) {}

goToCategory(category: string) {
  this.router.navigate(['/category', category]);
}
}
