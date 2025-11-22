import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

import WarehouseList from './components/WarehouseList';
import WarehouseForm from './components/WarehouseForm';

import TransactionList from './components/TransactionList';

import Report from './components/Report';

import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import './styles.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route 
            path="/" 
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
          />

          <Route 
            path="/products" 
            element={<ProtectedRoute><ProductList /></ProtectedRoute>} 
          />

          <Route 
            path="/products/new" 
            element={<ProtectedRoute><ProductForm /></ProtectedRoute>} 
          />

          <Route 
            path="/warehouses" 
            element={<ProtectedRoute><WarehouseList /></ProtectedRoute>} 
          />

          <Route 
            path="/warehouses/new" 
            element={<ProtectedRoute><WarehouseForm /></ProtectedRoute>} 
          />

          <Route 
            path="/transactions" 
            element={<ProtectedRoute><TransactionList /></ProtectedRoute>} 
          />

          <Route 
            path="/reports" 
            element={<ProtectedRoute><Report /></ProtectedRoute>} 
          />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
