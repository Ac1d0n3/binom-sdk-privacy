import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPrivacyDirective, BnPrivacyService } from '@binom/sdk-privacy/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule,MatButtonModule,BnPrivacyDirective,],

  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.scss'
})
export class DirectiveDemoComponent {
  toggle:boolean = false;
}
