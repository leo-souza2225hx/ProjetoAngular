import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mario',
  templateUrl: './mario.page.html',
  styleUrls: ['./mario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class MarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
