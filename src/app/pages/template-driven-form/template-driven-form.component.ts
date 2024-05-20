import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  // templateData = 'Loading...';


  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
  isEmailInvalid(form: NgForm): boolean {
    const emailControl = form.controls['email'];
    return emailControl && emailControl.invalid && emailControl.touched;
  }

  isPasswordInvalid(form: NgForm): boolean {
    const passwordControl = form.controls['password'];
    return passwordControl && passwordControl.invalid && passwordControl.touched;
  }
  templateData(): string {
    let template = document.getElementById('templateForm')
    if (template && template.innerHTML
    ) {
      return template.innerHTML

    } else {
      return 'Loading....'
    }

  }
}
