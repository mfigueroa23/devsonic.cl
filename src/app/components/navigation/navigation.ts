import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  imports: [Button],
  selector: 'app-navigation',
  styleUrl: './navigation.css',
  templateUrl: './navigation.html',
})
export class Navigation {
  public navLinks: { href: string; label: string }[] = [
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#education', label: 'Education' },
    { href: '/#testimonials', label: 'Testimonials' },
  ];
}
