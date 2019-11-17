import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';

import { AuthHttpInterceptor } from '../interceptors/auth.interceptor';
import { ErrorInterceptor } from '../interceptors/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { CategoriesModule } from '../components/pages/categories/categories.module';
import { TitleModule } from '../components/pieces/title/title.module';
import { HeaderModule } from '../components/pieces/header/header.module';

import { AppLayoutComponent } from '../components/layouts/app/app-layout.component';
import { NoneLayoutComponent } from '../components/layouts/none/none-layout.component';
import { TemplateComponent } from '../components/template/template.component';

import { AppComponent } from './app.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { UsersComponent } from '../components/pages/users/users.component';
// import { HeaderComponent } from '../components/pieces/header/header.component';
import { SidebarComponent } from '../components/pieces/sidebar/sidebar.component';
import { FooterComponent } from '../components/pieces/footer/footer.component';

/* import {
  CategoriesComponent,
  AddCategoriesModalComponent,
  EditCategoriesModalComponent,
  DeleteCategoriesModalComponent,
} from '../components/pages/categories/categories.component'; */
// import { TitleComponent } from '../components/pieces/title/title.component';
import { TechnologiesComponent } from '../components/pages/technologies/technologies.component';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';

import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    AppLayoutComponent,
    NoneLayoutComponent,
    UsersComponent,
    // HeaderComponent,
    SidebarComponent,
    FooterComponent,

    /* CategoriesComponent,
    AddCategoriesModalComponent,
    EditCategoriesModalComponent,
    DeleteCategoriesModalComponent, */

    // TitleComponent,
    TechnologiesComponent,
    DashboardComponent,
  ],
  entryComponents: [
    /* AddCategoriesModalComponent,
    EditCategoriesModalComponent,
    DeleteCategoriesModalComponent, */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MomentModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    TitleModule,
    HeaderModule,
    CategoriesModule,
    AppRoutingModule,
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
