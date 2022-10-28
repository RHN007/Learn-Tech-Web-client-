import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { routes } from './Routes/Routes';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`} >
       <button onClick={toggleTheme}>Toggle Theme</button>
       <RouterProvider router={routes}></RouterProvider>
      
    </div>
  );
}

export default App;
