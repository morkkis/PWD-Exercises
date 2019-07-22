import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { ICat } from './interfaces/cat.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cat-finder';

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getCatList().subscribe((catList: ICat[]) => {
      console.log(catList);
    });
  }
}
