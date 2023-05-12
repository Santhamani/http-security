import { Component, OnInit, Injectable , Directive, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    constructor() { }
    
}


@Injectable({providedIn: 'root'})
export class ServiceNameService1 {
    constructor(private httpClient: HttpClient) { }
    
}


@Pipe({
    name: 'selector-name'
})

export class NamePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        
    }
}

@Component({
    selector: 'selector-name',
    templateUrl: 'name.component.html'
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}


@Directive({ selector: '[selector-name]' })
export class NameDirective {
    constructor() { }
}

import { Routes } from '@angular/router';

export const routes: Routes = []

checkEvents() {
    this.router.events.subscribe(event => {
        switch (true) {
            case event instanceof eventName:
                
                break;

            default:
                break;
        }
    });
}

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

export class NameGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }
}