import { Component, OnInit } from '@angular/core';
import {UiStyleToggleService} from "./services/ui-style-toggle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EdgyStack Dark Mode Template';
  
  darkmode: boolean = this.uiStyleToggleService.isDarkThemeSelected();
  constructor(private uiStyleToggleService: UiStyleToggleService) {
  }
  ngOnInit(): void {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode is enabled
      this.darkmode = true;
    }
  }

  toggleTheme() {
    this.uiStyleToggleService.toggle();
    this.darkmode = this.uiStyleToggleService.isDarkThemeSelected();
  }
}
