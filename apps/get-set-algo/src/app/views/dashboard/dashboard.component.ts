import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidePanelItem } from '@get-set-algo/main-app/models/application/side-panel-item.model';
import { ApplicationStats } from '@get-set-algo/main-app/models/application/application-stats.model';

@Component({
  selector: 'gsa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sidePanelList: SidePanelItem[] = [
    {
      text: 'Algorithms',
      route: 'dashboard/algorithms-list',
      icon: 'fa-cubes',
      active: true
    },
    {
      text: 'Data Structures',
      route: '',
      icon: 'fa-stream',
      active: false
    },
    {
      text: 'Problems',
      route: '',
      icon: 'fa-question',
      active: false
    },
    {
      text: 'About',
      route: '',
      icon: 'fa-info-circle',
      active: false
    }
  ];

  applicationStats: ApplicationStats[] = [
    {
      text: 'Algorithm',
      value: 2
    },
    {
      text: 'Problems',
      value: 0
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  itemClicked(item: SidePanelItem) {
    this.sidePanelList.forEach((itm: SidePanelItem) => itm.active = false);
    item.active = true;

    // route to that item
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

}
