import { Component } from "@angular/core";
import { CommonModule } from '@angular/common'
import { MovieComponent } from "../movie/movie.component";

@Component({
   selector:'movies',
   standalone: true,
   templateUrl:'movies.component.html',
   imports: [CommonModule,MovieComponent],

})

 
export class MoviesComponent{

}