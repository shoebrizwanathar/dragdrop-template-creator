import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AppButtonComponentComponent } from './components/app-button-component/app-button-component.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { CustomCheckboxesComponent } from './components/custom-checkboxes/custom-checkboxes.component';

@NgModule({
  declarations: [AppComponent, AppButtonComponentComponent, SignInFormComponent, CustomCheckboxesComponent],
  imports: [BrowserModule, AppRoutingModule, DragDropModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
