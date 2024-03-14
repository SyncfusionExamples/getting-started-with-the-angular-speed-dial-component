import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SpeedDialModule, SpeedDialItemModel, RadialSettingsModel, 
SpeedDialItemEventArgs } from '@syncfusion/ej2-angular-buttons';
import { GridModule, EditService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SpeedDialModule, GridModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [EditService]
})
export class AppComponent {
  title = 'example';
  public editSettings = { allowAdding: true, mode: 'Dialog'};
  public radialSettings:RadialSettingsModel = { direction: "AntiClockwise", offset: "50px"};
  @ViewChild('gridObj') public grid: GridComponent | any;
  public clicked(args: SpeedDialItemEventArgs)
  {
    if(args.item.title === "Add")
    {
      this.grid.addRecord();
    }
  }
  public items: SpeedDialItemModel[] = [
    { title: 'Add', iconCss: "e-icons e-plus"},
    { title: 'Edit', iconCss: "e-icons e-edit"},
    { title: 'Delete', iconCss: "e-icons e-delete"}
  ]
  public data = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38 
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61 
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83 
    },
    {
      OrderID: 10251, CustomerID: 'BENTT', EmployeeID: 2, ShipCountry: 'France', Freight: 32.38 
    },
    {
      OrderID: 10252, CustomerID: 'SUSAN', EmployeeID: 3, ShipCountry: 'Germany', Freight: 11.61 
    },
    {
      OrderID: 10253, CustomerID: 'LINDA', EmployeeID: 7, ShipCountry: 'Brazil', Freight: 65.83 
    },
    {
      OrderID: 10254, CustomerID: 'MILLER', EmployeeID: 8, ShipCountry: 'France', Freight: 32.38 
    },
    {
      OrderID: 10255, CustomerID: 'BROWN', EmployeeID: 9, ShipCountry: 'Germany', Freight: 11.61 
    },
    {
      OrderID: 10256, CustomerID: 'DOE', EmployeeID: 11, ShipCountry: 'Brazil', Freight: 65.83 
    }
  ];
}
