import { Component, OnInit } from '@angular/core';
import { AlgorithmCard } from '@get-set-algo/main-app/models/application/algorithm-card.model';

@Component({
  selector: 'gsa-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit {

  algorithmsList: AlgorithmCard[] = [
    {
      name: 'Sorting',
      category: 'Linear',
      problems: 2,
      icon: 'fas fa-boxes'
    },
    {
      name: 'Searching',
      category: 'Linear',
      problems: 0,
      icon: 'fab fa-searchengin'
    },
    {
      name: 'Selection',
      category: 'Linear',
      problems: 0,
      icon: 'fas fa-vote-yea'
    },
    {
      name: 'Tree Traversal',
      category: 'Non-Linear',
      problems: 0,
      icon: 'fas fa-network-wired'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
