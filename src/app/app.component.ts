import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,OnChanges{
  isUserLoggedIn:boolean = true;
  title = 'DAM-AVL';
  @Output()sidenaToogleEvent: EventEmitter<any> = new EventEmitter<any>();
  languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'fr', label: 'FR', fullName: 'Français' }
  ]

  ngOnChanges(): void {
    this.isUserLoggedIn = this.loginService.isLoggedIn()
    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/sign-up-user']);
    }

    this.loginService.isUserLoggedInObservable.subscribe(res=>{
      console.log(res);

      this.isUserLoggedIn = Boolean(res);

    });
  }

  ngOnInit(): void {

  }



constructor(private translateService: TranslateService,private loginService:LoginService,private router:Router) {
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
