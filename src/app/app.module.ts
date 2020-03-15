import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/app/search/geo', pathMatch: 'full',
      },
      {
        path: 'app',
        component: HomePageComponent,
        children: [
          {
            path: '',
            children: [
              {
                path: 'search',
                loadChildren: () => import('./geo-dashboard/geo-dashboard.module').then(m => m.GeoDashboardModule), //Lazy load main module
              },
            ]
          }
        ]
      }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
