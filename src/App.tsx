import type { Component } from 'solid-js';
import MainView from './MainView/MainView';
import Toolbar from "./components/Toolbar";

const App: Component = () => {
  return (
      <div>
        <div class="py-2 px-3 bg-neutral-200 flex justify-between">
          <span>
            DSA
          </span>
        </div>
        <MainView />
        <Toolbar/>
      </div>
  );
};

export default App;
