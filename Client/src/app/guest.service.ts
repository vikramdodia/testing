import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(public http:HttpClient) { }

  getMessage(){
  	return this.http.get("https://my.api.mockaroo.com/adminmessage.json?key=89789620");
  }
  addData(body)
  {
  	return this.http.post("https://my.api.mockaroo.com/contactus.json?key=89789620&__method=POST",body);
  }
}
