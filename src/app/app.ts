import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject as VercelWebAnalytics } from '@vercel/analytics'
import { injectSpeedInsights as VercelSpeedInsights } from '@vercel/speed-insights';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  public ngOnInit(): void {
    VercelWebAnalytics();
    VercelSpeedInsights();
  }

  public menuDropdown(): void {
    const mobileMenu: Element | null = document.querySelector('.mobile-menu');
    const menuButton: Element | null = document.getElementsByTagName('i')[0]
    if(mobileMenu) mobileMenu.classList.toggle('hidden');
    if(menuButton) menuButton.classList.contains('fa-bars') ? menuButton.classList.replace('fa-bars', 'fa-xmark') : menuButton.classList.replace('fa-xmark', 'fa-bars');
  }

}
