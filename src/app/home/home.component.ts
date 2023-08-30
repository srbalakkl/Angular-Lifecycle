import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit {

  fdata = new FormControl();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes = ${changes}`);
  }

  ngOnInit(): void {
    console.log('on init is called');
  }

  ngAfterViewInit() {
    console.log('after view init is called')
  }

  submit() {
    //Reactive Form Values
    console.log(`the Reactive Form Value is ${this.fdata.value}`);
  }

}
