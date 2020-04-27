import React,{useState} from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import './App.css';
import useMousePosition from './hooks/useMousePositions';
import withLoader from './components/withLoader';
import useURLLoader from './hooks/useURLLoader';

interface IShowResult {
  message:string;
  status:string;
}

const App:React.FC = ()=> {
  const [show,setShow] = useState(true);
  const [data,loading] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show])
  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={()=> {setShow(!show)}}>toggle tracker </button>
        </p>
        {loading ? <p>loading</p> 
         : <img src={dogResult && dogResult.message} />
        }
        <LikeButton></LikeButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
