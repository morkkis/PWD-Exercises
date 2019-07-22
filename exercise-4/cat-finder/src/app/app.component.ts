import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ICat } from './interfaces/cat.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cat-finder';
  catList: ICat[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getCatList().subscribe((cl: ICat[]) => {
      this.catList = cl;
    });
  }
}
