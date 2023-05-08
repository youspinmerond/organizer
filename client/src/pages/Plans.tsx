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
              <div className="box" key={plan.id}>
                <div className="name"></div>
                <div className="des"></div>
                <h2>{plan.id}{plan.name}</h2>
                <p>
                  {plan.description}
                </p>
                <div
                  className="status"
                >
                  {
                    plan.status ? 'Done' : 'Not done'
                  }
                </div>
              </div>
            );
          })
        }
      </div>
    </article>
  );
}