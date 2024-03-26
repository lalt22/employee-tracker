import './App.css';
import RefreshContextProvider from './context/RefreshContextProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import CreatePage from './pages/CreatePage/CreatePage';
import EmployeePage from './pages/EmployeePage/EmployeePage';
import EditEmployee from './pages/EditPage/EditEmployee';

function App() {
  return (
      <RefreshContextProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='trackEmp/employees' element={<EmployeesPage />}/>
          <Route path='trackEmp/new' element={<CreatePage />}/>
          <Route path='trackEmp/employees/:id' element={<EmployeePage />}/>
          <Route path='trackEmp/employees/:id/edit' element={<EditEmployee/>}/>
        </Routes>
        </BrowserRouter>
      </RefreshContextProvider>
    );
}

export default App;
