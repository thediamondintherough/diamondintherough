import { Routes, CanActivate } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { EdComponent } from '../components/education/ed.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { BlogPreviewComponent } from '../components/blog/blog-preview/blog-preview.component'
import { BlogPostComponent } from '../components/blog/blogpost/blogpost.component';
import { LoginComponent }from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { WriteComponent } from '../components/blog/write/write.component';
import { ContactComponent } from '../components/contact/contact.component';
import { RegComponent } from '../components/reg/reg.component';
import { ErrorComponent } from '../components/errors/error.component';
import portImgContainerComponent from '../components/portfolio/portfolio-images/portfolio.image.component';
import { EditorComponent } from '../components/blog/write/editor/editor.component';
import { SocialBannerComponent } from '../common/banners/social/social.component';

import { AuthGuard, alreadyLoggedIn } from "../common/authguard/authguard.guard";


export const routes: Routes = [
    {path:'', pathMatch:'full', component:HomeComponent},
    {path:'education', component:EdComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'blog-preview', component:BlogPreviewComponent},
    {path:'login', component: LoginComponent, canActivate: [alreadyLoggedIn]},
    {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path:'write', component: WriteComponent, canActivate: [AuthGuard]},
    {path:'contact', component: ContactComponent},
    {path:'reg', component: RegComponent},
    {path:'blog-post', component: BlogPostComponent},
    { path: '**',  component: ErrorComponent }
   ]