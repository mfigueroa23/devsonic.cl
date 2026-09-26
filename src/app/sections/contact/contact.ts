import { Component, signal } from '@angular/core';
import { Button } from '../../components/button/button';

const email = 'mfigueroa@devsonic.cl';

@Component({
  imports: [Button],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  public contactInfo: { icon: string; label: string; value: string; href: string }[] = [
    { icon: 'fa-solid fa-envelope', label: 'Email', value: email, href: `mailto:${email}` },
    {
      icon: 'fa-solid fa-phone',
      label: 'Phone',
      value: '+56 9 5195 9027',
      href: 'tel:+56951959027',
    },
    {
      icon: 'fa-solid fa-location-dot',
      label: 'Location',
      value: 'Santiago, Chile',
      href: '/#contact',
    },
  ];
  public readonly name = signal('');
  public readonly email = signal('');
  public readonly message = signal('');
  public readonly isSent = signal(false);
  public onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${this.name()}`);
    const body = encodeURIComponent(`${this.message()}\n\n${this.name()} <${this.email()}>`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    this.isSent.set(true);
  }
}
