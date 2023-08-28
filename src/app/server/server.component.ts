import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 14;
  serverStatus: boolean = true;

  getBinaryID() {
    return this.serverId.toString(2);
  }
}
