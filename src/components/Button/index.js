import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder4: "rounded-radius4" };
const variants = {
  OutlineGray200:
    "bg-white_A700 border border-gray_200 border-solid text-indigo_A200",
  OutlineGray2001_2:
    "bg-bluegray_900 border border-gray_200 border-solid text-white_A700",
};
const sizes = { sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlineGray200", "OutlineGray2001_2"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  leftIcon: null,
  rightIcon: null,
  shape: "RoundedBorder4",
  variant: "OutlineGray200",
  size: "sm",
};

export { Button };
