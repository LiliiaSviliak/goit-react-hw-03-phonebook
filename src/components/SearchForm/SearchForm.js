import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.scss";

class SearchForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        const { filter, onChange } = this.props;

        return (
            <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                <label>
                    <h3 className={styles.searchForm__title}>Find contacts by name</h3>
                    <input type="text" value={filter} onChange={onChange} />
                </label>
            </form>
        );
    }
}

SearchForm.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchForm;