import { EventBoard } from './EventBoard/EventDoard';
import { PageTitle } from './PageTitle/PageTitle';
import upcomingEvents from './upcoming-events.json';
import './index.css';

export const App = () => {
  return (
    <>
      <PageTitle text="24TH CORE WORLDS COALITION CONFERENCE" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
