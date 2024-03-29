# ngMatador
Testing Angular 14 and the Angular Material Library. This solution has been upgraded from the default Visual Studio Angular 6 templates to Angular 14 with Material 14.

### Be sure to following the material guide to make sure you add the correct themes, iconography, etc

https://material.angular.io/guide/getting-started#step-4-include-a-theme

### Easily create a new navigation header and sidebar with the following command
``` console
ng generate @angular/material:material-nav --name=mainNav2 --module=app.module.ts
```

### Create Table (This appears to be improved sytax over the header/sidebar example
``` console
ng generate @angular/material:table --name=amorit --module=app.module.ts
```

### Good example for configuring a fixed nav bar and side nav bar
- See the following examples for using **@media queries**, **Angular CDK**, **ngIf** to configure a sidebar
    - main-nav2.component.ts
    - main-nav2.css
    - main-nav2.html
- Good example of setting links on the header nav and sidebar navs


### Responsive Layouts - Bootstrap 4 vs Angular Flex
- Apparently there are two different ways in which to do responsive layouts using Angular Material - Bootstrap 4 or the Angular Flex layout package. Angular flex layout is still in beta and appears to be waiting for the release of the Angular Ivy rendering engine before it becomes an RC. For the time being, Bootstrap 4 will be the bets way forward

### Customizing color themes
- configure scss for your app
- If you forgot to do this when you first used ng create, you will find some conflicting resources for configure this. Basically, this is the correct command for Angular 6+. It will modify your angular.json file to use the scss preprocessor for your css. You will also have to convert the `styles.css` to be `styles.scss`.
- ng config schematics.@schematics/angular:component.styleext scss

### Adding global styles
- This can be done by using import statements in the `src/styles.scss` file or
- This can be done in then angluar.json file `"styles:"` section
    - If you use the `{ "input": "src/my-theme.scss"}` for compiling your files, you can also specify output bundes as well as other options
