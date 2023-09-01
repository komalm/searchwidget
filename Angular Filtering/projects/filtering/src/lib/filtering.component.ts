import { Component, Input, OnInit } from '@angular/core';
import { fetchData } from './Functions/api';

@Component({
  selector: 'lib-filtering',
  templateUrl: './filtering.component.html',
})
export class FilteringComponent implements OnInit {
  constructor() {}
  @Input() hostname: string = 'https://www.diksha.gov.in';
  @Input() AddtionalFilterConfig: Array<{
    name: string;
    field: string;
    isEnabled: boolean;
  }> = [];
  @Input() FilterConfig: Array<{
    name: string;
    field: string;
    isEnabled: boolean;
  }> = [];
  @Input() CardsFieldsObject: {
    name?: {
      field: string;
    };
    type?: {
      field: string;
    };
    tags?: {
      TagsFieldArray: Array<string>;
    };
    image?: {
      field: string;
    };
    publisher?: {
      field: string;
    };
    subject?: {
      field: string;
    };
  } = {};
  @Input() FormAPI: {
    url: string;
    headers?: object;
    method: string;
    body?: string;
    cache?:
      | 'default'
      | 'no-store'
      | 'reload'
      | 'force-cache'
      | 'only-if-cached'
      | 'no-cache';
  } = {
    url: '',
    headers: {},
    method: '',
    body: '',
    cache: 'default',
  };
  @Input() SearchAPI: {
    url: string;
    headers?: object;
    method: string;
    body?: string;
    cache?:
      | 'default'
      | 'no-store'
      | 'reload'
      | 'force-cache'
      | 'only-if-cached'
      | 'no-cache';
  } = {
    url: '',
    headers: {},
    method: '',
    body: '',
    cache: 'default',
  };
  @Input() TermsAPI: {
    url: string;
    headers?: object;
    method: string;
    body?: string;
    cache?:
      | 'default'
      | 'no-store'
      | 'reload'
      | 'force-cache'
      | 'only-if-cached'
      | 'no-cache';
  } = {
    url: '',
    headers: {},
    method: '',
    body: '',
    cache: 'default',
  };
  @Input() GetDefaultChannel: {
    url: string;
    headers?: object;
    method: string;
    body?: string;
    cache?:
      | 'default'
      | 'no-store'
      | 'reload'
      | 'force-cache'
      | 'only-if-cached'
      | 'no-cache';
  } = {
    url: '',
    headers: {},
    method: '',
    body: '',
    cache: 'default',
  };
  @Input() GetChannelAPI: {
    headers?: object;
    method: string;
    body?: string;
    cache?:
      | 'default'
      | 'no-store'
      | 'reload'
      | 'force-cache'
      | 'only-if-cached'
      | 'no-cache';
  } = {
    headers: {},
    method: '',
    body: '',
    cache: 'default',
  };
  Frameworks: any;
  private DefaultChannelID: string = '';
  ngOnInit(): void {
    fetchData({
      url: this.GetDefaultChannel.url,
      method: this.GetDefaultChannel.method,
      headers: this.GetDefaultChannel.headers,
      cache: this.GetDefaultChannel.cache
        ? this.GetDefaultChannel.cache
        : 'default',
    })
      .then((res) => {
        this.DefaultChannelID = res.result.response.value;
        this.GetChannelFrameworks();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  GetChannelFrameworks() {
    fetchData({
      url: `${this.hostname}/api/channel/v1/read/${this.DefaultChannelID}`,
      method: this.GetChannelAPI.method,
      headers: this.GetChannelAPI.headers,
      cache: this.GetDefaultChannel.cache
        ? this.GetDefaultChannel.cache
        : 'default',
    })
      .then((res) => {
        this.Frameworks = res.result.channel.frameworks;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
