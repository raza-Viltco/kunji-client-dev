import React from "react";
import { Button, CircularProgress } from "@mui/material";

const LoadingButton = ({
  children,
  isLoading,
  type,
  fullWidth,
  variant,
  color,
  sx,
  size,
  click,
}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth ? true : false}
      variant={variant}
      color={color}
      sx={sx}
      size={size}
      onClick={click}
    >
      {isLoading ? <CircularProgress color="secondary" size={25} /> : children}
    </Button>
  );
};

export default LoadingButton;
