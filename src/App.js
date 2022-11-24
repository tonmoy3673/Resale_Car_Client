
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/router';

function App() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
