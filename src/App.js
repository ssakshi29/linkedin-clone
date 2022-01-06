import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import { useState } from 'react';

const App = () => {
  const [content, setContent] = useState('Home');

  return (
    <div className="App" style={{paddingTop: 52}}>
      <Navbar content={content} setContent={setContent}/>
      <Main content={content}/>
    </div>
  );
}

export default App;
