import React, { useEffect } from "react";

import "./TimeLine.css";
import { ITimeLineProps } from "../../types/ITimeLineProps";

const TimeLine: React.FC<{ items: ITimeLineProps[] }> = ({ items }) => {
  useEffect(() => {
    if (items.length > 0) {
      items.sort((a: ITimeLineProps, b: ITimeLineProps) => {
        return +new Date(a.date) - +new Date(b.date); // Unary plus (+) converts an operand ( new Date() ) into a number.
      })
    }
  }, [items]);
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
