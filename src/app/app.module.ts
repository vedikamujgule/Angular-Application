import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { setBg } from './customer Directives/setBg.directive';
import { SetColorDirective } from './set-color.directive';
import { RedndererDirectiveDirective } from './rednderer-directive.directive';
import { MouseHoverDirective } from './mouse-hover.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavigationComponent,
    DemoComponent,
    CustomerListComponent,
    setBg,
    SetColorDirective,
    RedndererDirectiveDirective,
    MouseHoverDirective,
    BetterHighlightDirective,
    ErrorPageComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
