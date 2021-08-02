import "./App.css";
import { Message } from "./Message";


export function App(props) {
    return (
        <div className="App">            <div>App component text</div>
            <Message message={props.message} />
        </div>
    );
}
