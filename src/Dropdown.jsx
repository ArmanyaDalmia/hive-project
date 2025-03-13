import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, multiSelect = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    multiSelect ? [] : null
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    if (multiSelect) {
      setSelectedOptions((prevOptions) => {
        if (prevOptions && prevOptions.includes(option)) {
          return prevOptions.filter((prevOption) => prevOption !== option);
        } else {
          return [...prevOptions, option];
        }
      });
    } else {
      setSelectedOptions(option);
    }
  };

  const handleSelectAll = () => {
    if (multiSelect) {
      const allSelected = selectedOptions.length === options.length ? [] : options;
      setSelectedOptions(allSelected);
    }
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        {multiSelect
          ? selectedOptions && selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select Options"
          : selectedOptions
          ? selectedOptions
          : "Select an Option"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {multiSelect && (
            <li
              onClick={handleSelectAll}
            >
              {selectedOptions.length === options.length
                ? "Deselect All"
                : "Select All"}
            </li>
          )}
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
