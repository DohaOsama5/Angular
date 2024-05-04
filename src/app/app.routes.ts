import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProCardComponent } from './pro-card/pro-card.component';
import { MainComponent } from './main/main.component';
import { ProCartComponent } from './pro-cart/pro-cart.component';

export const routes: Routes = [

    {
        path:"",
        component: MainComponent
        
    }
    ,
    {
        path: "login",
        component: LoginComponent,
        title:"Login Page"
    },
    {
        path: "register",
        component: RegisterComponent,
        title:"Register page"
        
    },
    {
        path: "card",
        component: ProCardComponent,
        title:"Card"
    }
    ,
    {
        path: "**",
        component:NotFoundComponent
    }
     ,
    {
        path: "cart",
        component:ProCartComponent
    }
];
