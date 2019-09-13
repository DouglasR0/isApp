import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ViewController } from '@ionic/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  constructor(
    private menuController: MenuController,
    private location: Location
  ) {}

  openMenu(): void {
    this.menuController.enable(true, 'custom');
    this.menuController.open('custom');
  }

  ngOnInit() {}

  get pagename(): string {
    return this.location.path();
  }
}
