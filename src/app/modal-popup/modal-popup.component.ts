import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {

  constructor() { }
  @Input() popupmessage: any;
  ngOnInit() {
    console.log(this.popupmessage)
  }

}
