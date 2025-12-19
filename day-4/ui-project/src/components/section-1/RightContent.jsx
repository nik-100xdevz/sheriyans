import React from "react";
import RightCard from "./RightCard";

function RightContent(props) {
  return (
    <div className=" h-full w-2/3 flex flex-nowrap overflow-x-auto rounded-4xl gap-10  p-6 ">
      {props.users.map(function (user, index) {
        return <RightCard key={index} user={user} />;
      })}
    </div>
  );
}

export default RightContent;
