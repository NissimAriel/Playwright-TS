
import {Checkout} from '../Pages/ChkOutPage';
import { Inven } from '../Pages/InvenPage';
import { Item } from '../Pages/ItemPage';
import { Login } from '../Pages/LoginPage';
import { OverView } from '../Pages/OverViewPage';
import { Sum } from '../Pages/SumPage';
import { Page } from '@playwright/test'

 export class POMmanager  {

    page: Page;
    checkout: Checkout;
    inven: Inven;
    item: Item;
    login: Login;
    overview: OverView;
    sum: Sum;
    
    constructor(page: Page){
        this.page = page;
        this.checkout = new Checkout(this.page);
        this.inven = new Inven(this.page);
        this.item = new Item(this.page);
        this.login = new Login(this.page);
        this.overview = new OverView(this.page);
        this.sum = new Sum(this.page);

    }

    getCheckOut(){
        return this.checkout;
    }

    getInvenv(){
        return this.inven;
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

module.exports = {POMmanager};

