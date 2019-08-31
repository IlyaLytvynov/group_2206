import React from "react";
import { ApiRequest } from "../../utils/ApiRequest";

export class Categories extends React.Component {
  state = {
    categories: [],
    title: ''
  };
  componentDidMount() {
    const url = "https://bloggers-crm-dev.herokuapp.com/categories";

    ApiRequest.create(url, {token: this.props.accessToken}).get(
      (response) => {
        console.log(response.data.entries)
        this.setState({categories: response.data.entries});
      },
      e => {
        console.log(e);
      }
    );
  }
  renderItems() {
    const elements = [];
    for( let category of this.state.categories) {
      elements.push(<li key={category._id}>{category.title}</li>)
    }
    return elements;
  }

  onChangeHandler = (e) => {
    const title = e.target.value;
    this.setState({title});
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const url = "https://bloggers-crm-dev.herokuapp.com/categories";

    ApiRequest.create(url, {token: this.props.accessToken}).post(
      {title: this.state.title},
      (response) => {
        console.log(response.data);
        const currentCategories = this.state.categories;
        currentCategories.push(response.data);
        this.setState({categories: currentCategories})
      },
      e => {
        console.log(e);
      }
    );
  }

  render() {
    return <div>
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" value={this.state.title} onChange={this.onChangeHandler}/>
        <button>Add</button>
      </form>
      <ul>
      {
        this.renderItems()
      }
    </ul>
    </div>
  }
}