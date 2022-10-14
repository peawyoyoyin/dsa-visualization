import { Component, For, JSX } from 'solid-js';
import Entity from '../components/entity/Entity';
import { setState, state } from '../store/store';

const MainView: Component = () => {

    const onDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = (e) => {
        if (state.selectState.selectedEntityId !== null) {
            const [ox, oy] = state.selectState.dragOffset
            setState(
                'entities',
                (entity) => entity.id === state.selectState.selectedEntityId,
                'position',
                [e.clientX - ox, e.clientY - oy]
            )
        }
    }

    const onStopDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = () => {
        setState('selectState', 'selectedEntityId', null)
    }

    return (
        <svg
            width="100%"
            height="95vh"
            onMouseMove={onDrag}
            onMouseUp={onStopDrag}
            onMouseLeave={onStopDrag}
        >
            <For each={state.entities}>
                {(entity) => <Entity entity={entity} />}
            </For>
        </svg>
    );
};

export default MainView;
