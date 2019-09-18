import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl:'./portfolio.component.html'
})

export class PortfolioComponent {
    constructor() { }
    
    portfolios = [
        {
            title:'Border Land of the Rockies',
            image: 'http://res.cloudinary.com/dpkbivt1g/image/upload/v1523979102/borderlandoftherockies.png',
            href: 'http://www.borderlandoftherockies.com/'

        },
        {
            title:'First Professional Website',
            image: 'http://res.cloudinary.com/dpkbivt1g/image/upload/v1523979082/ebfairweather-1.png',
            href: 'http://www.ebfairweather.com'
        },
        {
            title:'Triple Care',
            image: 'http://res.cloudinary.com/dpkbivt1g/image/upload/v1523979175/Screen_Shot_2016-01-14_at_12.15.35_PM.jpg',
            href: ''
        },
        {
            title:'Inc Financial',
            image: 'http://res.cloudinary.com/dpkbivt1g/image/upload/v1523979104/incwealth.png',
            href: 'http://incwealth.com/'
        }
    ]
}