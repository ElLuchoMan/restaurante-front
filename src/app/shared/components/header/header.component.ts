import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLink } from '../../models/NavLink.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navLinks: NavLink[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Login', path: '/' }
  ];
}
