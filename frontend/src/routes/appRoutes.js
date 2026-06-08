import { Route, Routes} from 'react-router-dom';
import Cidade from '../views/Cidade/index';
import Pessoa from '../views/Pessoas/index';

export default function appRoutes() {
    return (
        <Routes>
            <Route patch="/" exact element={<Cidade/>} />
            <Route patch="/Pessoa" element={<Pessoa/>} />
        </Routes>
    )
}