import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { initConfig } from '../../commons/constants/constants';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent  {
  config = initConfig;
  entry = new FormControl(this.config);

  constructor(
  ) {}

  addEntry(): void {
    // create each entry
  }
}
