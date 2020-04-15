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
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
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

}
