import Day from '../components/Day';
import './styles/schedule.sass';

interface IAction {
  id: number;
  name: string;
  description: string;
  day: 1 | 2 | 3 | 4| 5 | 6 | 7;
  date: Date;
  status: boolean;
}

type ISchedule = IAction[]

export default function Schedule({schedule}: {schedule?: ISchedule}) {

  if(!schedule) schedule = [
    {
      id: 1,
      name: 'Do',
      description:'Do it',
      day: 1,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    {
      id: 10,
      name: 'Do',
      description:'Do it',
      day: 1,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    {
      id: 11,
      name: 'Do',
      description:'Do it',
      day: 1,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    {
      id: 2,
      name: 'Do',
      description:'Do it',
      day: 2,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    {
      id: 3,
      name: 'Do',
      description:'Do it',
      day: 3,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    {
      id: 4,
      name: 'Do',
      description:'Do it',
      day: 4,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    {
      id: 5,
      name: 'Do',
      description:'Do it',
      day: 5,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    {
      id: 6,
      name: 'Do',
      description:'Do it',
      day: 6,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    {
      id: 7,
      name: 'Do',
      description:'Do it',
      day: 7,
      date: new Date(Math.round(Math.random()*10**10)),
      status: false
    },
    
  ];

  return (
    <article>
      <h1>Your schedule.</h1>
      <div className="calendar">
        <div className="day">
          <div className="_">00:00</div>
          <div className="_">01:00</div>
          <div className="_">02:00</div>
          <div className="_">03:00</div>
          <div className="_">04:00</div>
          <div className="_">05:00</div>
          <div className="_">06:00</div>
          <div className="_">07:00</div>
          <div className="_">08:00</div>
          <div className="_">09:00</div>
          <div className="_">10:00</div>
          <div className="_">11:00</div>
          <div className="_">12:00</div>
          <div className="_">13:00</div>
          <div className="_">14:00</div>
          <div className="_">15:00</div>
          <div className="_">16:00</div>
          <div className="_">17:00</div>
          <div className="_">18:00</div>
          <div className="_">19:00</div>
          <div className="_">20:00</div>
          <div className="_">21:00</div>
          <div className="_">22:00</div>
          <div className="_">23:00</div>
        </div>
        <Day id={1} schedule={schedule}/>
        <Day id={2} schedule={schedule}/>
        <Day id={3} schedule={schedule}/>
        <Day id={4} schedule={schedule}/>
        <Day id={5} schedule={schedule}/>
        <Day id={6} schedule={schedule}/>
        <Day id={7} schedule={schedule}/>
      </div>
    </article>
  );
}