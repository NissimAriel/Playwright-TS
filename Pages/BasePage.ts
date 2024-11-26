import { Checkout } from './ChkOutPage';
import { Products } from './ProductsPage';
import { Item } from './ItemPage';
import { Login } from './LoginPage';
import { OverView } from './OverViewPage';
import { Sum } from './SumPage';
import { Page } from '@playwright/test'

 export class BasePage  {

    
    checkout: Checkout;
    products: Products;
    item: Item;
    login: Login;
    overview: OverView;
    sum: Sum;
    
    constructor(protected page: Page){
        this.page = page;
        this.checkout = new Checkout(this.page);
        this.products = new Products(this.page);
        this.item = new Item(this.page);
        this.login = new Login(this.page);
        this.overview = new OverView(this.page);
        this.sum = new Sum(this.page);

    }

    getCheckOut(){
        return this.checkout;
    }

    getProducts(){
        return this.products;
    }

    getItem(){
        return this.item;
    }

    getLogin(){
        return this.login;
    }

    getOverView(){
        return this.overview;
    }

    getSum(){
        return this.sum;
    }

}

module.exports = {BasePage};

