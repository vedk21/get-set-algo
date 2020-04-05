import { Component, OnInit } from '@angular/core';
import { AlgorithmCard } from '@get-set-algo/main-app/models/application/algorithm-card.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gsa-algorithms-list',
  templateUrl: './algorithms-list.component.html',
  styleUrls: ['./algorithms-list.component.scss']
})
export class AlgorithmsListComponent implements OnInit {

  algorithmsList: AlgorithmCard[] = [
    {
      id: 'sorting',
      name: 'Sorting',
      category: 'Linear',
      problems: 2,
      icon: 'fas fa-boxes'
    },
    {
      id: 'searching',
      name: 'Searching',
      category: 'Linear',
      problems: 0,
      icon: 'fab fa-searchengin'
    },
    {
      id: 'selection',
      name: 'Selection',
      category: 'Linear',
      problems: 0,
      icon: 'fas fa-vote-yea'
    },
    {
      id: 'tree-traversal',
      name: 'Tree Traversal',
      category: 'Non-Linear',
      problems: 0,
      icon: 'fas fa-network-wired'
    }
  ];

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  algorithmClicked(algorithm) {
    this.router.navigate(['algorithm-techniques', algorithm.id], {relativeTo: this.activatedRoute});
  }

}
