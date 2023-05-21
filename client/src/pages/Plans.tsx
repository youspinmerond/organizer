import { useEffect, useState } from 'react';
import './styles/plans.sass';
import Box from '../components/Box';

interface IPlan {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

export default function Plans() {
  const [plans, setPlans] = useState<IPlan[]>();

  useEffect(() => {
    fetch('http://localhost:3001/api/plans').then(res => {
      return res.json();
    })
      .then(res => {
        setPlans(res);
      });
  }, []);
  
  return (
    <article>
      <h1>Plans</h1>
      <div className="sort">
        <button onClick={() => {
          if(!plans) return;
          const res = plans.sort((a,b) => {
            if(a.id < b.id) return -1;
            return 1;
          });
          setPlans(res);
        }}>By Id</button>
        <button onClick={() => {
          if(!plans) return;
          const res = plans.sort((a,b) => {
            if(a.name < b.name) return -1;
            return 1;
          });
          setPlans(res);
        }}>Name</button>
      </div>
      <div>
        <h2>Not done</h2>
        {
          plans ? <Box plans={plans} setPlans={setPlans} showStatus={false}/> : null
        }
      </div>
      <div>
        <h2>Done</h2>
        {
          plans ? <Box plans={plans} setPlans={setPlans} showStatus/> : null
        }
      </div>
      
    </article>
  );
}