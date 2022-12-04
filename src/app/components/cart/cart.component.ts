import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import {CartModel} from "../../models/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartComponent {
  readonly cart$: Observable<CartModel> = this._activatedRoute.params.pipe(switchMap(data => this._cartService.getOne(data['id'])));
  readonly amount$ = this.cart$.pipe(map(function (item){
    return item.products.length;
  }))
  constructor(private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
  }
}
