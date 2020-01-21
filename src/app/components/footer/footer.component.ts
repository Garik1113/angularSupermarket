import { Component, OnInit } from '@angular/core';
import { FooterPagesService } from 'src/app/shared/footer-pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerPageTitles: string[] = [];
  constructor(
    private footerService: FooterPagesService,
    private router: Router
  ) {}
  public goToThisFooterPage(title: string): void {
    this.footerService.goToThisFooterPage(title);
    this.router.navigate(['/footerPage']);
  }
  ngOnInit() {
    this.footerService.footerPageTitleSubject$.subscribe(
      e => (this.footerPageTitles = e)
    );
  }
}
