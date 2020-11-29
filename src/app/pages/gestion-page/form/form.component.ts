import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { listenerCount } from 'process';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  gestionPageForm;
  @Output() nombre: EventEmitter<string> = new EventEmitter<string>();
  @Output() precio: EventEmitter<number> = new EventEmitter<number>();
  @Output() descripcion: EventEmitter<string> = new EventEmitter<string>();
  @Output() imagen: EventEmitter<string> = new EventEmitter<string>();
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.gestionPageForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        price: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required],
        stars: ['', Validators.required],
      }
    );
   }

  ngOnInit(): void {


  }
  saveChanges(){
    console.log(this.gestionPageForm.value);
  }
  cambioNombre(texto: string){
    this.nombre.emit(texto);
  }
  cambioPrecio(p: number){
    this.precio.emit(p);
  }
  cambioDescripcion(texto: string){
    this.descripcion.emit(texto);
  }
  cambioImagen(texto: string){
    this.imagen.emit(texto);
  }
  cambioRating(r: number){
    this.rating.emit(r);
  }

}
