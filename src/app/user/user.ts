import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  // decorator approach
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // signal approach - more efficient
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  get imagePath() {
    return 'users/' + this.avatar;
  }

  // signal approach - more efficient
  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.id);
    // for signals - even though output is not really a signal - just an event emitter
    // this.select.emit(this.id);
  }
}
