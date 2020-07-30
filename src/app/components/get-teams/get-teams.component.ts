import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-get-teams',
  templateUrl: './get-teams.component.html',
  styleUrls: ['./get-teams.component.scss', './../../common/style.scss'],
})
export class GetTeamsComponent implements OnInit {
  // championshipList: championship[] = championship;
  products: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //subscribing to the service
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}