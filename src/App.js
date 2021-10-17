import { useMediaQuery } from 'react-responsive';
import {Desktop} from "./components/desktop/desktop";
import {Mobile} from "./components/mobile/mobile";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const isMobileDevice = useMediaQuery({
        query: "(max-device-width: 480px)",
    });

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
    });
  return (
    <div className="App">
      {isMobileDevice && <Mobile/>}
      {isDesktop && <Desktop/>}
    </div>
  );
}

export default App;
