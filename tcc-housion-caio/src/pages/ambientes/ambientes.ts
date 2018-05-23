import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AmbientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 
 */

 
@IonicPage()
@Component({
  selector: 'page-ambientes',
  templateUrl: 'ambientes.html',
  
})
export class AmbientesPage {
  public dados_ambiente = {
    title: "assets/imgs/170.png",
    ambiente:
    [
      {
        nome:"",
        temperatura: 20,
        umidade:70,
        qttdPortasAbertas:0,
        qttdPortasFechadas:10,
        componente:[
          {
            
            srcImg:"",
            subtitleCard:"",
            titleCard:"",
            status:0,
            color:"#ff0000"
      
          }],
      }
    ],
    
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
    // dados que iram vir do banco
    this.dados_ambiente.ambiente[0].componente[0].titleCard = "Luzes do Escritório"
    this.dados_ambiente.ambiente[0].nome = "Sala";
    this.dados_ambiente.ambiente[0].temperatura = 20;
    this.dados_ambiente.ambiente[0].umidade = 80;
    this.dados_ambiente.ambiente[0].qttdPortasAbertas = 1;
    this.dados_ambiente.ambiente[0].qttdPortasFechadas = 7;
    this.dados_ambiente.ambiente[0].componente[0].srcImg = "assets/imgs/luzes.jpeg";
    if(this.dados_ambiente.ambiente[0].componente[0].status = 0)
    {
      this.dados_ambiente.ambiente[0].componente[0].subtitleCard = "Desativado";
      this.dados_ambiente.ambiente[0].componente[0].color = "#ff0000";
    }else
    {
      this.dados_ambiente.ambiente[0].componente[0].subtitleCard = "Ativado";
      this.dados_ambiente.ambiente[0].componente[0].color = "#00ff00";
    };


   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmbientesPage');
    
  }

}
