import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Input() opened: boolean | undefined;

  changeState(event: boolean | undefined) {
    this.opened = event;
    console.log('from app');
  }

}

