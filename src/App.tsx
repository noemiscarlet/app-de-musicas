import { Route, Routes } from 'react-router-dom';
import { Login } from './componentes/Login/login';
import { Search } from './componentes/Search/search';
import { Album } from './componentes/Album/album';
import { Layout } from './componentes/navbar/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
      <Route index element={ <Login /> } />
    </Routes>
  );
}

export default App;
