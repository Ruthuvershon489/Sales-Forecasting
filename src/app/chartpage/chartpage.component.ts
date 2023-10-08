import { Component, OnInit, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chartpage',
  templateUrl: './chartpage.component.html',
  styleUrls: ['./chartpage.component.scss']
})
export class ChartpageComponent implements OnInit {
    chart: any;
    showChart: Boolean = false;
    dataPoints: any = [];

    constructor(private http: HttpClient) {}

    chartOptions = {
      animationEnabled: true,
      theme: 'light1',
      title: {
          text: 'Chart of future prediction',
      },
      axisX:{
        title: "Month-wise",
      },
      axisY:{
        title: "Sales of the American Vodkas",
      },
      data: [
          {
            //type: 'line',
            dataPoints: this.dataPoints,
          },
      ],
      };
      getChartInstance(chart: object) {
      this.chart = chart;
      }

ngOnInit(): void {
  this.http.get('/assets/prediction.csv', {responseType: 'text',}).subscribe((response: any) => {
    let csvRowData = response.split(/[\r?\n|\r|\n]+/);
    csvRowData.forEach((rowData: any, index: number) => {
      if (index == 0) return;
      var data = rowData.split(',');
      this.dataPoints.push({ label: data[0], y: parseInt(data[1]) });
    });
    this.showChart = true;
  });
}
}
