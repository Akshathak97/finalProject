import { Component, OnInit } from '@angular/core';
import { CustommanterialModule } from 'src/app/custommaterial.module';
import {MatCardModule} from '@angular/material/card';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

 
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
