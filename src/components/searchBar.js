import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {

    handleFormSubmit = ({query}) =>{
        console.log('trying to handle submit for query', query);
        this.props.history.push('/results');
    }

    renderInput(field) {
        return (
            <div className='search-input-wrapper'>
                <FontAwesomeIcon className="lupa" icon="magnifying-glass" />
                <input    
                    className="search-bar-container" 
                    type="text" placeholder="Search Games" 
                    {...field.input} 
                />
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput}/>
            </form>
        )
    }
}



SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;