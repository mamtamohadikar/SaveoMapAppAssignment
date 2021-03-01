import { Component } from '@angular/core';
import { LocationDetails } from 'src/interfaces/global.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mapApp';
  lat = 18.520430;
  lng = 73.856743;
  origin;
  destination;
  waypoints = [];

  locationList : LocationDetails[] = [];
  addLocations : LocationDetails[] = [];

  inputLocationName: string;
  inputLat:string;
  inputLon: string;

  public onHomeClick(){

  }

  public onSubmitCity(){
    this.addLocations.push(<LocationDetails>{
      locationName : this.inputLocationName,
      locationLat : parseFloat(this.inputLat),
      locationLon : parseFloat(this.inputLon)
    });
    this.inputLocationName = '';
    this.inputLat = '';
    this.inputLon = '';
  }

  public onShowResult(){
   
    this.locationList = [...this.addLocations];
  }
}
