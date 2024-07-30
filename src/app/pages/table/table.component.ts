import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
myDataArray: any;

}
