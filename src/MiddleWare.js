import { BrowserRouter,Switch } from "react-router-dom";
import GeneralRoutes from './routes/generalRoutes';


function AppWrapper() {
  return (
    <BrowserRouter>
      <Switch>
        <GeneralRoutes/>
      </Switch>
    </BrowserRouter>
  );
}

export default AppWrapper;
