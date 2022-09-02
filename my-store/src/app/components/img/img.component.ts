import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  /*
  Con Input recibimos un valor desde el padre
  * */

  img: string = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img)
    // Código para escuchar y validar cambios en un Input en especifico
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg'
  // counter: number = 0;
  // counterFn: number | undefined;



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
    /*
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log("run counter");
    }, 1000)
    */
  }



  ngOnChanges(changes: SimpleChanges){
    // Se ejecuta antes de renderizarse el componente y durante la renderización
    // Su objetivo es actualizar los cambios en los INPUT - Se ejecuta las veces que se actualicen los valores del input en el componente
    console.log("ngOnChanges", "imgValue =>", this.img)
    console.log('changes', changes);
  }

  ngAfterViewInit() {
    // Se ejecuta después de que todo se esté renderizando
    // Normalmente aquí se manejan los hijos del componente
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    // Se ejecuta cuando se elimin el componente
    console.log("ngOnDestroy");
    // window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
