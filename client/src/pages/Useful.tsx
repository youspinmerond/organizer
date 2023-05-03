import ListBlock from '../components/ListBlock/ListBlock';

const english = [
  'https://grammarway.com',
  'https://learnenglish.britishcouncil.org',
  'https://newsinlevels.com/',
  'https://grammarinlevels.com'

];
const swedish = [
  'https://8sidor.se/'
];


export default function Useful() {
  return (
    <article>
      <h1>Useful resources</h1>
      <div className="listResources" style={{display: 'flex', flexWrap: 'wrap'}}>
        <ListBlock name="English" list={english}/>
        <ListBlock name="Svenska" list={swedish}/>
        <ListBlock name="Mathmatics" list={['https://spacemath.xyz']}/>
        
      </div>
    </article>
  );
}