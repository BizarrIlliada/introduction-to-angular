import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverCreationStatus: string = '';
  newServerName: string = '';
  servers = ['Illiada', 'Mar\'iana'];
  
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! It\'s name is ' + this.newServerName;
    this.servers.push(this.newServerName);
    this.newServerName = 'You don\'t allowed to write here!';
    console.log(this.servers);
    
  };

  onUpdateNewServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value;
  };
}
