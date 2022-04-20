import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IRootStore } from './components/interface/interface';
import storeProvider from './components/model_store/store_provider';

const StoreContext = React.createContext<IRootStore | any>(null)

export const useRootStore = () => React.useContext(StoreContext)

const StoreProvider = ({ children }: { children: ReactElement }) => {
    return (
        <StoreContext.Provider value={ storeProvider }>
            { children }
        </StoreContext.Provider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
