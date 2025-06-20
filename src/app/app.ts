import { Component, OnInit } from '@angular/core';
import { inject as WebAnalytics } from '@vercel/analytics'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  ngOnInit(): void {
    WebAnalytics(); // Vercel Web Analytics
  }

}
