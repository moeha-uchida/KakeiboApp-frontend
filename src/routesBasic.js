import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import TopPage from './App';
import Edit from './edit/KakeiboFormView';
import Goal from './goal/Goal';
import Settings from './settings/Settings'

const routesBasic = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<TopPage />} />      
            <Route path="/record" element={<Edit />}/>
            <Route path="/nextTarget" element={<Goal />}/>
            <Route path="/settings" element={<Settings/>}/>
        </>
    )
);

export default routesBasic;