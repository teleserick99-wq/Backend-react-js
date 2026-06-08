import { BrowserRouter} from 'react-router-dom';
import appRoutes from './routes/appRoutes';


export default function App() {
  return(
    <BrowserRouter>
    <appRoutes/>
    </BrowserRouter>

  )
}
