import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formation-sje';
  opened: boolean;

  constructor(){
    this.opened = true;
  }

  toggleNavbar(): void{
    this.opened = !this.opened;
  }

}
