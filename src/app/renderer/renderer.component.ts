import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {
  text = `Rendering the 3D view`;
  constructor() { }

  ngOnInit() {
  }

}