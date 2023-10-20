import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ParentToChildCommunication';

   // This is the parent component
   parentData = 'I am from parent component';

   // Parent to Child Communication
   // Step 1: Create a variable in the parent component.
   // For example: parentData = 'This is the data from parent component';
 
   // Step 2: Create a parameter in the parent's HTML tag holding the parent component variable
   // For example: <app-child [dataFromParentVariable]="parentData"></app-child>
 
   // Step 3: Create a variable in the child component with the same name as the parent's HTML tag parameter
   // For example: @Input() dataFromParentVariable = '';
 
   // Step 4: Create a parameter in the child's HTML tag holding the child component variable  
   // For example: <p>{{ dataFromParentVariable }}</p> 
 
   userObj = {
     name: 'John Doe',
     age: 30,
     message: 'This is the data from parent component'
   };
 
   getData() {
     return this.userObj;
   }
}
