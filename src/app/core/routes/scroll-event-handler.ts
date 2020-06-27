import { Router, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

export function registerScrollEventHandler(router: Router) {
    router
        .events
        .pipe(filter((e: Event): e is Scroll => e instanceof Scroll))
        .subscribe(event => {
            if(!!event.anchor) scrollToAnchor(event);
            else if(!!event.position) scrollToPosition(event);
            else scrollToTop();
        });
}

function scrollToAnchor(event: Scroll) {
    setTimeout(() => {
        const element = document.getElementById(event.anchor);
        if (!element) return;
        
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

function scrollToPosition(event: Scroll) {
    const [x, y] = event.position;
    window.scrollTo({ left: x, top: y, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo(0, 0);
}