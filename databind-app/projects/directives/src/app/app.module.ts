import { Attribute, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ExpenseEntryComponent } from 'src/app/expense-entry/expense-entry.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloDirective } from './hello.directive';
import { HelloComponent } from './views/hello/hello.component';
import { HighLightDirective } from './views/hello/highlight.directive';
import { AttributeComponent } from './views/attribute/attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloDirective,
    HelloComponent,
    HighLightDirective,
    AttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'hello', component: HelloComponent },
      { path: 'attribute', component: AttributeComponent },
      { path: '', redirectTo: '/hello', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
