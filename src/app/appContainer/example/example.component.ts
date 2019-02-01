import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  constructor(private location: Location) {

  }

  goBack() {
    this.location.back();
  }

}
