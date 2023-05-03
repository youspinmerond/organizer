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
      id: 0,
      name: 'Do',
      description:'Do it',
      day: 1,
      date: new Date(),
      status: false
    },
    {
      id: 1,
      name: 'Do',
      description:'Do it',
      day: 1,
      date: new Date(Math.random()*1000000000),
      status: false
    },
  ];

  return (
    <article>
      <h1>Your schedule.</h1>
      <div className="calendar">
        <div className="day">
          <div className="_">0:00</div>
          <div className="_">1:00</div>
          <div className="_">2:00</div>
          <div className="_">3:00</div>
          <div className="_">4:00</div>
          <div className="_">5:00</div>
          <div className="_">6:00</div>
          <div className="_">7:00</div>
          <div className="_">8:00</div>
          <div className="_">9:00</div>
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
        <div id="1" className="day">
          {
            schedule.map((e) => {
              return (
                <div
                  key={e.id}
                  className='elem'
                  style={{position: 'relative', top: e.date.getHours()/24 * 100 + '%'}}
                >
                  {e.id}. {e.name}&nbsp;
                  {e.date.getHours().toString()}:{e.date.getMinutes().toString()}
                </div>
              );
            })
          }
        </div>
        <div id="2" className="day">2</div>
        <div id="3" className="day">3</div>
        <div id="4" className="day">4</div>
        <div id="5" className="day">5</div>
        <div id="6" className="day">6</div>
        <div id="7" className="day">7</div>
      </div>
    </article>
  );
}