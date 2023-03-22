import logo from './../logo.svg';
import './miApp.css';

function miApp() {
  return (
    <div className="miApp">
      <header className="miApp-header">
        <img src={logo} className="miApp-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="miApp-link"
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

export default miApp;
