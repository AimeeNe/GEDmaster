import {Component, EventEmitter, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DAM-AVL';
  @Output()sidenaToogleEvent: EventEmitter<any> = new EventEmitter<any>();
  languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'fr', label: 'FR', fullName: 'Français' }
  ]

constructor(private translateService: TranslateService) {
}
  get langs(): any[] {
    return this.languages;
  }
  get currentLang(): string {
    return this.translateService.currentLang || 'en';
  }

  set currentLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.currentLang = lang;
  }
  toogleSideNav(){
    this.sidenaToogleEvent.emit();
  }
  updateLang(lang: string): void {

    this.translateService.use(lang);
    this.translateService.currentLang = lang;

  }
}
