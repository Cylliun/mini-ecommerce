import { Routes } from '@angular/router';
import { CartComponent } from './core/features/cart/cart.component';
import { CheckoutComponent } from './core/features/checkout/checkout.component';
import { ProductsComponent } from './core/features/products/products.component';

export const routes: Routes = [
    {path: 'produtos', component: ProductsComponent},
    {path: 'carrinho', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: '', redirectTo: 'produtos', pathMatch: 'full'}
];

