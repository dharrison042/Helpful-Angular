import {Component} from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor() {
  }

  foo = 100;
  bar = 1400;
  somethingElse = 850;

  pieChartType = 'pie';
  pieChartLabels = ['Poo', 'Bar', 'Something Else'];
  pieChartData = [this.foo, this.bar, this.somethingElse];

  chartHovered(e) {
    console.log(e);
  }

  chartClicked(e) {
    console.log(e);
  }

  makePolar() {
    console.log('making polar');
    this.pieChartType = 'polarArea';
  }

  makeDoughnut() {
    console.log('making doughnut');
    this.pieChartType = 'doughnut';
  }

  makePie() {
    console.log('making pie');
    this.pieChartType = 'pie';
  }

  makeBar() {
    console.log('making bar');
    this.pieChartType = 'bar';
  }

  modifyFoo(amount) {

    console.log('modifying foo', amount);

    if (this.foo + amount <= 0) {
      this.foo = 0;
    } else {
      this.foo += amount;
    }

    this.pieChartData = [this.foo, this.bar, this.somethingElse];
  }

  modifyBar(amount) {

    console.log('modifying bar', amount);

    if (this.bar + amount <= 0) {
      this.bar = 0;
    } else {
      this.bar += amount;
    }

    this.pieChartData = [this.foo, this.bar, this.somethingElse];
  }

  modifySomethingElse(amount) {

    console.log('modifying something else', amount);

    if (this.somethingElse + amount <= 0) {
      this.somethingElse = 0;
    } else {
      this.somethingElse += amount;
    }

    this.pieChartData = [this.foo, this.bar, this.somethingElse];
  }

}
