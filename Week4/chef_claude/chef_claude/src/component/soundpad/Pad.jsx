import React from "react";

const Pad = (props) => {
  console.log(props.id);
  // const [on, setOn] = React.useState(props.on);
  console.log(props.on);
  //   function toggle() {
  //     setOn((prevOn) => !prevOn);
  //   }

  return (
    <div>
      <button
        style={{ backgroundColor: props.color }}
        key={props.key}
        className={props.on ? "on" : undefined}
        onClick={() => props.toggle(props.id)}
      ></button>
    </div>
  );
};

export default Pad;
