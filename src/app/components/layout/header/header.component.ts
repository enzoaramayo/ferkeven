import { Component, OnInit } from '@angular/core';
//Esto es para configurar el idioma por defecto despues el usuario escoge el idioma.
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public selectedLanguage = 'es';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  toogleLanguage(lang: string) {
    this.translateService.use(lang);
  }

  ngOnInit(): void {
  }

}
