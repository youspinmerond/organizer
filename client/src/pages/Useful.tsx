import { useEffect, useState } from 'react';
import ListBlock from '../components/ListBlock/ListBlock';
import ListUseful from '../components/ListUseful/List';

interface IUseful {
  name: string;
  content: string;
}

// const english = [ 
//   ['https://grammarway.com', 'GrammarWay'],
//   ['https://learnenglish.britishcouncil.org', 'BritishCouncil'],
//   ['https://newsinlevels.com/', 'News'],
//   ['https://grammarinlevels.com', 'GrammarInLevels']

// ];
// const swedish = [
//   ['https://8sidor.se/', '8sidor']
// ];

export default function Useful() {
  const [listUseful, setList] = useState<IUseful[]>();
  
  async function fetchData() {
    const response = await fetch('http://localhost:3001/api/useful')
      .then(res => res.json())
      .then((res) => setList(res));
    return response;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article>
      <div className="create">
        <h1>Create Useful</h1>
        <div className="block">
          <ListUseful />
        </div>
      </div>
      <h1>Useful resources</h1>
      <div className="listResources" style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          listUseful !== undefined ? listUseful.map(e => {
            return <ListBlock key={e.name} name={e.name} list={JSON.parse(e.content)}/>;
          }) : null
        }
        {/* <ListBlock name="English" list={english}/>
        <ListBlock name="Svenska" list={swedish}/>
        <ListBlock name="Mathmatics" list={[['https://spacemath.xyz', 'SpaceMath']]}/> */}
        
      </div>
    </article>
  );
}