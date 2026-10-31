import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  @Input({ required: true }) name!: string;
}
