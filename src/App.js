import Header from "./components/Header/Header";
import Main from "./components/Main";
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Main />
      </div>
    </div>
  );
};

export default App;
