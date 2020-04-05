import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlgorithmTechnique } from '@get-set-algo/main-app/models/application/algorithm-technique.model';

@Component({
  selector: 'gsa-algorithm-techniques',
  templateUrl: './algorithm-techniques.component.html',
  styleUrls: ['./algorithm-techniques.component.scss']
})
export class AlgorithmTechniquesComponent implements OnInit {

  algorithmType;

  algorithmsTechniquesList: AlgorithmTechnique[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router
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
            id: 'bubble-sort',
            name: 'Bubble Sort',
            category: '',
            spaceComplexity: 'n',
            timeComplexity: 'n2'
          },
          {
            id: 'selection-sort',
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

  techniqueClicked(technique) {
    this.router.navigate(['algorithm-content', technique.id], {relativeTo: this.activatedRoute});
  }

}
