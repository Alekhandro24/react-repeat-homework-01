import { formatEventStart, formatEventDuration } from '../utils';

import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import css from './Event.module.css';
import { iconSize } from '../constants';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <i className={css.icon}></i>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} color="red" />
        {location}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        <FaClock size={iconSize.sm} />
        {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};
