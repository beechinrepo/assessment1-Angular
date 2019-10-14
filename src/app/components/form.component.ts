import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Itransaction } from '../models/transaction';
import { RegistrationService } from '../services/registration.service';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  registrationForm: FormGroup;

  todayDate = new Date();
  yearDate = new Date();

  countries: any;

  constructor(private formBuilder: FormBuilder, private rSvc: RegistrationService, 
    private tSvc: TransactionService, private router: Router) { 

    this.registrationForm = this.createFormGroup();


    }

  ngOnInit() {
    this.yearDate.setFullYear(this.todayDate.getFullYear() - 18);

    this.rSvc.getCountries().then((result) => { 
      console.log(result); 
      this.countries = result; 
    }).catch(
        () => { console.log('API Error');}
      ); 
  }

  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  createFormGroup() {
     return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      contact: new FormControl('', [Validators.required, Validators.pattern('^[\\d() +-]+$')]),  //need to change '^[8-9][0-9]{7}$'
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      dob: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    })
  }

  reset() {
    this.router.navigate(['']);
  }

  onSubmit() {
    const x = this.registrationForm.value;
    const Save: Itransaction = {
      name: x.name,
      contact: x.contact,
      gender: x.gender,
      email: x.email,
      password: x.password,
      dob: x.dob,
      address: x.address,
      country: x.country
    };
    this.tSvc.save(Save);
    this.router.navigate(['/submit']);
  }
}
