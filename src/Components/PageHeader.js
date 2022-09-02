import React from "react";

export default function PageHeader(props) {
  return (
    <div className="">
      <div className="text-white/80 text-3xl font-thin max-w-7xl pb-2 border-b mx-auto my-6">
        {props.children}
      </div>
    </div>
  );
}
