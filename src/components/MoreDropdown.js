import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const DropDown = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-caret-down"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropDown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropDown} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className={`fas fa-pen ${styles.Icon} ${styles.Edit}`} />
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className={`fas fa-trash ${styles.Icon} ${styles.Delete}`} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={DropDown} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className={`fas fa-pen ${styles.Icon} ${styles.Edit}`} /> Edit
          profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className={`fas fa-id-card ${styles.Icon} ${styles.Edit}`} />
          Change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className={`fas fa-key ${styles.Icon} ${styles.Edit}`} />
          Change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
