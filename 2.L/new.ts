import { ShoppingBasket } from './Model/ShoppingBasket';
import { Product } from './Model/Product';
import { FixedDiscount } from './Model/FixedDiscount';
import { VariableDiscount } from './Model/VariableDiscount';
import { NoDiscount } from './Model/NoDiscount';

//This is called a Union, the discountType can only contain the following 2 values:
type discountType = 'variable' | 'fixed' | 'none';

let cart = new ShoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount(10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));

const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
  let tr = document.createElement('tr');

  let td = document.createElement('td');
  td.innerText = product.name;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = product.originalPrice.toFixed(2) + ' €';
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = product.calculatePrice().toFixed(2) + ' €';
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = product.showCalculation();
  tr.appendChild(td);

  tableElement.appendChild(tr);
});
