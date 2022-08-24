import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppForDirective } from './app-for.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './views/hello/hello.component';
import { HighLightDirective } from './views/hello/highlight.directive';
import { AttributeComponent } from './views/attribute/attribute.component';
import { StructuralComponent } from './views/structural/structural.component';
import { NgIfDemoComponent } from './views/ng-if-demo/ng-if-demo.component';
import { AppCardComponent } from './views/app-card/app-card.component';
import { NgSwitchDemoComponent } from './views/ng-switch-demo/ng-switch-demo.component';
import { NgForOfDemoComponent } from './views/ng-for-of-demo/ng-for-of-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AttributeComponent,
    StructuralComponent,
    AppForDirective,
    NgIfDemoComponent,
    HighLightDirective,
    AppCardComponent,
    NgSwitchDemoComponent,
    NgForOfDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'hello', component: HelloComponent },
      { path: 'attribute', component: AttributeComponent },
      { path: 'structural', component: StructuralComponent },
      { path: 'ng-if-demo', component: NgIfDemoComponent },
      { path: 'ng-switch-demo', component: NgSwitchDemoComponent },
      { path: 'ng-for-of-demo', component: NgForOfDemoComponent },
      { path: '', redirectTo: '/hello', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
