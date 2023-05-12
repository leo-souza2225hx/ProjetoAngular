import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  alunos = {
    nome:'Jubileu',
    telefones:[{Numero:'15 988695439'},{Numero:'15 988168888'}],
    Rm:'123',
    Cursos:[
      {nome:'Ds',Horario:'Manhã'},
      {nome:'Fármacia',Horario:'Tarde'},
      {nome:'Psicologia',Horario:'Noite'},
      {nome:'Administração',Horario:'Manhã'}
    ],
  }
}
