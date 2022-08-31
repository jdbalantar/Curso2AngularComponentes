import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  /*
  Con Input recibimos un valor desde el padre
  * */
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg'
  constructor() {
    // Lo primero que se ejecuta
    // No correr cosas asincronas
    // Este se ejecuta solo una vez
    console.log("constructor", "imgValue =>", this.img)
  }

  ngOnInit(): void {
    // Se ejecuta antes de renderizarse el componente
    // Podemos correr cosas asincronas (fetch, api, promesas)
    // Se ejecuta una sola vez
    console.log("ngOnInit");
  }

  ngOnChanges(){
    // Se ejecuta antes de renderizarse el componente y durante la renderización
    // Su objetivo es actualizar los cambios en los INPUT - Se ejecuta las veces que se actualicen los valores del input en el componente
    console.log("ngOnChanges", "imgValue =>", this.img)
  }
  ngAfterViewInit() {
    // Se ejecuta después de que todo se esté renderizando
    // Normalmente aquí se manejan los hijos del componente
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    // Se ejecuta cuando se elimin el componente
    console.log("ngOnDestroy");
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
