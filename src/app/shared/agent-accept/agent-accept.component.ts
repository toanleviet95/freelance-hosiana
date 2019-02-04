import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface DialogData {
  content: string;
  image: object;
}
@Component({
  selector: 'app-agent-accept',
  templateUrl: './agent-accept.component.html',
  styleUrls: ['./agent-accept.component.scss'],
})
export class AgentAcceptComponent {
  @Input()
  image;
  @Input()
  user;
  constructor(public activeModal: NgbActiveModal) {}

  onNoClick(): void {}
}
