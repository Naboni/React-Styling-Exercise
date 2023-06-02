import React from "react";

import "./TimeLine.css";
import { ITimeLineProps } from "../../types/ITimeLineProps";

const TimeLine: React.FC<{items: ITimeLineProps[]}> = ({items}) => {
  return (
    <div className="wrapper">
      <ul className="timeline">
        {items.map((item: ITimeLineProps) => (
          <li>
            <div className="panel">
              <div className="item-wrapper">
                <div className="avatar">
                  <img src={item.img} alt="Avatar" />
                </div>
                <div className="item">{item.title}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
