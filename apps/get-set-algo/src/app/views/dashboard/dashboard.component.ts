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
      route: 'dashboard/algorithms/sorting/bubble_sort',
      icon: 'fa-cubes',
      active: true
    },
    {
      text: 'Problems',
      route: 'dashboard/algorithms/sorting/selection_sort',
      icon: 'fa-question',
      active: false
    },
    {
      text: 'About',
      route: 'dashboard/algorithms/sorting/selection_sort',
      icon: 'fa-info-circle',
      active: false
    }
  ];

  applicationStats: ApplicationStats[] = [
    {
      text: 'Algorithm',
      value: 10
    },
    {
      text: 'Problems',
      value: 43
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
    this.router.navigate([item.route]);
  }

}
