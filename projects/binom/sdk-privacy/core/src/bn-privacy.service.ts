import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BnPrivacyInfo } from './bn-privacy-info';
import { BehaviorSubject } from 'rxjs';
import { BnCdnLink } from './bn-cdn-link';

@Injectable({
  providedIn: 'root'
})
export class BnPrivacyService {

  private renderer: Renderer2;
  constructor(private rendererFactory: RendererFactory2,) { 
    this.renderer = rendererFactory.createRenderer(null, null);
    this.getSettingsFromLocal();
    this.privacyInfo$.next(this.privacyInfo)
  }
  
 

  private privacyInfo:BnPrivacyInfo = {
    videos: false,
    images: false,
    links: false,
    cdnLinks: false,
    share: false,
    saveSettings: false
  }
  public  privacyInfo$: BehaviorSubject<BnPrivacyInfo> = new BehaviorSubject(this.privacyInfo);

  setValues(values:any){
    this. privacyInfo = values;
    this. privacyInfo$.next(this. privacyInfo);
    this.updateCDNFontsStatus();
  }

  public getSettingsFromLocal() {
    let getSettings = localStorage.getItem('bnPrivacySettings');
    if(getSettings){
        this. privacyInfo = JSON.parse(getSettings);
        this. privacyInfo$.next(this. privacyInfo)
    }
  }

  public setSettingsToLocal() {
    if(this. privacyInfo.saveSettings){
      localStorage.setItem('bnPrivacySettings', JSON.stringify(this. privacyInfo));
    } else {
      localStorage.removeItem('bnPrivacySettings');
    }
  }

  public updateCDNFontsStatus(): void {
    if (this.privacyInfo.cdnLinks) {
      this.cdnLinks.forEach(link => {
        this.addLinkToHeader(link.cdn);
      });
    } else {
      this.cdnLinks.forEach(link => {
        this.removeLinkFromHeader(link.cdn);
      });
    }
  }

  cdnLinks!:BnCdnLink[];
  public registerCDNLink(cdnLink: { cdn: string, local: string }): void {
    if (!this.cdnLinks) {
      this.cdnLinks = [];
    }

    const existingLink = this.cdnLinks.find(link => link.cdn === cdnLink.cdn);

    if (!existingLink) {
      this.cdnLinks.push(cdnLink);
      this.privacyInfo$.next(this.privacyInfo);
    }
  }

  private addLinkToHeader(link: string): void {
    const linkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
    this.renderer.setAttribute(linkElement, 'href', link);
    this.renderer.appendChild(document.head, linkElement);
  }

  private removeLinkFromHeader(link: string): void {
    const linkElement = document.head.querySelector(`link[href="${link}"]`);
    if (linkElement) {
      this.renderer.removeChild(document.head, linkElement);
    }
  }
}
