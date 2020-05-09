import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Rule, SchematicContext, Tree, schematic, chain } from '@angular-devkit/schematics';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent  {
  config = `
    --- \n
    title: \n
    description: \n
    published: false \n
    slugs: \n
    --- \n
  `;
  entry = new FormControl(this.config);

  constructor(
  ) {}

  addEntry(): void {

  }
}
