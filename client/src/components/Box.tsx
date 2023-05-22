interface IPlan {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

interface IBox {
  plans: IPlan[];
  setPlans: React.Dispatch<React.SetStateAction<IPlan[] | undefined>>;
  showStatus: boolean;
}

export default function Box ({plans, setPlans, showStatus}: IBox) {
  
  if(!Array.isArray(plans)) return <div></div>;
  return (
    <div className="flex">
      {
        plans === undefined ? null : plans.map((plan: IPlan) => {
          if(plan.status === showStatus) return;

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
                    if(prev === undefined) return prev;
                    prev[prev.findIndex(v => v.id == res.id)] = res;
                    return [...prev];
                  });
                  plans[plans.findIndex((v: IPlan) => v.id == res.id)] = res;
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
  );
}