import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPrivacySwitchComponent } from '@binom/sdk-privacy/privacy-switch';
import { BnPrivacySwitchMenuComponent } from '@binom/sdk-privacy/privacy-switch-menu';

@Component({
  selector: 'app-switch-demo',
  standalone: true,
  imports: [CommonModule,BnPrivacySwitchComponent,BnPrivacySwitchMenuComponent],
  templateUrl: './switch-demo.component.html',
  styleUrl: './switch-demo.component.scss'
})
export class SwitchDemoComponent {

}
