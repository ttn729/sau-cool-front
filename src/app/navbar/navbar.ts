import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    private readonly keycloak = inject(Keycloak);
    isLoggedIn = signal(this.keycloak.authenticated)

  login() {
    this.keycloak.login();
  }

  logout() {
    this.keycloak.logout();
  }
}
