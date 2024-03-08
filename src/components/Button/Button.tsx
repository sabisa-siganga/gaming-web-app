import React from "react";
// Importing styles from a separate module for modularity and easier styling management.
import styles from "./Button.module.scss";

interface Props {
  // Define children prop to render content within the button.
  children: React.ReactNode;
  // Define variant prop to determine the style of the button.
  variant: "background" | "outline";
  // Define onClick prop as an optional function triggered by button click event.
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string; // Define className prop to allow additional custom styling.
}

const Button = (props: Props) => {
  // props destructuring
  const { children, variant, className, onClick } = props;

  // Determine the style class based on the variant prop.
  const style = variant === "background" ? styles.background : styles.outline;

  return (
    <>
      <button
        // Attach onClick event handler.
        onClick={onClick}
        //  Apply button styles using CSS modules and optional className.
        className={`${styles.btn} ${style} ${className || ""}`}
      >
        {/*Conditional rendering of children based on the variant prop.Render children wrapped in a span if variant is 'background'. Otherwise render children directly*/}
        {variant === "background" ? <span>{children}</span> : <>{children}</>}
      </button>
    </>
  );
};

export default Button;
