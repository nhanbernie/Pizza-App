import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import AuthLayout from './shares/AuthLayout';
import { HomeProvider } from './hooks/useHome';


function App() {
  return (
    <div className="App">
      <HomeProvider>
        <AuthLayout />
      </HomeProvider>
    </div>
  );
}

export default App;
