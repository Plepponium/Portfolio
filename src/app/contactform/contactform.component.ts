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
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
