
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import Routing from './Components/Routing';
import Loader from './Components/Common/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import { useSelector } from 'react-redux';
import { store } from './redux/store';


function App() {
  const {showLoader}=useSelector(store=>store.general)
  return (
    <>
     <ToastContainer />
        {showLoader && <Loader/>}
    <Routing/>
    </>
  );
}

export default App;
