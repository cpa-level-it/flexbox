import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  footerItems: ListItem[];
  menuItems: ListItem[];
  mainContentItems: ListItem[];

  public constructor() {
    this.footerItems = this.generateItems(50);
    this.menuItems = this.generateItems(75);
    this.mainContentItems = this.generateItems(47);
  }

  private generateItems(count: number) : ListItem[] {
    let item = [];

    for(var i = 0; i < count; i++)
      item.push(new ListItem('Item ' + i));

    return item;
  }

}


export class ListItem {
  public constructor(public id) {

  }
}