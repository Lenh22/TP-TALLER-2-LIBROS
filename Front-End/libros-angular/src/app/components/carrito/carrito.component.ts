import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cantidad: number[] = [];
  numValue: number = 1;

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < 10; i++) {
      this.cantidad.push(i);
    }
  }

  selectCount(event: any) {
    this.numValue = parseInt(event.target.value);
    if (this.numValue === null || this.numValue === 0 || isNaN(this.numValue)) {
      this.numValue = 1;
    }
    // console.log(this.numValue);
  }
}
