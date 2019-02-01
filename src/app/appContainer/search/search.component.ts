import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: []
})
export class SearchComponent implements OnInit, OnDestroy {

    private sub: any;
    vairable;

    // This is where the route from the router gets pulled in to be used within this component
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // This gets the route paramaters which allows us to get the value from the url
        this.sub = this.route.params.subscribe(params => {

            // it is known to get the 'query' because it is defined in the routes in the app.module
            this.vairable = params['query'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
