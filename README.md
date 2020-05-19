[![build status](https://github.com/anfibiacreativa/scully-blog/workflows/Build/badge.svg)](https://github.com/anfibiacreativa/scully-blog/actions)


# ScullyBlog
This is a work in progress as I play with Scully to better understand it!
Still figuring out the YAML part and how to better leveage config.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

Install it with `npm install` and build with `ng build`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Replace the API urls with yours

Go to mockable.io and create an endpoint that returns a json like this

`[
    {
     "title": "New Dynamic Post 1",
     "description": "Some Random description for a blog post 1",
     "published": true,
     "static": false,
     "slug": ""
    },
    {
     "title": "New Dynamic Post 2",
     "description": "Some Random description for a blog post 2",
     "published": true,
     "static": false,
     "slug": ""
    },
    {
     "title": "New Dynamic Post 3",
     "description": "Some Random description for a blog post 3",
     "published": true,
     "static": false,
     "slug": ""
    },
    `

with as many items as you wish.
Replace the API endpoint url in the scully config `scully.scully-blog.config.js` and in the app constants `src/app/commons/constants/constants.ts`

## Generating static files with Scully

Run `npm run scully` or `npm run scully -- --scanRoutes`.

## Link and run the companion schematics

Checkout the companion schematic 
https://github.com/anfibiacreativa/html-to-md-entry/blob/master/README.md
and build it with `npm run build`. Link it running `npm run link` in the schematics folder and `npm run link html-to-md-entry` in the app root.

Run the schematics with `ng generate html-to-md-entry:html-to-md-entry --path=entries`

Serve the static Scully site with `npm run scully serve`

## More help

Follow me on twitter or watch this repo, to keep up with progress!
