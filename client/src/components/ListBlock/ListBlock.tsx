import { useState } from 'react';
import './list.sass';

interface IComponent {
  name: string;
  list: string[];
}
export default function ListBlock({name, list}: IComponent) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="block">
      <div className="head" onClick={() => setShow(pr => !pr)}>
        <h1>{name}</h1>
        <button className="show">
          {
            show ? '▲' : '▼'
          }
        </button>
      </div>
      <div className="list" style={{height: show ? 'min-content' : '0', zIndex: show ? '1' : '0'}}>
        <div className="content">
          {
            list.map(e => {
              return (
                <a href={e} key={e}>{e}</a>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}