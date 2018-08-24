import { Menu } from './menu';
import { trigger, transition, style, animate, state } from '@angular/animations';

export const MainMenus: Menu[] = [
  { id: 1, title: 'Blueprint Process', sub_title: '' },
  { id: 2, title: 'Leverage Relation', sub_title: '' },
  { id: 3, title: 'Mapping It Out', sub_title: '' },
  { id: 4, title: 'Proactive Service', sub_title: '' },
  { id: 5, title: 'Prospecting', sub_title: '' },
  { id: 6, title: 'The Truth', sub_title: '' },

];

export const Animation_for_4_Shapes =
[
  trigger(
    'enterAnimation-0', [
      state('void', style({ transform: 'translateX(-90%)' })),
      state('0', style({ transform: 'translateX(0)' })),
      state('1', style({ transform: 'translateX(-90%)' })),
      state('2', style({ transform: 'translateX(-130%)' })),
      state('3', style({ transform: 'translateX(-200%)' })),
      transition('void <=> 0', animate('500ms ease-out')),
      transition('1 <=> 2', animate('500ms ease-out')),
      transition('1 <=> 0', animate('500ms ease-out')),
      transition('2 <=> 0', animate('500ms ease-out')),
      transition('0 <=> 3', animate('500ms ease-out')),
      transition('1 <=> 3', animate('500ms ease-out')),
      transition('2 <=> 3', animate('500ms ease-out')),
    ]
  ),
  trigger(
    'enterAnimation-1', [
      state('void', style({ transform: 'translateX(0) rotate(-360deg)', opacity: 0 })),
      state('1', style({ transform: 'translateX(100%) rotate(45deg)' })),
      state('2', style({ transform: 'translateX(0) rotate(45deg)' })),
      state('3', style({ transform: 'translateX(-90%) rotate(45deg)' })),

      transition('1 <=> void', animate('500ms ease-out')),
      transition('1 <=> 2', animate('500ms ease-out')),
      transition('1 <=> 3', animate('500ms ease-out')),
      transition('2 <=> 3', animate('500ms ease-out')),
    ]
  ),
  trigger(
    'enterAnimation-2', [
      state('void', style({ transform: 'translateX(0%) rotate(-360deg)', opacity: 0 })),
      state('2', style({ transform: 'translateX(170%) rotate(45deg)' })),
      state('3', style({ transform: 'translateX(90%) rotate(45deg)' })),
      transition('2 <=> void', animate('500ms ease-out')),
      transition('2 <=> 3', animate('500ms ease-out')),
    ]
  ),
  trigger(
    'enterAnimation-3', [
      state('void', style({ transform: 'translateX(0%) rotate(-360deg)', opacity: 0 })),
      state('3', style({ transform: 'translateX(260%) rotate(45deg)' })),
      transition('3 <=> void', animate('500ms ease-out')),
    ]
  ),
  trigger(
    'enterAnimation-arrow-0', [
      state('void', style({ transform: 'translateX(0)', opacity: 0 })),
      state('1', style({ transform: 'translateX(0)' })),
      state('2', style({ transform: 'translateX(-300%)' })),
      state('3', style({ transform: 'translateX(-630%)' })),
      transition('1 <=> void', animate('500ms ease-out')),
      transition('1 <=> 2', animate('500ms ease-out')),
      transition('1 <=> 3', animate('500ms ease-out')),
      transition('2 <=> 3', animate('500ms ease-out')),
    ]
  ),
  trigger(
    'enterAnimation-arrow-1', [
      state('void', style({ transform: 'translateX(0)', opacity: 0 })),
      state('2', style({ transform: 'translateX(280%)' })),
      state('3', style({ transform: 'translateX(0)' })),
      transition('2 <=> void', animate('500ms ease-out')),
      transition('1 <=> 2', animate('500ms ease-out')),
    ]
  ),
  trigger(
    'enterAnimation-arrow-2', [
      state('void', style({ transform: 'translateX(0)', opacity: 0 })),
      state('3', style({ transform: 'translateX(630%)' })),
      transition('2 <=> void', animate('500ms ease-out')),
      transition('1 <=> 2', animate('500ms ease-out')),
    ]
  ),
  trigger(
    'enterSentenceAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(20%)', background: '#8cddff', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', background: '#00000000', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms ease-out', style({ transform: 'translateX(20%)', background: '#8cddff', opacity: 0 }))
      ])
    ]
  ),
]