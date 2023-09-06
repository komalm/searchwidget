import { OnInit } from '@angular/core';
export declare class CardsComponentComponent implements OnInit {
    name: string;
    type: string;
    tags: Array<string>;
    image: string;
    subject: string;
    publisher: string;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
