import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {
  handleFormSubmit = ({ query }) => {
    this.props.onSubmit(query);
  }

  renderInput = ({ input }) => (
    <div className='search-input-wrapper'>
      <FontAwesomeIcon className="lupa" icon="magnifying-glass" />
      <input
        className="search-bar-container"
        type="text"
        placeholder="Search Games"
        spellCheck="false"
        
        {...input}
      />
    </div>
  )

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field name="query" component={this.renderInput} />
      </form>
    )
  }
}

export default reduxForm({ form: 'searchBar' })(withRouter(SearchBar));
