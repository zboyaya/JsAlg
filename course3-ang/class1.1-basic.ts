/**
 * Angular Tutorial for Beginners - Web Framework with Typescript Course
 * 2021/10/20
 * https://www.youtube.com/watch?v=AAu8bjj6-UI&ab_channel=freeCodeCamp.org
 */
//1. Intro Basic
/*1.1 what's Angular?
  - Angular is UI framework for building mobile and desktop applications
  - It's built using TS by google.
  - It's an open source and help us build dynamic and single page applications
*/
/*1.2 what's features of Angular?
  - completely based on components and modules using @NgModule decorator
  - (component be declared in it, in order for it to be available to another component)
  - components include : templates are dynamic, typescript class, css style, css selector(others can use it tag)
  - service: such as log in, data message, calculation
*/
// file in my-pro.c.ts 
import {Component} from '@angualr/core'
@Component({
    selector: 'app-my-pro',
    template: '',
    style:[``]
})
export class MyProComponent{
    title = "hello world"; //can be accessed by template
}
//app.module.ts
import {NgModule} from '@angualr/core'
import {MyProComponent} from './my-pro.component.ts'
@NgModule({
    declarations:[
        AppComponent,
        MyProComponent
    ],
    imports:[],
    providers:[],
    bootstrap:[AppComponet]
})
//to see component use css selector - app.component.html
<app-my-pro></app-my-pro>
//ng serve to start it

//2. Lifecycle hooks
/**
 * think of component life, get born, change, grow, die
 * constructor -> ngOnChanges -> ngOnInit -> ngDoCheck 
 * -> ngAfterContentInit -> ngAfterContentChecked ->ngAfterViewInit ->ngAfterViewChecked
 * ->ngOnDestroy(clean up your c, remove some subscriptions to prevent memory leaks)
 */
import {Component, OnInit} from '@angualr/core'
export class AppComponent implements OnInit, OnDestroy{
    intervalSub;
    // to implement any hook
    ngOnInit(){
        this.intervalSub = setInterval(() => {
            console.log(`Hello from ngOnInit`);
        },1000);
    }
    ngOnDestroy(){
        if(this.intervalSub){
            clearInterval(this.intervalSub);
        }
    }
}

//3. text interpolation
{{title}} //app.c.html you can't use +=, chaining expressions in it
{{getMin(a, b)}}