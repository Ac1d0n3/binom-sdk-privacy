import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coerceBooleanProperty,BooleanInput } from '@angular/cdk/coercion';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { BnPrivacySwitchComponent } from '@binom/sdk-privacy/privacy-switch';
@Component({
  selector: 'bn-privacy-switch-menu',
  standalone: true,
  imports: [CommonModule,MatMenuModule,MatButtonModule,MatTooltipModule,TranslateModule,BnPrivacySwitchComponent],
  templateUrl: './bn-privacy-switch-menu.component.html',
  styleUrl: './bn-privacy-switch-menu.component.css'
})
export class BnPrivacySwitchMenuComponent{ 
  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }

}