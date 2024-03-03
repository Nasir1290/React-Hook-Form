import React from "react";

export default function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div className=" flex flex-col justify-start items-start w-full m-2 p-0">
      {label && <label className=" text-lg font-bold mb-1" htmlFor={id}>{label}</label>}
      {children}
      {!!error && <div className=" text-red-500 text-md"> {error.message} </div>}
    </div>
  );
}

const getChildId = (children) => {
  const child = React.Children.only(children);
  if ("id" in child?.props) {
    return child.props.id;
  }
};
