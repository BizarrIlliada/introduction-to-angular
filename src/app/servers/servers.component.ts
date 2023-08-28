import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'Server wasn\'t created';
  newServerName: string = '';

  toggleButtonStatus() {
    if (this.allowNewServer) {
      this.allowNewServer = false;
    }
    
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  };
  
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! It\'s name is ' + this.newServerName;
    this.newServerName = 'You don\'t allowed to write here!'

    this.toggleButtonStatus();
  };

  onUpdateNewServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value;
  };

  ngOnInit() {
    this.toggleButtonStatus();
  };
}
