import './App.css';
import Header from './components/header/header';
import TabHeader from './components/tabheader/tabheader';
import AdBanner from './components/adbanner/adbanner';

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="_separatorLine1" size="1" width="20000 px" color="#D9D9D9"></hr>
      <TabHeader />
      <hr className="_separatorLine2" size="1" width="20000 px" color="#D9D9D9"></hr>
      <AdBanner />
    </div>
  );
}

export default App;
