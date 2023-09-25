import { Provider } from 'react-redux';
import Header from './components.js/Header';
import Body from './components.js/Body';
import './App.css';
import store from './components.js/utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components.js/Maincontainer';
import Watchpage from './components.js/Watchpage';

function App() {

  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Maincontainer/>,

        },
        {
          path:"watch",
          element:<Watchpage/>,

        }
      ]

      
    }
  ])
  return (
    <Provider store={store} >
    <div className="App">
     <Header/>
     <RouterProvider router={appRouter}/>
    </div>
     </Provider>
  );
}

export default App;
