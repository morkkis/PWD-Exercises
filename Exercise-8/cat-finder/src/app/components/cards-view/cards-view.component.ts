import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cf-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsViewComponent implements OnInit {
  catList: ICat[];
  cardSize = 300;
  cardsInRaw = 4;

  constructor(private catService: CatService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.catService.getCatList().subscribe((cl: ICat[]) => {
      this.catList = cl;
    });
  }

  handleLikeClick(catItem: ICat) {
    // this.catList = this.catList.map(item => item === catItem ? {...item, like: !item.like} : item);
    this.replaceItemInList({...catItem, like: !catItem.like});
    this.catService.setLikeCat(catItem.id).subscribe(_ => true, this.handleLikeClickError.bind(this, catItem));
  }

  handleLikeClickError(catBeforeChange: ICat, error) {
    console.warn(error);
    const mess = `Could not like ${catBeforeChange.name} cat`;
    this.setErrorMessage(mess);
    this.replaceItemInList({...catBeforeChange});
  }

  replaceItemInList(itemToReplace) {
    this.catList = this.catList.map(item => item.id === itemToReplace.id ? itemToReplace : item);
  }

  setErrorMessage(message: string) {
    this.toastr.error(message, null, {
      timeOut: 5000,
      positionClass: 'toast-top-center'
    });
  }

  handleRemoveClick(catItem: ICat) {
    this.catList = this.catList.filter(item => item !== catItem);
    this.catService.removeLikeCat(catItem.id).subscribe(_ => true, this.handleRemoveClickError.bind(this, catItem));
  }

  handleRemoveClickError(catBeforeChange: ICat, error) {
    console.warn(error);
    const mess = `Could remove ${catBeforeChange.name} cat`;
    this.setErrorMessage(mess);
    this.catList = [...this.catList, catBeforeChange];
    this.catList.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  }
}
