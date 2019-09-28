import React from 'react';
import { toast } from 'react-toastify';
import Dashboard from './Dashboard/Dashboard';

toast.configure({
  position: 'bottom-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  rtl: false,
});

const App = () => <Dashboard />;

export default App;
