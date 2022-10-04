import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit, OnDestroy {

  textName: string = 'asdf';
  name = new FormControl('');

  constructor() {
    console.log('parent constructor is called')
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.textName = 'time OUT name'
      console.log('time out is called')
    }, 3000)
    console.log('parent ngOnInit is called');
  }

  btnclick() {
    this.textName = this.name.value!;//using null assertion,
    this.textName = this.name.value as string;//using null assertion,
    this.textName = this.name.value ?? '';// nullish coalescing operator (??),
    this.textName = this.name.value || '';// using logical operators in s similar way,
    /**
     * The nullish coalescing operator (??) is a logical operator that returns
     *  its right-hand side operand when its left-hand side operand is null or undefined,
     *  and otherwise returns its left-hand side operand.
     */

    /**
     *We can even use simple if else statement to solve this null is not assignable error.
     */
    console.log(this.name.value);
  }

  ngDoCheck() {
    console.log('parent ngDoCheck is called')
  }

  ngOnDestroy() {
    console.log('Parents ngOnDestroy is called.')
  }

}
