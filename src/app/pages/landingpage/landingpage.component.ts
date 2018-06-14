import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import { ITile } from '../../tile/tile.component';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  headerText: string;
  skillInformation: Array<ITile> = [
    {
      name: 'HTML',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'JS',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'React',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Angular',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Webpack',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'HTML',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'JS',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'React',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Angular',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Webpack',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    }
  ]
  constructor() {
    this.headerText = "We are learning";
  }
  

  ngOnInit() {
  }

}
