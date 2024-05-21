import "./App.css";
import DataFetching from "./components/DataFetching";
import { QueryClient, QueryClientProvider } from "react-query";
import DataAdd from "./components/DataAdd";
import DataUpdate from "./components/DataUpdate";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <DataAdd />
            <DataUpdate />
            <DataFetching />
        </QueryClientProvider>
    );
}

export default App;