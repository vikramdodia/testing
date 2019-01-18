import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-introhome',
  templateUrl: './introhome.component.html',
  styleUrls: ['./introhome.component.css']
})
export class IntrohomeComponent implements OnInit {

  constructor(public _guestServise:GuestService) { }

  message:any;
  ngOnInit() {
  	this.getMessage()
  }
  	getMessage(){
  		this._guestServise.getMessage().subscribe(response =>{
  			this.message=response[0].message;

  		});err=>{
  			console.log(err);
  		}
  	}
  }