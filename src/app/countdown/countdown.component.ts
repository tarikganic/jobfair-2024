import { Component, OnInit, NgZone  } from '@angular/core';

@Component({
  selector: 'app-countdown',
  template: `
    <div>
      <p>{{ countdown }}</p>
    </div>
  `,
  standalone: true,
  styles: [
    `
      .countdown-container {
        position: fixed;
        background-color: #333;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
      }
    `,
  ],
})
export class CountdownComponent implements OnInit {
  constructor(private ngZone: NgZone) {}
  countdown: string = ''; // Initialize countdown
  topPosition: number = 0; // Initialize topPosition
  leftPosition: number = 0; // Initialize leftPosition

  ngOnInit() 
  {
    this.calculateCountdown();

    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.calculateCountdown();
          
          
          // Update countdown every second
          // setInterval(() => {
          //   this.calculateCountdown();
          // }, 1000);
      
          // // Update position every 200 milliseconds
          // setInterval(() => {
          //   this.setPosition();
          // }, 200);
          // Your code here
          //console.log('Interval executed');
        });
      }, 1000);
    });
  }

  calculateCountdown() {
    // Set the target date (4th of March 2024)
    const targetDate = new Date('2024-03-04T00:00:00');

    // Calculate the time remaining
    const now = new Date();
    const timeRemaining = targetDate.getTime() - now.getTime();

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Format the countdown string
    this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }


}