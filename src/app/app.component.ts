import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import {UiStyleToggleService} from "./services/ui-style-toggle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EdgyStack Dark Mode Template';
  
  darkmode: boolean = this.uiStyleToggleService.isDarkThemeSelected();
  constructor(
    private uiStyleToggleService: UiStyleToggleService,
    private cookieService: CookieService,
  ) {}
  ngOnInit(): void {
    this.uiStyleToggleService.setThemeOnStart();
  }

  toggleTheme() {
    //this.uiStyleToggleService.toggle();
    this.darkmode = this.uiStyleToggleService.isDarkThemeSelected();
  }
}
