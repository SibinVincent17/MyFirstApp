
import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  animations: [
    trigger('list', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0px)',
        })
      ),

      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(600),
      ]),
      transition('* => void', [
        animate(
          500,
          style({
            backgroundColor: 'white',
            transform: 'translateX(50px)',
          })
        ),
        animate(
          600,
          style({
            opacity: 0,
            transform: 'translateX(-150px)',
          })
        ),
      ]),
    ]),
  ],
})
export class ServersComponent implements OnInit {
  servers: { type: string; name: string; content: string; created_on: Date; }[] = [];
  constructor(private serverService: ServersService) {
    this.servers = this.serverService.servers;
  }

  ngOnInit(): void {}

  onAnimationComplete(event) {
    console.log(event);
  }
  onAnimationStart(event) {
    console.log(event);
  }
}