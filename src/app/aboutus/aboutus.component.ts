
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [

    trigger('elementState',[
        state(
            'normal',
            style({
              backgroundColor: 'red',
              transform: 'translateX(0)',
            })
          ),
          transition('highlighted=>normal', animate(600)),
          state(
            'highlighted',
            style({
              backgroundColor: 'blue',
              transform: 'translateX(100px)',
            })
          ),
          transition('normal=>highlighted', animate(300)),
          state(
            'minify',
            style({
              backgroundColor: 'green',
              transform: 'translateX(0) scale(0.5)',
            })
          ),
        //   transition('minify<=>*', animate(600)),
        //   transition(
        //     'minify<=>*',
        //     animate(600,style({ borderRadius: '50px',}))
        //   ),
        transition('minify<=>*', [
            style({
              backgroundColor: 'orange',
              borderRadius: '0',
            }),
            animate(
              1000,
              style({
                borderRadius: '50px',
              })
            ),
            animate(1500),
          ]),
    ])
  ],
})


export class AboutusComponent implements OnInit {
  state = 'normal';
  constructor() {}

  ngOnInit(): void {
  }
  
  onAnimate() {
    this.state === 'highlighted'
      ? (this.state = 'normal')
      : (this.state = 'highlighted');
  }

  onMinify() {
    this.state = 'minify';
  }
 
}
