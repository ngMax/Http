import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  items:any[]=[];
  
  constructor(private httpservice:HttpService){}
  ngOnInit(){
    this.httpservice.getData()
          .subscribe(
            //(data:Response)=>console.log(data.json())
            (data:any) => console.log(data)
          );
  }
  asyncString=this.httpservice.getData();
  onSubmit(username:string, email:string){
    this.httpservice.sendUser({username:username, email:email})
            .subscribe(
              (data:any) => console.log(data)
            );
  }

  onGetData(){
    this.httpservice.getUserData()
          .subscribe(
             (data:any) => {
               const myArray=[];
               for (let key in data){
                 myArray.push(data[key]);
               }
               this.items=myArray;
             } 
          );
  }
}
