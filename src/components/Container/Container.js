import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

const Container = ({ children }) => {
    return (
        <div className={styles.container}>
            <h1>Phonebook</h1>
            <>{children}</>
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Container;