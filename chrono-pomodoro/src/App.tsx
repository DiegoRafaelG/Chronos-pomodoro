import {TimerIcon} from "lucide-react";
import './Styles/global.css';
import './Styles/theme.css';
import { Heading } from "./components/Heading";
export function App() {
  return (
    <>
     <Heading>
       <p>HISTORY</p>
       <button>
        <TimerIcon />
       </button>
     </Heading>
    </>
  )
};

