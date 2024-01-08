import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MainContentComponent } from './pages/home/main-content/main-content.component';
import { TopbarComponent } from './pages/home/topbar/topbar.component';
import { ChooseCurrencyComponent } from './pages/home/topbar/choose-currency/choose-currency.component';
import { MenuComponent } from './pages/home/topbar/menu/menu.component';
import { RefreshWalletComponent } from './pages/home/topbar/refresh-wallet/refresh-wallet.component';
import { GroupComponent } from './pages/group/group.component';
import { CustomGroupComponent } from './pages/group/custom-group/custom-group.component';
import { CreateGroupComponent } from './pages/create-group/create-group.component';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { UserContainerComponent } from './pages/create-group/user-container/user-container.component';
import { TransferComponent } from './pages/group-detail/transfer/transfer.component';
import { MemberComponent } from './pages/group-detail/member/member.component';
import { TransferToComponent } from './pages/transfer-to/transfer-to.component';
import { OtherMemberComponent } from './pages/transfer-to/other-member/other-member.component';
import { TransferHistoryComponent } from './pages/transfer-history/transfer-history.component';
import { AllHistoryComponent } from './pages/transfer-history/all-history/all-history.component';
import { AppSettingComponent } from './pages/app-setting/app-setting.component';
import { AccountSettingComponent } from './pages/account-setting/account-setting.component';
import { ChangeDisplaynameComponent } from './pages/change-displayname/change-displayname.component';
import { ChangeUsernameComponent } from './pages/change-username/change-username.component';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './pages/transfer-to/popup/popup.component';
import { EditGroupComponent } from './pages/group/edit-group/edit-group.component';
import { MemberContainerComponent } from './pages/group/edit-group/member-container/member-container.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MainContentComponent,
    TopbarComponent,
    ChooseCurrencyComponent,
    MenuComponent,
    RefreshWalletComponent,
    GroupComponent,
    CustomGroupComponent,
    CreateGroupComponent,
    GroupDetailComponent,
    UserContainerComponent,
    TransferComponent,
    MemberComponent,
    TransferToComponent,
    OtherMemberComponent,
    TransferHistoryComponent,
    AllHistoryComponent,
    AppSettingComponent,
    AccountSettingComponent,
    ChangeDisplaynameComponent,
    ChangeUsernameComponent,
    PopupComponent,
    EditGroupComponent,
    MemberContainerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
