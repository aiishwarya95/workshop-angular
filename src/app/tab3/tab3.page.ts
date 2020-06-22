import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public goToURL(): void {
    this.document.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
}
