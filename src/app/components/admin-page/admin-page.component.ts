import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/shared/discount-products.service';
import {
  Catalog,
  ChooseCatalogService
} from 'src/app/shared/choose-catalog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendMessageService } from 'src/app/shared/send-message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public messages = [];
  public FormValidation: FormGroup;
  public categoryName = '';
  public subCategoryName = '';
  public subCategory = [];
  public catalogs: Catalog[];
  public addingItem: Discount = {
    name: '',
    oldPrice: 0,
    newPrice: 500,
    count: 20,
    countity: 1,
    text: '',
    date: new Date().getTime(),
    feedbacks: [],
    stars: []
  };
  constructor(
    private chooseCatalog: ChooseCatalogService,
    private formBuilder: FormBuilder,
    private messageService: SendMessageService
  ) {
    this.checkForm();
  }

  public checkForm(): void {
    this.FormValidation = this.formBuilder.group({
      name: ['', Validators.required],
      newPrice: ['', Validators.required],
      count: ['', Validators.required]
    });
  }

  showSubCategories() {
    if (this.categoryName !== '') {
      this.subCategory = this.catalogs.find(
        l => l.title === this.categoryName
      ).catalogs;
    }
  }

  addItem(name, newPrice, count, text): void {
    this.chooseCatalog.addItem(
      {
        name,
        newPrice,
        count,
        text,
        countity: 1,
        oldPrice: 0,
        date: new Date().getTime(),
        feedbacks: [],
        stars: []
      },
      this.categoryName,
      this.subCategoryName
    );
    this.addingItem.name = '';
    this.addingItem.text = '';
    this.addingItem.newPrice = 0;
    alert('Ապրանքն ավելացված է');
  }

  ngOnInit() {
    this.chooseCatalog.CatalogSubject$.subscribe(e => (this.catalogs = e));
    this.subCategory = this.chooseCatalog.CatalogSubject$.value[1].catalogs;
    this.messageService.messagesSubject$.subscribe(e => (this.messages = e));
  }
}
