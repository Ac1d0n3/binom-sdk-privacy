import { Injectable } from '@angular/core';
import { BnPrivacyInfo } from './bn-privacy-info';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BnPrivacyService {

  constructor() { 
    this.getSettingsFromLocal();
    this.privacyInfo$.next(this.privacyInfo)
  }

  private privacyInfo:BnPrivacyInfo = {
    videos: false,
    images: false,
    links: false,
    share: false,
    saveSettings: false
  }
  public  privacyInfo$: BehaviorSubject<BnPrivacyInfo> = new BehaviorSubject(this.privacyInfo);

  setValues(values:any){
    this. privacyInfo = values;
    this. privacyInfo$.next(this. privacyInfo)
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
}
