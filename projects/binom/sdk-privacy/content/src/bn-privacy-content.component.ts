import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { BnPrivacyService } from '@binom/sdk-privacy/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'bn-privacy-content',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './bn-privacy-content.component.html',
  styleUrl: './bn-privacy-content.component.css'
})
export class BnPrivacyContentComponent  implements OnInit, OnDestroy {
  @Input() type:string = 'links';
  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }
  @Input() translateTag:string = '';
  sub!:Subscription
  constructor(
    private privacySvc: BnPrivacyService,

  ){
    
  }
  allow:boolean = false;
  ngOnInit(): void {
 
    this.sub = this.privacySvc.privacyInfo$.subscribe((data:any)=>{
      this.allow = data[this.type]
    })
  }

  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }
}
