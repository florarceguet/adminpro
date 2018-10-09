import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(color: string, link: any) {
    this._ajustes.aplicarTema(color);
    this.aplicarCheck(link);

  }
  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');


  }
  colocarCheck() {

    let selectores: any = document.getElementsByClassName('selector');

    let temaAplicado = this._ajustes.ajustes.tema;
    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') === temaAplicado) {
        ref.classList.add('working');
break;
      }
    }
  }


}

