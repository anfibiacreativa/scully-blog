import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { initConfig } from '../commons/constants/constants';
import { ConfigService } from '../commons/services/config.service';
import { Yaml } from 'yamljs/lib/Yaml';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  options = initConfig;
  entryConfigPath: string = '../../assets/configs/entry-config.yaml';
  config = new FormControl(this.options);
  entry = new FormControl('Start typing markdown here...');

  constructor(
    private configService: ConfigService
  ) {}

  addEntry(): void {
    // create each entry
  }

  readEntryConfig(): Object {
    return this.configService.getConfig(this.entryConfigPath)
  }

  ngOnInit(): void {
    let entryConfig = this.readEntryConfig();
    // Yaml.parse(entryConfig);
    console.log(entryConfig);
  }
}
