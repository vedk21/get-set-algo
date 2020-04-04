import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gsa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list = [
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
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  itemClicked(item) {
    this.list.forEach(itm => itm.active = false);
    item.active = true;

    // route to that item
    this.router.navigate([item.route]);
  }

}
