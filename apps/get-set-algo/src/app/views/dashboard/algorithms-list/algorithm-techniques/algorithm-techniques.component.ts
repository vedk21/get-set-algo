import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gsa-algorithm-techniques',
  templateUrl: './algorithm-techniques.component.html',
  styleUrls: ['./algorithm-techniques.component.scss']
})
export class AlgorithmTechniquesComponent implements OnInit {

  algorithmType;

  algorithmsTechniquesList = [];

  constructor(
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // get type of algorithm
    this.algorithmType = this.activatedRoute.snapshot.params['type'];
    // select techniques according to algorith type
    this.selectTechniques(this.algorithmType);
  }

  selectTechniques(algorithmType) {
    switch (algorithmType) {
      case 'sorting':
        this.algorithmsTechniquesList = [
          {
            name: 'Bubble Sort',
            category: '',
            spaceComplexity: 'n',
            timeComplexity: 'n2'
          },
          {
            name: 'Selection Sort',
            category: '',
            spaceComplexity: 'n',
            timeComplexity: 'n2'
          }
        ];
        break;
      default:
        this.algorithmsTechniquesList = [];
    }
  }

}
