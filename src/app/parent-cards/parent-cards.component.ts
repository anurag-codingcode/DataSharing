import { Component} from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-parent-cards',
  templateUrl: './parent-cards.component.html',
  styleUrls: ['./parent-cards.component.scss']
})
export class ParentCardsComponent {
  notes:any[]=[]
  constructor(private http:HttpService){
    this.http.getAll().subscribe({
      next:(res:any)=>{
        this.notes=res.data.data
        console.log("res",res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })

  }
  handleClick($event:any){
    this.notes=this.notes.filter((note)=>note.id!==$event)

  }
 
}
