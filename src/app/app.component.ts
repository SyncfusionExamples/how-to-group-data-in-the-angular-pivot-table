import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PivotViewModule,IDataOptions, IDataSet, GroupingBarService, GroupingService } from '@syncfusion/ej2-angular-pivotview';
declare var require: any;
let data: any = require('./gData.json');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PivotViewModule ],
  providers: [GroupingBarService, GroupingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example';
 
  public dataSourceSettings: IDataOptions | undefined;
  ngOnInit(): void {
     this.dataSourceSettings = {
        dataSource: data as IDataSet[],
        rows: [
          { name: 'Products', caption: 'Products'},
          //{ name: 'Date', caption: 'Date' }
        ],
        columns: [
          { name: 'Product_ID', caption: 'Product ID' },
          { name: 'Products', caption: 'Products' }],
        values: [
          { name: 'Sold', caption: 'Unit Sold' },
          { name: 'Amount', caption: 'Sold Amount' }],
        formatSettings: [
          { name: 'Amount', format: 'C0' },
          { name: 'Sold', format: 'N0' },
          { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }
        ],
        groupSettings: [
          { name: 'Products', type: 'Custom', 
            customGroups: [{ groupName: 'Products-3',
             items: ['Gloves','Jerseys','Shorts']}] }
        ]
    };
}
}