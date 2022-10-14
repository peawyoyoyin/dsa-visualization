import type { Component } from 'solid-js';
import MainView from './MainView/MainView';
import Toolbar from './components/Toolbar';
import InfoPanel from './components/InfoPanel';

const App: Component = () => {
    return (
        <div>
            <div class="fixed w-full py-2 px-3 bg-neutral-200 flex justify-between select-none">
                <span>DSA</span>
            </div>
            <Toolbar />
            <div>
                <MainView />
                <InfoPanel />
            </div>
        </div>
    );
};

export default App;
