import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import data from './Data'
function App() {

  const Cards = data.map((item)=>{
    return (
      <Card key={item.id} {...item} />
    )
  })
  return (
    <div className="App">
      <Header />
       <section className='card-list'>
         {Cards}
       </section>
    </div>
  );
}

export default App;
