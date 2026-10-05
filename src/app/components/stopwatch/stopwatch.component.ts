import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  hours=0;
  min=0;
  seconds=0;
  timer:any;
  isPaused=false;

  StartTimer(){
    if(this.timer){
      return;
    }
    this.isPaused=false;
    this.timer=setInterval(() => {
      this.seconds=this.seconds+1;    // for incremneting seconds
      if(this.seconds===60){          // check if seconds reach 60 then what ?
        this.seconds=0;               // seconds should reset to 0 and start again
        this.min=this.min+1;          //min should update to ++
      }
      if(this.min===60){              // for min too same logic
        this.min=0;
        this.hours=this.hours+1;
      }
    }, 1000);
  }

  Pause(){
    clearInterval(this.timer);        // clearIntervel used to stop the intervel where it is running now
    this.timer=null; 
    this.isPaused=true;               // since we stopped and we need to resume we are tellign to delete the intervel and create a new intervel (will note affect the stowatch) 
  }

  Reset(){
    this.hours=0;
    this.seconds=0;
    this.min=0;
    clearInterval(this.timer);
    this.timer=null;
  }


}
