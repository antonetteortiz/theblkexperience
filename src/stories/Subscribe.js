import React from "react";
import PropTypes from "prop-types";
import "./subscribe.css";

/**
 * Primary UI component for user interaction
 */
export const Subscribe = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-subscribe --primary"
    : "storybook-subscribe --secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-subscribe ",
        `storybook-subscribe --${size}`,
        mode,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Subscribe.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the subscribe  be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * subscribe  contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Subscribe.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

// export default subscribe ;
