import { Router, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

export function addFragmentSmoothScrolling(router: Router) {
    router
        .events
        .pipe(filter((e: Event): e is Scroll => e instanceof Scroll))
        .subscribe(event => {
            if (!event.anchor) return;
            const element = document.getElementById(event.anchor);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
}