import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-grupo08.component.html',
  styleUrls: ['./header-grupo08.component.scss'],
})
export class HeaderGRUPO08Component implements OnInit {
  @Input()
  title = 'A definir';
  @Input()
  route = 'inicio';
  @Input()
  color = 'dark';

  constructor() {}

  ngOnInit() {}
}
