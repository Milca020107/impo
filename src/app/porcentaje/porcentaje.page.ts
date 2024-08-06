import { Component, OnInit } from '@angular/core';
//@ts-ignore
import fluidPlayer from 'fluid-player'; 
@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcentaje.page.html',
  styleUrls: ['./porcentaje.page.scss'],
})
export class PorcentajePage  {

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