import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './common/shared/shared.module';
import { BlogModule } from './components/blog/blog.module';

/**
 * routes
 */

import { routes } from "./routes/routes.module";

/**
 * components
 */

import { HomeComponent } from './components/home/home.component';
import { EdComponent } from './components/education/ed.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegComponent } from './components/reg/reg.component';
import { ErrorComponent } from './components/errors/error.component';
import portImgContainerComponent from './components/portfolio/portfolio-images/portfolio.image.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';



export function declarations(): any {
    return [
        AppComponent,
        /* our app's components imported in the root module*/
        ContactComponent,
        EdComponent,
        HomeComponent,
        LoginComponent,
        ProfileComponent,
        PortfolioComponent,
        portImgContainerComponent,
        RegComponent,
        ErrorComponent
    ]
}

@NgModule({
    declarations: [
        AppComponent,
        declarations()
    ],
    imports: [

        BlogModule,

        BrowserAnimationsModule,
        
        BrowserModule,

        HttpClientModule,

        RouterModule.forRoot(routes),

        SharedModule,

        StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

