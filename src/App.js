import './App.css';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Contacts title={'Moji kontakti'} author="Marijo" timestamp={Date.now()} note="Poruka"/>
    </div>
  );
}

export default App;
