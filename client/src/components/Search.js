import React from "react";
import axios from "axios";
import _ from "lodash";
import Planet from "./Planet";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.fetchResultsDedounced = _.debounce(this.fetchResults.bind(this), 500);
  }
  state = { searchTerm: "", planetSelected: null, searchResults: [] };

  onSearchChange = (e) => {
    const searchTerm = e.target.value || "";

    this.setState({ searchTerm }, () => {
      this.fetchResultsDedounced();
    });
  };

  async fetchResults() {
    if (!this.state.searchTerm) return;
    const response = await axios.get(`/api/planets/${this.state.searchTerm}`);
    this.setState({ searchResults: response.data.results });
  }

  renderSearchResults() {
    if (!this.state.searchResults.length) return null;

    return (
      <ul>
        {this.state.searchResults.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                this.setState({
                  planetSelected: item,
                  searchResults: [],
                });
              }}
            >
              <div className="collapsible-header">
                <i className="material-icons">public</i>
                {item.name}
                <span className="new badge" data-badge-caption="Population">
                  {item.population}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h4>Search for your favourite Planet</h4>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="searchTerm"
              type="text"
              className="validate"
              value={this.state.searchTerm}
              onChange={this.onSearchChange}
            />
            <label for="searchTerm">Planet</label>
          </div>
        </div>
        {this.renderSearchResults()}
        <Planet planet={this.state.planetSelected} />
      </div>
    );
  }
}

export default Search;
