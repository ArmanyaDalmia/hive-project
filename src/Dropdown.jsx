import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, multiSelect = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    multiSelect ? [] : null
  );

  const handleSelect = (option) => {
    if (multiSelect) {
      setSelectedOptions((prevOptions) =>
        prevOptions.includes(option)
          ? prevOptions.filter((prevOption) => prevOption !== option)
          : [...prevOptions, option]
      );
    } else {
      setSelectedOptions(option);
    }
  };

  const handleSelectAll = () => {
    if (multiSelect) {
      setSelectedOptions(
        selectedOptions.length === options.length ? [] : options
      );
    }
  };

  const getButtonLabel = () => {
    if (multiSelect) {
      return selectedOptions?.length > 0
        ? selectedOptions.join(", ")
        : "Select Options";
    }
    return selectedOptions || "Select an Option";
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {getButtonLabel()}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {multiSelect && (
            <li className="select-all" onClick={handleSelectAll}>
              {selectedOptions?.length === options.length
                ? "Deselect All"
                : "Select All"}
            </li>
          )}
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={selectedOptions?.includes(option) ? "selected" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
