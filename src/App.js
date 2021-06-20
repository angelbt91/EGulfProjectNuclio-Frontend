import './App.css';
import Header from './components/header/header';
import TabHeader from './components/tabheader/tabheader';
import AdBanner from './components/adbanner/adbanner';
import Roll from './components/roll/roll';

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="_separatorLine1" size="1" width="20000 px" color="#D9D9D9"></hr>
      <TabHeader />
      <hr className="_separatorLine2" size="1" width="20000 px" color="#D9D9D9"></hr>
      <AdBanner />
      <Roll tittle="Anuncios"/>
      <Roll tittle="Televisores"/>
      {/* <div className="test_container">
        <div className="card">
          <div className="img">
            img
          </div>
          <div className="description">
            description
          </div>
        </div>
      </div> */}
    </div>
  );
}
/* test_container
width: 200px;
height: 200px;
border: 1px solid black;

card{
  display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    height: 100%;
    border: 1px solid black;
}
img{

   width: 200px; o 100%
    height: 200px;
    border: 1px solid black; 
}*/
export default App;
