import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private hedaerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.hedaerService.headerData.title
  }

  get icon(): string {
    return this.hedaerService.headerData.icon
  }

  get routeUrl(): string {
    return this.hedaerService.headerData.routeUrl
  }

}
