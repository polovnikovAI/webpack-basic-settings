import { FC } from 'react';
import * as classes from './App.module.scss';

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <div>
            <h1 className={classes.smth_class}>hello world</h1>
        </div>
    );
};

export default App;
