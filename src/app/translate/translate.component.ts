import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility/utility.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  constructor(public utility: UtilityService) { }

  ngOnInit(): void {
  }

  translate(event: any) {
    
  }
}
