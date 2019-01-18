import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

	images=['./assets/Natural1.jpeg','./assets/Natural2.jpeg',
	'./assets/Natural3.jpeg','./assets/Natural4.jpeg',
	'./assets/Natural5.jpeg','./assets/Natural3.jpeg',
	'./assets/Natural1.jpeg'];
  constructor(){ }

  ngOnInit() {
  }

}
