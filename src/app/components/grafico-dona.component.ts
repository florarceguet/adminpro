import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {

@Input() doughnutChartData:string[];
@Input() doughnutChartLabels:number[];
@Input() doughnutChartType:string;


  constructor() { }

  ngOnInit() {
    console.log(this.doughnutChartType)
  }
// events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
