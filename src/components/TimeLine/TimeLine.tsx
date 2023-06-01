import React from "react";

import "./TimeLine.css"
import { ITimeLineProps } from "../../types/ITimeLineProps";

const TimeLine: React.FC<ITimeLineProps> = ({ items }) => {
  return (
    <div className='wrapper'>
        <ul className='timeline'>
          {items.map((item: string) => (
            <li>
              <div className='panel'>
                <p>{item}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default TimeLine;