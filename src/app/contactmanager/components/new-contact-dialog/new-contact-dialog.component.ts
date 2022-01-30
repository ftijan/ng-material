import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  avatars = [
    'svg-1',
    'svg-2',
    'svg-3',
    'svg-4',
  ];

  user!: User;
  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user).subscribe({
      next: () => this.dialogRef.close(this.user),
      error: () => console.log('Error saving new user')
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
