import { Component, For } from 'solid-js';
import Entity from '../components/entity/Entity';
import { state } from '../store/store';

const MainView: Component = () => {
    return (
        <svg width="100%" height="95vh">
            <For each={state.entities}>
                {(entity) => <Entity entity={entity} />}
            </For>
        </svg>
    );
};

export default MainView;
