import { Component } from '@angular/core';
import {UiStyleToggleService} from "./services/ui-style-toggle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EdgyStack Dark Mode Template';
  darkmode: boolean = this.uiStyleToggleService.isDarkThemeSelected();
  constructor(private uiStyleToggleService: UiStyleToggleService) {
  }

  toggleTheme() {
    this.uiStyleToggleService.toggle();
    this.darkmode = this.uiStyleToggleService.isDarkThemeSelected();
  }
}
