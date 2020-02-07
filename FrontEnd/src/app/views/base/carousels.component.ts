import {Component, OnDestroy, OnInit} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { FormBuilder} from '@angular/forms'
import { identity } from 'rxjs';
import {MiningZoneService} from '../base/mining-zone.service'


@Component({
  templateUrl: 'carousels.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class CarouselsComponent implements OnDestroy, OnInit {

  myInterval: number | false = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  searchForm;
  miningZones;

  constructor(
    private formBuilder: FormBuilder,
    private miningZoneService: MiningZoneService
    
  ) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }

    this.searchForm = this.formBuilder.group({
      id : '',
      name: '',
      oreType:''
    });

  }


  onSubmit(dados){
    console.log('dados: ', dados);
  }

  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

  ngOnInit(): void {
    this.miningZones = this.miningZoneService.getMiningZoneList();
    console.log('mining-zone', this.miningZones)
  }

  addSlide(): void {
    this.slides.push({
      image: `https://lorempixel.com/900/500/abstract/${this.slides.length % 8 + 1}/`
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

 

}
