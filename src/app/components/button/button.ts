import { Component, computed, input } from '@angular/core';

const base: string =
  'relative overflow-hidden rounded-full font-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25';

const sizes = {
  sm: 'px-4 py-2 text-sm',
  default: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

type Size = keyof typeof sizes;

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  public readonly size = input<Size>('default');
  public readonly extraClass = input<string>('');

  protected readonly styles = computed(() =>
    `${base} ${sizes[this.size()]} ${this.extraClass()}`.trim(),
  );
}
