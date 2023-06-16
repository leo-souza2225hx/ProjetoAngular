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
 valor1:any = null;
 valor2:any = null;
 resultado:any=null;
 operador:any=null;
  
  exibir(numero:any) {

   if(this.valor1==null){
    this.valor1 = numero
   }else{
    if(this.valor2==null){
      this.valor2=numero;
    }
   }
  
		console.log(this.valor1);
    console.log(this.operador);
      console.log(this.valor2);
	}
   
  operacao(operador:any){
    if(this.operador=='+'){
      this.resultado=this.valor1 + this.valor2;
    }
    else if(this.operador=='-'){
      this.resultado= this.valor1 - this.valor2;
    }
    else if(this.operador=='*'){
      this.resultado = this.valor1 * this.valor2;
    }
    else if(this.operador=='/'){
      this.resultado = this.valor1 / this.valor2;
    }
    console.log(this.operador);
  }

  
}
