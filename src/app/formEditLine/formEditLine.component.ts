import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formeditline',
  templateUrl: './formEditLine.component.html',
  styleUrls: ['./formEditLine.component.css']
})
export class FormEditLineComponent implements OnInit {

  constructor() { }

  @Input() commandLineToEdit;
  //@Input() clickToEdit: any ;
  @Output() clickToEdit = new EventEmitter();
  @Output() clickToModifyObject = new EventEmitter();
   CommanLine = {};
   nameCommanLine: string;
   comment: string;


  ngOnInit() {
    console.log(this.commandLineToEdit['Id']);
  }

  swichInterface() {
    this.clickToEdit.emit();
  }

  sendToModifyObject() {
      this.CommanLine['Id'] = this.commandLineToEdit['Id'];
      this.CommanLine['NameCommandLineToInsert'] = this.nameCommanLine;
      this.CommanLine['CommentToInsert'] = this.comment;
     // console.log(this.CommanLine);

      this.clickToModifyObject.emit(this.CommanLine);
  }

   changeName(event: any) {
      this.nameCommanLine = event.target.value;
   }

   changeComment(event: any) {
    this.comment = event.target.value;
 }

}
