import { Component, Input } from '@angular/core';
export class CardsComponentComponent {
    constructor() {
        this.name = '';
        this.type = '';
        this.tags = [''];
        this.image = '';
        this.subject = '';
        this.publisher = '';
    }
    ngOnInit() { }
    ngAfterViewInit() { }
}
CardsComponentComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-cards-component',
                template: "<div>\n  <div class=\"Container\">\n    <div class=\"TopContent\">\n      <div>\n        <p class=\"Link\" style=\"font-size: 18px;\">{{ this.name }}</p>\n        <p class=\"Type\">{{ this.type }}</p>\n      </div>\n      <div class=\"ImageDiv\">\n        <img\n          class=\"Image\"\n          [src]=\"\n            this.image ||\n            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'\n          \"\n        />\n      </div>\n    </div>\n    <div>\n      <div class=\"TagsDiv\" *ngIf=\"tags.length\">\n        <ng-container *ngFor=\"let tag of this.tags\">\n          <div *ngIf=\"tag\" class=\"Tags\">{{ tag }}</div>\n        </ng-container>\n      </div>\n      <div class=\"LowerDiv\">\n        <div class=\"LowerItem\" *ngIf=\"subject\">\n          <dt class=\"DescType\">Subject</dt>\n          <dd class=\"DetailDesc\">{{ subject }}</dd>\n        </div>\n        <div class=\"LowerItem\" *ngIf=\"publisher\">\n          <dt class=\"DescType\">Publisher</dt>\n          <dd class=\"DetailDesc\">{{ this.publisher }}</dd>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200&display=swap\");*{font-family:Noto Sans,sans-serif}.Container{display:block;overflow:hidden;padding:1rem;border-radius:.5rem;border-width:1px 1px .5rem;border-color:grey grey #a7f3d0;box-shadow:2px 2px 2px 2px rgba(0,0,0,.1);width:98%;width:23rem}.Container:hover{box-shadow:8px 8px 8px 8px rgba(0,0,0,.2);scale:1.001;animation:.3s ease-in-out both;cursor:pointer}.TopContent{display:flex;justify-content:space-between}.Link{font-weight:bolder;color:#111827;font-size:15px}.Image{-o-object-fit:cover;object-fit:cover;border-radius:9999px;width:4rem;height:4rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.TagsDiv{display:flex;-moz-column-gap:.75rem;column-gap:.75rem;font-size:.4rem;line-height:1.25rem;color:#6b7280;min-width:40ch;max-width:-moz-fit-content;max-width:fit-content}.Tags{display:inline-flex;padding:5px 6px;border-radius:9999px;font-size:.6rem;line-height:1rem;font-weight:700;color:#047857;text-transform:uppercase;background-color:#a7f3d0}.LowerItem,.Tags{align-items:center}.LowerItem{display:flex;flex-direction:column}.DescType{font-size:.875rem;line-height:1.25rem;font-weight:600;width:-moz-fit-content;width:fit-content;color:#4b5563}.DetailDesc{font-size:.75rem;line-height:1rem;width:-moz-fit-content;width:fit-content;text-align:center;margin-left:0;color:#6b7280}.LowerDiv{display:flex;margin-top:1rem;gap:1rem;width:100%;justify-content:space-between}@media (min-width:1024px){.Container{margin-top:0;margin-bottom:0;width:21rem;max-height:-moz-fit-content;max-height:fit-content;min-height:11.5rem}.Link{font-size:1.5rem}.ImageDiv{margin-top:0;margin-bottom:0}}.ImageDiv{display:block;margin-top:.5rem;margin-bottom:.5rem}.Type{font-size:15px;font-weight:800;margin-top:-10px;color:#4b5563}@media screen and (max-width:500px){.Container{width:23rem}}@media (min-width:640px){.TopContent{justify-content:space-between;gap:1rem}.LowerDiv{gap:1.5rem}}"]
            },] }
];
CardsComponentComponent.ctorParameters = () => [];
CardsComponentComponent.propDecorators = {
    name: [{ type: Input }],
    type: [{ type: Input }],
    tags: [{ type: Input }],
    image: [{ type: Input }],
    subject: [{ type: Input }],
    publisher: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMtY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlcmluZy9zcmMvbGliL2NvbXBvbmVudHMvY2FyZHMtY29tcG9uZW50L2NhcmRzLWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBd0IsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyx1QkFBdUI7SUFRbEM7UUFQUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsU0FBSSxHQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBRWpCLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7SUFFYixlQUFlLEtBQVUsQ0FBQzs7O1lBakIzQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isb3FDQUErQzs7YUFFaEQ7Ozs7bUJBRUUsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkcy1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZHMtY29tcG9uZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZHMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZHNDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRhZ3M6IEFycmF5PHN0cmluZz4gPSBbJyddO1xuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHN1YmplY3Q6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBwdWJsaXNoZXI6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge31cbn1cbiJdfQ==