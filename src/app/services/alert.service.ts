import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private snackbar: MatSnackBar) { }

  success(message: string) {
    this.snackbar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: 'alert-success'
    });
  }
  error(message: string) {
    this.snackbar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: 'alert-error'
    });
  }
}
