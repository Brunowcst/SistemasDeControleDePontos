import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import RecuperarAcesso from '../pages/RecuperarAcesso';

function routes(props) {
    return (
        <Router>
            <Outlet/>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/recuperar-acesso' element={<RecuperarAcesso/>}/>
                <Route element={<MainLayout/>}>
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Home/>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default routes;