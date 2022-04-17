import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
  
})
export class RemoveComponent implements OnInit {
  @Input() courseId: any;

  constructor(private state: StateService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  remove(){
    this.state.removeItem(this.courseId);
    this.snackbar.open('Item removed', 'close', {duration: 2000})
  }
}
