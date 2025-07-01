import { Component, OnInit } from '@angular/core';
import { inject as VercelWebAnalytics } from '@vercel/analytics'
import { injectSpeedInsights as VercelSpeedInsights } from '@vercel/speed-insights';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  ngOnInit(): void {
    VercelWebAnalytics();
    VercelSpeedInsights();
  }

}
