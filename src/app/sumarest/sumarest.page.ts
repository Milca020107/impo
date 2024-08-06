import { Component, OnInit } from '@angular/core';
//@ts-ignore
import fluidPlayer from 'fluid-player'; 
@Component({
  selector: 'app-sumarest',
  templateUrl: './sumarest.page.html',
  styleUrls: ['./sumarest.page.scss'],
})
export class SumarestPage  {

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
