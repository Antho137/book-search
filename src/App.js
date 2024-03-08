import SearchBooks from './components/SearchBooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Web Development Books</h1>
      </header>
      <p className='intro'>The Books are classified into category which are: <span>HTML & CSS, JavaScript, React.js, Node.js, PHP & MySQL and WEB</span></p>
      <SearchBooks />
    </div>
  );
}

export default App;
