import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-get-teams',
  templateUrl: './get-teams.component.html',
  styleUrls: ['./get-teams.component.scss'],
})
export class GetTeamsComponent implements OnInit {
  // championshipList: championship[] = championship;
  products: string[] = [];
  getTeams: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //subscribing to the service
    let observer = {
      next: function (val) {
        return val;
      },
      error: function (error) {
        console.log('Error:', error);
      },
      complete: () => console.log('completed'),
    };

    this.getTeams = this.dataService
      .sendGetRequest()
      .subscribe((data: any[]) => {
        this.products = data;
      });
  }
  ngOnDestroy(): void {
    this.getTeams.unsubscribe();
  }
}
