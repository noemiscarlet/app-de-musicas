import { Route, Routes } from 'react-router-dom';
import { Login } from './componentes/Login/login';
import { Search } from './componentes/Search/search';
import { Album } from './componentes/Album/album';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
    </Routes>
  );
}

export default App;
