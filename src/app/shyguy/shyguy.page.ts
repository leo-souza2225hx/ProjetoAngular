import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-shyguy',
  templateUrl: './shyguy.page.html',
  styleUrls: ['./shyguy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShyguyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
