import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

class ContactList extends Component {
    render() {
        const { contacts, children, onClick } = this.props;

        return (
            <>
                <h2 className={styles.contacts__title}>Contacts</h2>
                <>{children}</>
                <ul className={styles.contacts__list}>
                    {contacts.map(({ id, name, number }) => (
                        <li key={id} className={styles.list__item}>
                            {name}: {number}
                            <button
                                id={id}
                                className={styles.list__button}
                                type="button"
                                onClick={onClick}
                            >
                                Delete
              </button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    children: PropTypes.object,
    onClick: PropTypes.func.isRequired,
};

export default ContactList;