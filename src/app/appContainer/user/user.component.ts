import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-uer',
    templateUrl: './user.component.html',
    styleUrls: []
})
export class UserComponent implements OnInit, OnDestroy {

    vairable;
    private sub: any;

    // This is where the route from the router gets pulled in to be used within this component
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // This gets the route paramaters which allows us to get the value from the url
        this.sub = this.route.params.subscribe(params => {

            // it is known to get the 'id' because it is defined in the routes in the app.module
            this.vairable = params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

