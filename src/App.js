import './App.css';
import links from './getingdata';
import Navbar from './componets/Navbar';
import Row from './componets/Row';

function App() {

  let netflix_orignal = links.netflix_orignal;
  let fetch_tranding = links.fetch_tranding;
  let fetch_comedy = links.fetch_comedy;
  let fetch_horror = links.fetch_horror;
  let fetch_romantic = links.fetch_romantic;


  

  return(
    <div className='app'>
      <Navbar netflix_orignal = {netflix_orignal}></Navbar>
      <Row url = {netflix_orignal} name = "NETFLIX ORIGNALS"></Row>
      <Row url = {fetch_tranding} name = "trending movies"></Row>
      <Row url = {fetch_comedy} name = "comedy movies"></Row>
      <Row url = {fetch_horror} name = "HORROR movies"></Row>
      <Row url = {fetch_romantic} name = "romantic movies"></Row>
    </div>
  )
}

export default App;
