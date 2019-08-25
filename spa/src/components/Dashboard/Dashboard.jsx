import React, { Component } from "react";
import {ApiRequest} from '../../utils/ApiRequest';

export class Dashboard extends Component {
  componentDidMount() {
    const url = "https://bloggers-crm-dev.herokuapp.com/bloggers?order=asc&sortBy=subscribers.instagram&perPage=2&currentPage=0";

    ApiRequest.create(url, {token: this.props.accessToken}).get(
      (response) => {
        console.log(response)
      },
      e => {
        console.log(e);
      }
    );
  }

  render() {
    console.log('RENDER');
    return <h2>Dashboard</h2>
  }
}
