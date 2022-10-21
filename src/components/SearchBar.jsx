import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { search: "" };

  onInputChange = (event) => {
    this.setState({ search: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearch(this.state.search);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.search}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
