import { useState } from 'react';
import './App.scss';
import Form from './Components/Formulario';
import Header from './Components/Header';
import List from './Components/List'

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="App">
      <Header />
      <Form 
        title={title} 
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
      />
      <List />
    </div>
  );
}

export default App;
