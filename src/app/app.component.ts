import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
//from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'paginaDemo';
  //template : any;
  //template : any;
  @ViewChild('vartemp1', { static: true })
  template!: TemplateRef<any>;

  @ViewChild('vartemp1', { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;

  @ViewChild('myDiv', { static: true, read: ViewContainerRef })
  div!: ViewContainerRef;

  constructor(){

  }
  ngAfterViewInit(){
    console.log(this.template);
    console.log(this.container);
    this.container.createEmbeddedView(this.template)
    //this.div.createEmbeddedView(this.template)

  }
}
