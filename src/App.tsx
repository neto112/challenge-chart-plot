import * as React from 'react';
import './App.css';
import Charts from './Chart';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div>
<Charts/>
<Header/>
<Footer buttonClicked={undefined}/>
    </div>
  );
}

export default App;