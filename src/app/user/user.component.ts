import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  // decorator approach
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  // signal approach - more efficient
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  // signal approach - more efficient
  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
    // for signals - even though output is not really a signal - just an event emitter
    // this.select.emit(this.id);
  }
}
