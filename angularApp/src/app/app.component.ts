import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mahendranath';
  displayVal='';
  function(name: any)
  {
    alert("function called succesfully via " + name);
  }

  getData(data:any)
  {
    console.warn("get data you get is " + data );
    this.displayVal=data;
  }


}
