import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoriteComponent } from '../favorite/favorite.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, FavoriteComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  closeSidebar: boolean = true;
  favorite: boolean = true;
  openbtn() {
    const aside = document.querySelector('.aside');
    aside?.classList.add('show-aside');
  }

  closebtn() {
    const aside = document.querySelector('.aside');
    console.log(aside);
    aside?.classList.add('hide-aside');
    aside?.classList.remove('show-aside');
  }

  sidebarclose() {
    console.log(this.closeSidebar);
    this.closeSidebar = !this.closeSidebar;
    const aside = document.querySelector('.aside');
    aside?.classList.remove('show-aside');
  }

  favoriteTogle() {
    console.log((this.favorite = !this.favorite));
  }
}
