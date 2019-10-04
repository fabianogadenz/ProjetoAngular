import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { RouterModule, Routes } from '@angular/router';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';

const appRoutes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'segundo-componente', component: SegundoComponenteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    NgifNgforComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
