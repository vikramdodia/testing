import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	details={Name:"",Email:"",Phone:"",Message:""};
  constructor(public _guestPost:GuestService) { }

  addData(){

    if (this.details.Name=="") { alert("Enter Name")}
    if (this.details.Email.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/))
      { alert("Enter Email")}
    if (this.details.Phone=="") 
      { alert("Enter Phone")}
    if (this.details.Message=="")
     { alert("Enter Message")}

   	this._guestPost.addData(this.details).subscribe(res=>{
  		console.log("RESPONSE++++++++++",res);
  	},Error=>{
  		console.log("Error-------",Error);
  	})
 }

  ngOnInit() {
  }


}
