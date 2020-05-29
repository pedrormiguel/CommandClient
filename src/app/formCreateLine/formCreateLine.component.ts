import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-formcreateline',
  templateUrl: './formCreateLine.component.html',
  styleUrls: ['./formCreateLine.component.css']
})
export class FormCreateLineComponent implements OnInit {

  constructor(private formbuilder: FormsModule, private service: AuthService) { }

  modelLine: any = {};
  output: any;

  ngOnInit() {
  }

  registerAnLine() {
     this.output = this.service.post('write', this.modelLine).subscribe();
     this.modelLine = {};
     //alert('done');
    }


}
