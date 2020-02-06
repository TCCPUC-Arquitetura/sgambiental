import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder

  ) {


    this.checkoutForm = this.formBuilder.group({
      id: '',
      name: '',
      location: '',
      oreType: '',
      mining: '',
      area: '',
      processType: ''

      
    });
  

   }


   onSubmit(customerData) {
    // Process checkout data here
    console.warn('Dados:', customerData);

  }

  reset(){
    this.checkoutForm.reset();
  }

}
