import {Component, OnInit} from '@angular/core';
import {SpaceService} from './space.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'space-travel-ui';
  spaceTravelForm: FormGroup;
  showSuccess = false;
  showError = false;
  successMessage = 'success message';
  errorMessage = 'error message';

  constructor(private spaceService: SpaceService) {  }

  ngOnInit() {
    this.spaceTravelForm = new FormGroup({
      pointA: new FormControl('', Validators.required),
      pointB: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.spaceTravelForm.controls;
  }

  onSubmit() {
    console.log('**************');
    console.log(this.spaceTravelForm);
    this.spaceService.getPath(this.spaceTravelForm.value.pointA.toUpperCase(), this.spaceTravelForm.value.pointB.toUpperCase())
      .subscribe(data => {
        console.log('###########');
        this.successMessage = data;
        this.showSuccess = true;
      });
  }

}
