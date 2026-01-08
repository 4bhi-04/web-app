import { Component } from '@angular/core';
import { Categ } from "../../components/categ/categ";
import { Pill } from "../../components/pill/pill";
import { Testimonial } from "../../components/testimonial/testimonial";
import { Intro } from "../../components/intro/intro";
import { Aboutus } from "../../components/aboutus/aboutus";

@Component({
  selector: 'app-home',
  imports: [Categ, Pill, Testimonial, Intro, Aboutus],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
