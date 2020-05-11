import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { initConfig } from '../../commons/constants/constants';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent  {
  options = initConfig;
  config = new FormControl(this.options);
  entry = new FormControl('Start typing markdown here...');

  constructor(
  ) {}

  addEntry(): void {
    // create each entry
  }
}
