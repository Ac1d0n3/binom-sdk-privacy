import { Component,OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPrivacyService } from '@binom/sdk-privacy/core';
import { Subscription } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'bn-privacy-switch',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, TranslateModule, FormsModule, MatCheckboxModule],
  templateUrl: './bn-privacy-switch.component.html',
  styleUrl: './bn-privacy-switch.component.css'
})
export class BnPrivacySwitchComponent implements OnInit, OnDestroy {
  constructor(private privacySvc:BnPrivacyService){}
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  isInit:boolean = false;
  privacyInfo!:any;
  ngOnInit():void{
    let sub1 = this.privacySvc.privacyInfo$.subscribe((data:any)=>{
      this.privacyInfo = data;
      if(this.privacyInfo) this.isInit = true;
    });
    this.subscriptions.push(sub1);
  }

  changePrivacy(){
    this.privacySvc.setValues(this.privacyInfo);
    this.privacySvc.setSettingsToLocal();
  }

  ngOnDestroy(){ this.subscriptions.forEach(subscription => subscription.unsubscribe());}
}
