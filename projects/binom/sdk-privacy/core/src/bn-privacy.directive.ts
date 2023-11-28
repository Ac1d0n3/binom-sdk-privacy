import { Directive, Input, ElementRef, OnDestroy, Renderer2, ViewContainerRef, OnInit, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { BnPrivacyService } from './bn-privacy.service';


@Directive({
  selector: '[bnPrivacy]',
  standalone: true,
  //providers:[BnPrivacyService]
})
export class BnPrivacyDirective  implements OnDestroy,OnInit {
  @Input('bnPrivacy') privacyType!: string;

  private _height: number = 0;
  get height(): number { return this._height; }
  @Input() set height(val: NumberInput) { this._height = coerceNumberProperty(val); }


  private _width: number = 0;
  get width(): number { return this._width; }
  @Input() set width(val: NumberInput) { this._width = coerceNumberProperty(val); }

  @Input() dataSrc!:string;
 
  private privacyInfo: any;
  private privacySubscription!: Subscription;
  private privacyButtonRef: any;
  private frameContainer:any; 
  private src:string = '';
  constructor(
    
    private translateService: TranslateService,
    private el: ElementRef,
    private privacyService: BnPrivacyService,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private zone:NgZone
  ) {
   
  }

  ngOnInit(){
    this.privacySubscription = this.privacyService.privacyInfo$.subscribe((privacy) => {
      this.privacyInfo = privacy;
      console.log(this.privacyInfo)
      this.checkPrivacy();
   
    });

  }

  ngOnDestroy() {
    this.privacySubscription.unsubscribe();
  }

  private checkPrivacy(injectCheck:boolean = false) {
    this.zone.run(()=>{
      this.src = this.el.nativeElement.getAttribute('data-src');
      if(this.dataSrc)  this.src = this.dataSrc
      this.removePrivacyButton();
      if (this.privacyInfo[this.privacyType] === true || injectCheck) {
        if(this.privacyType === 'links'){
          this.renderer.setAttribute(this.el.nativeElement, 'href', this.src);
        } else {
          this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
        }
        this.renderer.setStyle(this.el.nativeElement, 'display', '');
      } else {
        if (!this.privacyButtonRef) {
          this.addPrivacyButton();
        } 
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }
    })
   
  }
  

  private async addPrivacyButton() {
    
    const frameContainer = this.renderer.createElement('div');
    this.frameContainer = frameContainer;
    const elRect = this.el.nativeElement.getBoundingClientRect();
    let width = this.width>0? this.width : elRect.width;
    let height =  this.height>0? this.height : elRect.height;

    if(width >= 200 && height >= 200 && 
      (this.privacyType === 'videos' || this.privacyType === 'images')){
      this.renderer.setStyle(frameContainer,'width', width+'px');
      this.renderer.setStyle(frameContainer,'height', height+'px');

      this.renderer.addClass(frameContainer, 'bn-privacy-box');
      this.renderer.addClass(frameContainer, 'regular-border');
      const { BnInfoBoxComponent } = await import('@binom/sdk-core/info')
      this.privacyButtonRef = this.viewContainerRef.createComponent(BnInfoBoxComponent);
      this.privacyButtonRef.instance.icon = 'fa-shield-alt';
      this.privacyButtonRef.instance.translateKey = 'privacy.notShown.'+this.privacyType;
      this.privacyButtonRef.instance.cardClass = 'centerCardSmall';
      this.privacyButtonRef.instance.showButtonA = true;
      this.privacyButtonRef.instance.buttonTranslateKeyA = 'privacy.'+this.privacyType.substring(0,this.privacyType.length-1);
      this.privacyButtonRef.instance.showButtonB = true;
      this.privacyButtonRef.instance.buttonTranslateKeyB = 'privacy.'+this.privacyType;
      this.privacyButtonRef.instance.warn = true;
      this.privacyButtonRef.instance.translateKeySub = this.src
      
      this.privacyButtonRef.instance.buttonBClicked.subscribe(() => {
        this.privacyInfo[this.privacyType] = true;
        this.privacyService.setValues(this.privacyInfo)
      });
      this.privacyButtonRef.instance.buttonAClicked.subscribe(() => {
        this.checkPrivacy(true)
      });
   
      this.renderer.appendChild(frameContainer,this.privacyButtonRef.location.nativeElement)

    } else {
      this.renderer.setStyle(frameContainer,'display', 'inline-block');
      this.renderer.setStyle(frameContainer,'cursor', 'pointer');
      this.renderer.addClass(frameContainer, 'warn-color');
      this.renderer.setProperty(frameContainer, 'innerText', this.translateService.instant('privacy.text.'+this.privacyType));
      this.renderer.listen(frameContainer, 'click', () => {
        this.checkPrivacy(true)
      });
    }
    this.renderer.insertBefore(this.el.nativeElement.parentNode, frameContainer, this.el.nativeElement);
   
  }

  private removePrivacyButton() {
    if (this.frameContainer) {
      const parent = this.frameContainer.parentNode;
      this.renderer.removeChild(parent,this.frameContainer)
      parent.removeChild(this.frameContainer);
      this.frameContainer = null;
    }

    if (this.privacyButtonRef ) {
      this.privacyButtonRef.destroy();
      this.privacyButtonRef= null;
    }
  
    
  }
}
