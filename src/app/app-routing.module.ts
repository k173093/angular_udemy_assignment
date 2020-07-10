import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';


const routes: Routes = [
  {path:"dashboard",component:PersonalDetailsComponent},
  {path:"about",component:ContactDetailsComponent},
  {path:"",redirectTo:"dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
