import './App.css';

const App = () => {
  const name = "Bruce";
  const isNameShowing = false;
  
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "Bruno"}, Testing React!! JSM</h1>
    </div>
  );
}

export default App;
