import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { Pill } from "../../components/pill/pill";

@Component({
  selector: 'app-products',
  imports: [Card, Pill],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

}
