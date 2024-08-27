import Body from "./components/Body";
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
    <div >
          
          <Body/>
       
    </div>
    </Provider>
  );
}

export default App;
