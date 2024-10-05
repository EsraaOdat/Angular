import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { SubscribrionComponent } from './sub-services/sub-services.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    CategoriesComponent,
    ProductsComponent,
    SubscribrionComponent
  ],
  imports: [
    FormsModule,

    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "Home", component: HomeComponent },
      { path: "Category", component: CategoriesComponent },
      { path: "Product", component: ProductsComponent },
      { path: "AboutUs", component: AboutUsComponent },
      { path: "ContactUs", component: ContactUsComponent },
      { path: "Subscribrion", component: SubscribrionComponent },
      { path: "SubServices/:id", component: SubscribrionComponent },
      { path: "Services", component: ServicesComponent }

    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
