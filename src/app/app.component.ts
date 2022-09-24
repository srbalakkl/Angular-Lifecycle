import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angularLifecycle';

  ngOnInit() {
    console.log('Ng On Init is Called');
  }

  ngAfterViewInit() {
    console.log('after view init is called')
  }

}
