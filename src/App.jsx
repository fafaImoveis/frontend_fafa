import './index.css';

import theme from './theme/theme';

import { ThemeProvider } from 'styled-components';

import { Index } from './pages/home/Index';
import { ContextProvider } from './services/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details } from './components/details/Datails';
import { IndexAbout } from './pages/about/Index';
import { Login } from './pages/login/IndexLogin';
import { Imovel } from './components/Imovel/Imovel';
import { Excluir } from './components/excluir/Excluir';
import { Categories } from './components/Categories/Create_category';
import { Banks } from './components/simulation/Banks';


function App() {
  return (
   <>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='/details' element={<Details />}/>
            <Route path='/about' element={<IndexAbout />}/>
            <Route path='/simulation' element={<Banks />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/login/imovel_update' element={<Imovel />}/>
            <Route path='/login/imovel_delete' element={<Excluir />}/>
            <Route path='/login/categories' element={<Categories />}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
   </>
  );
};

export default App;
