import { IoMailOutline } from "react-icons/io5";
import { BsTelephone, BsLinkedin } from "react-icons/bs";

import './Card.css'
import TimeLine from '../TimeLine/TimeLine';
import { ICardProps } from '../../types/ICardProps';

export default function Card(card: ICardProps) {
  return (
    <div className='card'>
        <div className='title'>
            <div className='title-top'>
                <h3>{card.name}</h3>
                <BsTelephone className='card-icon'/>
                <IoMailOutline className='card-icon'/>
                <div className='vertical-divider'></div>
                <BsLinkedin className='linkedin'/>
            </div>
            <div className='title-bottom'>
                <h3 className='position'>{card.current_title}</h3>
                <div className='circle-dot'></div>
                <h3 className='location'>{card.location}</h3>
            </div>
        </div>
        <div className='horizontal-divider'></div>
        <div className='body'>
            <div className='timeline-container'>
                <h3>Experience</h3>
                <TimeLine items={card.experience}/>
            </div>
            <div className='timeline-container'>
                <h3>Education</h3>
                <TimeLine items={card.education}/>
            </div>
        </div>
    </div>
  )
}
