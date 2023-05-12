import { useEffect, useState } from 'react';
import './styles/plans.sass';

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
      <div className="flex">
        {
          plans === undefined ? null : plans.map((plan) => {
            return (
              <div className="planBox" key={plan.id}>
                <h2>{plan.id}.&nbsp;{plan.name}</h2>
                <p>
                  {plan.description}
                </p>
                <button
                  className="status"
                  style={{
                    color: plan.status ? '#0f0' : '#f00'
                  }}
                  onClick={async () => {
                    const date = {id: plan.id,name: plan.name,description: plan.description, status: !plan.status};
                    
                    const path: string = 'http://localhost:3001/api/plans/'+plan.id;
                    const res = await fetch(path, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(date)
                    })
                      .then(res => res.json());

                    setPlans(prev => {
                      if(prev === undefined) return;
                      prev[prev.findIndex(v => v.id == res.id)] = res;
                      return [...prev];
                    });
                    plans[plans.findIndex(v => v.id == res.id)] = res;
                  }}
                >
                  {
                    plan.status ? '✓' : 'X'
                  }
                </button>
              </div>
            );
          })
        }
      </div>
    </article>
  );
}