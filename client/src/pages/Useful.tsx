import ListBlock from '../components/ListBlock/ListBlock';

const english = [
  ['https://grammarway.com', 'GrammarWay'],
  ['https://learnenglish.britishcouncil.org', 'BritishCouncil'],
  ['https://newsinlevels.com/', 'News'],
  ['https://grammarinlevels.com', 'GrammarInLevels']

];
const swedish = [
  ['https://8sidor.se/', '8sidor']
];


export default function Useful() {
  return (
    <article>
      <h1>Useful resources</h1>
      <div className="listResources" style={{display: 'flex', flexWrap: 'wrap'}}>
        <ListBlock name="English" list={english}/>
        <ListBlock name="Svenska" list={swedish}/>
        <ListBlock name="Mathmatics" list={[['https://spacemath.xyz', 'SpaceMath']]}/>
        
      </div>
    </article>
  );
}