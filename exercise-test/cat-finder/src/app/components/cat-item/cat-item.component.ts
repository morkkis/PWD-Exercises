import { Component, Input } from '@angular/core';
import { ICat } from '../../interfaces/cat.interface';

@Component({
  selector: 'cf-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.scss']
})
export class CatItemComponent {
  @Input() cat: ICat;
}
