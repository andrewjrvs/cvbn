import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation: AnimationTriggerMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
        animate('0.5s ease-out'),
        style({
            opacity: 0,
            transform: 'translateY(-100%)'
        })
    ])
  ]);
