import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GroupComponent } from './pages/group/group.component';
import { CreateGroupComponent } from './pages/create-group/create-group.component';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { TransferToComponent } from './pages/transfer-to/transfer-to.component';
import { TransferHistoryComponent } from './pages/transfer-history/transfer-history.component';
import { AppSettingComponent } from './pages/app-setting/app-setting.component';
import { AccountSettingComponent } from './pages/account-setting/account-setting.component';
import { ChangeUsernameComponent } from './pages/change-username/change-username.component';
import { ChangeDisplaynameComponent } from './pages/change-displayname/change-displayname.component';
import { EditGroupComponent } from './pages/group/edit-group/edit-group.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: ':userId/home', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'groups', component: GroupComponent},
  {path: ':userId/groups', component: GroupComponent},
  {path: 'create-group', component: CreateGroupComponent},
  {path: ':userId/create-group', component: CreateGroupComponent},
  {path: 'groups/:id/group-detail', component: GroupDetailComponent},
  {path: ':userId/groups/:id/group-detail', component: GroupDetailComponent},
  {path: ':userId/groups/:id/edit-group', component: EditGroupComponent},
  {path: 'transfer-to', component: TransferToComponent},
  {path: ':userId/transfer-to', component: TransferToComponent},
  {path: 'transfer-history', component: TransferHistoryComponent},
  {path: ':userId/transfer-history', component: TransferHistoryComponent},
  {path: 'app-setting', component: AppSettingComponent},
  {path: ':userId/app-setting', component: AppSettingComponent},
  {path: 'account-setting', component: AccountSettingComponent},
  {path: ':userId/account-setting', component: AccountSettingComponent},
  {path: 'account-setting/change-username', component: ChangeUsernameComponent},
  {path: ':userId/account-setting/change-username', component: ChangeUsernameComponent},
  {path: 'account-setting/change-displayname', component: ChangeDisplaynameComponent},
  {path: ':userId/account-setting/change-displayname', component: ChangeDisplaynameComponent}
]

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
