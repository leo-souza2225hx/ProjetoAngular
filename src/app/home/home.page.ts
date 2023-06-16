import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,FormsModule]
})
export class HomePage {
  
  //valores

 valor1:string = '';
 valor2:string = '';
 resultado:any='';
 operador:any=null;

etapa1:any=true
  
  exibir(numero:string) {
 
   if(this.etapa1==true){
    this.valor1 += numero
    this.resultado += numero
   }else{   
      this.valor2+=numero;
      this.resultado += numero
   }
  //mostrar no console
		console.log(this.valor1);
    console.log(this.operador);
      console.log(this.valor2);
	}

  operacao(operador:any){
    this.operador=operador
    this.etapa1=false
  }
   
  calcular(){
    //operações logicas
    if(this.operador=='+'){
      this.resultado=Number(this.valor1) + Number(this.valor2);
    }
    else if(this.operador=='-'){
      this.resultado= Number(this.valor1) - Number(this.valor2);
    }
    else if(this.operador=='*'){
      this.resultado = Number(this.valor1) * Number(this.valor2);
    }
    else if(this.operador=='/'){
      this.resultado = Number(this.valor1) / Number(this.valor2);
    }
    console.log(this.operador);
  }

  deleteDigit() {
   if (this.valor1 != null && this.valor2==null){
      this.valor1=''
      this.resultado=''
   }
   if (this.valor1 != null && this.valor2 !=null){
    this.valor2=''
    this.resultado=''
 }
  }
  clear(){
    this.valor1=''
    this.valor2=''
    this.resultado=''
    this.operador=null
  }

}




