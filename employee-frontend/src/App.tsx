import { useState } from 'react';
import './App.css';
import { Employee } from './services/employeeService';
import RefreshContextProvider from './context/RefreshContextProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import CreatePage from './pages/CreatePage/CreatePage';
import EmployeePage from './pages/EmployeePage/EmployeePage';

function App() {
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  // getAllEmployees().then((res) => setEmployees(res));
  return (
      <RefreshContextProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='trackEmp/' element={<HomePage />}/>
          <Route path='trackEmp/employees' element={<EmployeesPage />}/>
          <Route path='trackEmp/new' element={<CreatePage />}/>
          <Route path='trackEmp/employee/:id' element={<EmployeePage />}/>
        </Routes>
        </BrowserRouter>
      </RefreshContextProvider>
    );
}

export default App;
