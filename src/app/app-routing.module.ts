import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'members', component: MemberListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)] ,
})
export class AppRoutingModule { }
