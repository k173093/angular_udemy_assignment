import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';


const routes: Routes = [
  {path:"personal",component:PersonalDetailsComponent},
  {path:"contact",component:ContactDetailsComponent},
  {path:"skills",component:SkillsComponent},
  {path:"wexp",component:WorkExperienceComponent},
  {path:"wfinish",component:WizardFinishedComponent},
  {path:"",redirectTo:"personal", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
