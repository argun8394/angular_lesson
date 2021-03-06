import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;//@ViewChild('') metodu ile formu isimlendirerek onsubmit() metodunda aşağıda ki gibi kullanabiliriz kullanabiliriz ayrıca bu metodta HTMl de  onSubmit() içine f(yani lokal ref yazılmaz)  --> [2]
  defaultQuestion='pet';
  answer='';
  genders= ['male', 'female'];
  user= {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',
  }
  submitted= false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   answerQuestion:'',
    //   gender: 'male'
    // })
    this.signUpForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
  }

  // onSubmit(form:NgForm) {// [1]
  //   console.log(form);
  // }

  onSubmit(){//--> [2]
   // console.log(this.signUpForm)
   this.submitted=true;
   this.user.username=this.signUpForm.value.userData.username;
   this.user.email=this.signUpForm.value.userData.email;
   this.user.secret=this.signUpForm.value.secret;
   this.user.answer=this.signUpForm.value.answerQuestion;
   this.user.gender=this.signUpForm.value.gender;

   this.signUpForm.reset();//form submit edildiğinde resetlenecek
  }
}
