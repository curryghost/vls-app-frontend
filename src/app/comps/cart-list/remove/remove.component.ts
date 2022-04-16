import { Component, Input, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
  
})
export class RemoveComponent implements OnInit {
  @Input() courseId: any;

  constructor(private state: StateService) { }

  ngOnInit(): void {
  }

  remove(){
    this.state.removeItem(this.courseId);
  }
}
