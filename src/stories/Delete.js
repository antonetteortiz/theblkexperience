import React from "react";
import PropTypes from "prop-types";
import "./delete.css";

/**
 * Primary UI component for user interaction
 */
export const Delete = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-update --primary"
    : "storybook-update --secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-update ",
        `storybook-update --${size}`,
        mode,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Delete.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the update  be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * update  contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Delete.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

// export default update ;
