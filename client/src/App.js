import './App.css';
import { createBrowserRouter, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:"/register",
    element:<Register/>
  }
])

export default router;
