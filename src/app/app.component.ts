import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 items = ['Angular', 'React', 'Vue', 'Ember', 'Outro'];
 
 newItem ="";
 pushItem = function() {
   if(this.newItem != ""){
     this.items.push(this.newItem);
     this.newItem = "";
   }
 }

 removeItem = function(index) {
   this.items.splice(index, 1);
 }

}
