import Header from './components/Header';

export default function Layout({children}: {children: any}) {
  return (
    <>
      <Header/>
      {children}
    </>
  );
}