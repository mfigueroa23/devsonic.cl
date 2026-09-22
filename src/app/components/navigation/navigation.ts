import { Component, computed, signal } from '@angular/core';
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
    { href: '/#testimonials', label: 'Testimonials' },
  ];
  public readonly isMobileMenuOpen = signal(false);
  public readonly mobileIcon = computed(
    () => `fa-solid fa-${this.isMobileMenuOpen() ? 'x' : 'bars'} fa-xl`,
  );
  public showMenu = (): void => {
    this.isMobileMenuOpen.update((open) => !open);
  };
}
