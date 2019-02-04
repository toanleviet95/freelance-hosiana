import { NgModule, Inject, Injectable } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AutosizeModule } from 'ngx-autosize';
import { MyNetworkRoutingModule } from './my-network-routing.module';
import { NetworkComponent } from './components/network.component';
import { ManageInvitationsComponent } from './components/manage-invitations/manage-invitations.component';
import { AgentAddfriendComponent } from './components/agent-addfriend/agent-addfriend.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AgencySideComponent } from './components/agency-side/agency-side.component';
import { AgencyUsersideComponent } from './components/agency-userside/agency-userside.component';
import { SearchPeopleComponent } from './components/search-people/search-people.component';
import { SearchCompanyComponent } from './components/search-company/search-company.component';

@NgModule({
  imports: [SharedModule, MyNetworkRoutingModule, AutosizeModule],
  declarations: [
    NetworkComponent,
    ManageInvitationsComponent,
    AgentAddfriendComponent,
    ConnectionsComponent,
    FormFilterComponent,
    AgentProfileComponent,
    EditProfileComponent,
    AgencySideComponent,
    AgencyUsersideComponent,
    SearchPeopleComponent,
    SearchCompanyComponent,
  ]
})
export class MyNetworkModule {}
