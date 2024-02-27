import React from "react";

interface Props {
  title: string;
}
const Button = (props: Props) => {
  const { title } = props;
  return (
    <div className="btnContainer">
      <button>{title}</button>
    </div>
  );
};

export default Button;
