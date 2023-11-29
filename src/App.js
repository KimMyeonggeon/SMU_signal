import logo from './logo.svg';
import './App.css';
import Button from './component/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Button type='primary'size='small' title='home' />
          <Button type='secondary'size='large' title='back' />
          <Button type='primary'size='small' title='home' />
        </a>
      </header>
    </div>
  );
}

export default App;
