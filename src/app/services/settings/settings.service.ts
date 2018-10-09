import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor() { }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    } else {
      this.aplicarTema(this.ajustes.tema);

    }
  }

  aplicarTema(color: string) {
    document.getElementById('tema').setAttribute('href', `assets/css/colors/${color}.css`);
    this.ajustes.tema = color;
    this.ajustes.temaUrl = `assets/css/colors/${color}.css`;
    this.guardarAjustes();
  }


}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
