import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})

export class VistaComponent implements OnInit {

  constructor(private httpClient: AuthService) { }

  commandLines = new Array<string>();
  commandId: any = {};
  p: any;
  public OnModeVista = true;
  public objectSelectedToEdit: any;
  public isEmptyCommandLines: boolean;

  ngOnInit() {
    this.getCommanLines();
  }

  getCommanLines() {
    this.httpClient.get('readjson').subscribe( (comm) => {
       this.updateRemove(comm);
    });
  }

  swichInterface(objectSelect?: any) {
    this.OnModeVista = !this.OnModeVista;
    this.objectSelectedToEdit = objectSelect ;
  }

  deleteCommanLine(Object: any) {

    this.commandId.Id = Object.Id.toString();
    let element = new Array<string>();

    this.httpClient.delete('delete', this.commandId).subscribe( );

    this.commandLines.forEach((item, index) => {
        if (item !== Object) {
          element.push(item);
        }
    });

    this.commandLines = element;
    console.log(this.commandLines);
  }

  updateRemove(object: any) {

      // for (let index = 0; index < object.length; index++) {
      //   this.commandLines.push(object[index]);
      // }
      if (object != null && object.length > 0) {
        object.forEach(element =>  this.commandLines.push(element) );
        this.isEmptyCommandLines = false ;
      } else {  this.isEmptyCommandLines = true; }


      console.log(this.commandLines);
  }

  UpdateCommandLine(object: any) {
    // console.log(object);
    this.httpClient.put('modifyLine', object).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
