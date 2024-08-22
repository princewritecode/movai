import './index.css';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import appStore from './utils/appstore';
// Define the router with nested routes
function App()
{
  return (
    <div className="App">
      {/* <Header />
      <Outlet></Outlet> */}
      <Provider store={appStore}>
        <Body></Body>
      </Provider>
    </div>
  );
}
export default App;