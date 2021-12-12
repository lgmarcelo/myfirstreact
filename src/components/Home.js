import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
import Employee from './Employee';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lauren
        </p>
        <p>{Hello()}</p>
        <Greet name="Peter" heroName="Spiderman">
          <Message/>
        </Greet>
        <Greet name="Tony" heroName="Iron Man">
          <Button/>
        </Greet>
        <Greet name="Thor" heroName="Thor"/>
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

export default Home;
