import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ICat } from './interfaces/cat.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cat-finder';
  cardSize = 300;
  cardsInRaw = 4;
  catList: ICat[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.cardsInRaw = window.outerWidth <= 768 ? 2 : 4;
    this.appService.getCatList().subscribe((cl: ICat[]) => {
      this.catList = cl;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.cardsInRaw = window.outerWidth <= 768 ? 2 : 4;
  }
}
