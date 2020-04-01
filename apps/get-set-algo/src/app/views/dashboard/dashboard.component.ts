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
      text: 'bubble sort',
      route: 'dashboard/algorithms/sorting/bubble_sort',
      active: true
    },
    {
      text: 'selection sort',
      route: 'dashboard/algorithms/sorting/selection_sort',
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
