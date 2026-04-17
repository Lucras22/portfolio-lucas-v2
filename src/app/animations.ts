import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
    ], { optional: true })
  ])
]);