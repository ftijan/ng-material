import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() notes: Note[] = [];
  
  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource!: MatTableDataSource<Note>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  // fix for issue with missing data on item selection change
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Note>(<Note[]>(changes['notes'].currentValue || []));
  }
}
