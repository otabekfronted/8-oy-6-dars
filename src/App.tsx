import APIHandler from "./components/APIHandler";
import CommonElements from "./components/CommonElements";
import GenericWrapper from "./components/GerricWrapper";
import StorageDemo from "./components/Storage";

function App() {
    return (
        <div>
            <h1>TypeScript Generics and Promises</h1>
            <APIHandler />
            <CommonElements />
            <GenericWrapper />
            <StorageDemo />
        </div>
    );
}

export default App;
