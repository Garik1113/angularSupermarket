import { Component, OnInit } from '@angular/core';
import { FooterPagesService } from 'src/app/shared/footer-pages.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendMessageService } from 'src/app/shared/send-message.service';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent implements OnInit {
  public pageTitle = '';
  public name = '';
  public text = '';
  public email = '';
  public FormValidation: FormGroup;
  constructor(
    private footerService: FooterPagesService,
    private formBuilder: FormBuilder,
    private messageService: SendMessageService
  ) {
    this.checkForm();
  }
  public checkForm(): void {
    this.FormValidation = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      text: ['', Validators.required]
    });
  }
  public sendMessage(): void {
    this.messageService.addMessage({
      name: this.name,
      email: this.email,
      text: this.text
    });
    alert('Ձեր նամակը ուղարկված է!!!');
    this.name = '';
    this.email = '';
    this.text = '';
  }

  ngOnInit() {
    this.footerService.pageTitleSubject$.subscribe(e => (this.pageTitle = e));
  }
}
