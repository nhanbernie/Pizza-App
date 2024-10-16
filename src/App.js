import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import AuthLayout from './shares/layout/AuthLayout';
import { HomeProvider } from './hooks/useHome';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomeProvider>
          <AuthLayout />
        </HomeProvider>
      </Provider>
    </div>
  );
}

export default App;
