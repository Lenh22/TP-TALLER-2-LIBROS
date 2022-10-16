import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StylesService {
  show: number = 0;
  showDrawerStyle(n: number) {
    this.show = n;
  }

  hideDrawerStyle(n: number) {
    this.show = n;
  }
}
