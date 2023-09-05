import { Route, Routes } from 'react-router-dom';
import { Login } from './componentes/Login/login';
import { Search } from './componentes/Search/search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
    </Routes>
  );
}

export default App;
