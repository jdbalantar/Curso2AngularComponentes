import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  /*
  Con Input recibimos un valor desde el padre
  * */
  @Input() img: string = 'Valor inicial';

  constructor() { }

  ngOnInit(): void {
  }

}
