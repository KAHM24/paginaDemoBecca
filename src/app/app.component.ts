import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
//from '@angular/core';
import{ HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'paginaDemo';

  readonly ROOT_URL = 'http://51.75.55.74:44393/api/configuracion/ListarPaises';
  //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/todos/';


  // getListaDePaises(): Observable<City[]>{

  // }
  @ViewChild('vartemp1', { static: true })
  template!: TemplateRef<any>;

  @ViewChild('vartemp1', { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;

  @ViewChild('myDiv', { static: true, read: ViewContainerRef })
  div!: ViewContainerRef;

  constructor(public http: HttpClient) {}

  posts!: Observable<any>;

  getPosts(){
    let params = new HttpParams().set('userId','');
    this.posts = this.http.get(this.ROOT_URL);
  }

  ngAfterViewInit(){
    console.log(this.template);
    console.log(this.container);
    this.container.createEmbeddedView(this.template)
    //this.div.createEmbeddedView(this.template)

  }
}
