import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Items } from './pages/items/items';
import { Category } from './pages/category/category';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'contact',
        component:Contact
    },
    {
        path:'shop',
        component:Products
    },
     {
        path:'items/:id',
        component:Items
    },
    {
        path:'category/:name',
        component:Category
    }
];

