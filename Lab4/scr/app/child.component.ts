import {Component} from '@angular/core';
import { Input } from '@angular/core';
     
@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: [`./child.component.scss`]
})
export class ChildComponent{ 
	@Input() userName: string = '';
	@Input() userSalary: number = 0;
    userBigSalary: number = 0;
    userBigName: string = '';

    public isBig(): void {
        if(this.userSalary > this.userBigSalary)
        {
            this.userBigName = this.userName;
            this.userBigSalary = this.userSalary;
        }
    }
}

