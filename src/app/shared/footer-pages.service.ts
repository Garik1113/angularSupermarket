import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterPagesService {
  public footerPageTitles: string[] = [
    'Մեր մասին',
    'Աշխատատեղեր',
    'Հաճախորդների կարծիքներ',
    'Օգտագործողի ուղեցույց',
    'Կապ',
    'Հաճախակի տրվող հարցեր'
  ];
  public footerPageTitleSubject$ = new BehaviorSubject<string[]>(
    this.footerPageTitles
  );
  public pageTitleSubject$ = new BehaviorSubject<string>('Կապ');
  public goToThisFooterPage(title: string): void {
    this.pageTitleSubject$.next(title);
  }
  constructor() {}
}
