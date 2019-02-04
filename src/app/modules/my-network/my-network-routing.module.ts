import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageInvitationsComponent } from '@app/modules/my-network/components/manage-invitations/manage-invitations.component';
import { NetworkComponent } from '@app/modules/my-network/components/network.component';
import { AgentAddfriendComponent } from '@app/modules/my-network/components/agent-addfriend/agent-addfriend.component';
import { ConnectionsComponent } from '@app/modules/my-network/components/connections/connections.component';
import { AgentProfileComponent } from '@app/modules/my-network/components/agent-profile/agent-profile.component';
import { AgencySideComponent } from '@app/modules/my-network/components/agency-side/agency-side.component';
import { AgencyUsersideComponent } from '@app/modules/my-network/components/agency-userside/agency-userside.component';
import { SearchPeopleComponent } from '@app/modules/my-network/components/search-people/search-people.component';
import { SearchCompanyComponent } from '@app/modules/my-network/components/search-company/search-company.component';

const routes: Routes = [
  {
    path: '',
    component: NetworkComponent
  },
  {
    path: 'invitations',
    component: ManageInvitationsComponent
  },
  {
    path: 'add-friend',
    component: AgentAddfriendComponent
  },
  {
    path: 'connections',
    component: ConnectionsComponent
  },
  {
    path: 'profile/:id',
    component: AgentProfileComponent
  },
  {
    path: 'agency-side',
    component: AgencySideComponent
  },
  {
    path: 'user-side',
    component: AgencyUsersideComponent
  },
  {
      path: 'search-people',
      component: SearchPeopleComponent
  },
  {
      path: 'search-company',
      component: SearchCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNetworkRoutingModule {}
