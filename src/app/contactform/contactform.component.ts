import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, RouterLink],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }

  nameTouched = {
    name: false,
    email: false,
    message: false
  };

  markAsTouched(field: keyof typeof this.nameTouched) {
    this.nameTouched[field] = true;
  }

  mailTest = true;

  post = {
    endPoint: 'https://akleinschmidt.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'text' as const
    }
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && !this.mailTest) {
      this.http.post(
        this.post.endPoint,
        this.post.body(this.contactData),
        this.post.options
      ).subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.nameTouched = { name: false, email: false, message: false };
        },
        error: (error) => {
          console.error('Senden fehlgeschlagen:', error);
        },
        complete: () => {
          console.info('Send POST complete');
        }
      });
    } else if (ngForm.valid && this.mailTest) {
      console.info('MailTest aktiviert – keine E-Mail gesendet');
      ngForm.resetForm();
      this.nameTouched = { name: false, email: false, message: false };
    }
  }

}
