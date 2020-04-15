import { Chart } from 'chart.js';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, OnChanges {

  @Input('my-id') myId = '';
  @Input('my-type') myType = 'bar';
  @Input('data') data = [];


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() : void {
    this.myChart()
  }

  ngOnChanges() : void {
    this.myChart()
  }

  myChart() {

    let labels = _.map(this.data, 'label');
    let quantities = _.map(this.data, 'quantity');

    var myChart = new Chart(this.myId, {
      type: this.myType,
      data: {
          labels: labels,
          datasets: [{
              label: '# of Votes',
              data: quantities,
              backgroundColor: labels.map(() => `rgba(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)}, 1)`),
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (+max - +min) + +min)
  }

}
