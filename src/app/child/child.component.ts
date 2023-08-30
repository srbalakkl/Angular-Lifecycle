import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  //since the template ref variable is in content we can access it in childComponent using @ContentChild
  @ContentChild('projectedContent', {static: true}) projectedContent: any;
  /** In OnInit, Onchange and DoCheck hook this is defined as undefined hook, But In other hooks
   * It is defined as an Object reference variable.
   *
   * NOTE: by changing the flag static=true we access it from everywhere including 'ngOnInit' and 'ngOnChange' itself.
   */

  @Input() parentsName = '';
  @ViewChild('childView', {static: true}) childView: any;

  constructor() {
    console.log('**********child constructor is called*********')
  }

  ngOnInit(): void {
    console.log('*******child ngOnInit is called********');
    console.log('OnInit value ==========', this.parentsName)
  }

  /**
   * @description ViewChild
   * Just like ContentChild we can also get the child template using @ViewChild property from angular-9.
   * But the Only difference is It is not called in the 'ContentViewInit' and 'ContentViewChecked'.
   *
   * NOTE: We can fix this by making @ViewChild as static,
   * If we change static=true we access it from everywhere including 'ngOnInit' and 'ngOnChange' itself.
   */

  ngOnChanges(changes: SimpleChanges): void {
    /**
     * Called before ngOnInit
     * @description
     * ngOnChange Will get executed when the  change is detected in the parent component.
     */
    console.log('********* ngOnchange ************')
    console.log(`ngOnChanges = ${JSON.stringify(changes)}`);
    console.log('Onchange value ==========', this.parentsName)
    console.log('ngOnChanges = ', this.projectedContent)
    console.log('ngOnChanges = ', this.childView)
    console.log('child view from ng onchange = ', this.childView.nativeElement.value)
  }

  ngDoCheck() {
    /**
     * Similar to ngOnChanges
     * But it is called immediately after the ngOnChanges
     *
     * NOTE: It is important to Not use ngOnChanges and ngDoCheck in the same component.
     * Becz sometimes ngDoCheck changes will affect the ngOnChange, and It'll become a loop to affect the workflow.d
     */
    console.log('*******child ngDoCheck is called**********')
    console.log('The Projected Content is ', this.projectedContent)
    console.log('ngDoCheck = ', this.childView)
  }

  ngOnDestroy() {
    console.log('******* Child ngOnDestroy is called. *********');
  }

  ngAfterContentChecked() {
    console.log('******* child ngAfterContentChecked is called ********')
    console.log('ngAfterContentChecked = ', this.projectedContent)
    console.log('ngAfterContentChecked = ', this.childView)
  }

  ngAfterViewChecked() {
    console.log('******* child ngAfterViewChecked is called. ********')
    console.log('ngAfterViewChecked = ', this.projectedContent)
    console.log('ngAfterViewChecked = ', this.childView)
  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log('****** child components ngAfterViewInit ******')
    console.log('ngAfterViewInit = ', this.projectedContent)
    console.log('ngAfterViewInit = ', this.childView)
  }

  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log('******** child components ngAfterContentInit ******')
    console.log('ngAfterContentInit = ', this.projectedContent)
    console.log('ngAfterContentInit = ', this.childView)
  }

}
