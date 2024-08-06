import { Component, OnInit } from '@angular/core';
//@ts-ignore
import fluidPlayer from 'fluid-player'; 
@Component({
  selector: 'app-inversa',
  templateUrl: './inversa.page.html',
  styleUrls: ['./inversa.page.scss'],
})
export class InversaPage {

  constructor() { }

  ionViewDidLoad(){
    var player = fluidPlayer('fp_docs_player_0', {
      layoutControls:{
        primaryColor: "#28B8ED",
        allowDownload: true,
       
      miniPlayer: {
        enabled:true,
        width: 400,
        height: 225,
        widthMobile: 40,
        placeHolderText: 'Playing in miniPlayer',
        position: 'bottom right',
        autoToggle: false,
  
      }
      } })
  
  }

}