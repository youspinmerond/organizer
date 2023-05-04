interface IAction {
  id: number;
  name: string;
  description: string;
  day: 1 | 2 | 3 | 4| 5 | 6 | 7;
  date: Date;
  status: boolean;
}

export default function Day({schedule, id}:{schedule: IAction[], id: number}) {
  return (
    <div className="day" id={id.toString()}>
      {
        schedule.map((e) => {
          if(e.day === id) {
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
          }
        })
      }
    </div>
  );
}