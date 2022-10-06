import { Component, createSignal, JSX, Match, Switch } from 'solid-js';
import { Entity as IEntity, state } from '../../store/store';
import TreeEntityRenderer from './TreeEntityRenderer';

interface EntityProps {
    entity: IEntity;
}

const Entity: Component<EntityProps> = (props) => {
    const [isDragged, setIsDragged] = createSignal(false)
    const [offset, setOffset] = createSignal([0, 0])

    const x = () => props.entity.position[0]
    const y = () => props.entity.position[1]

    const onStartDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = (e) => {
        setIsDragged(true)
        const newOffset = [e.clientX - x(), e.clientY - y()]
        setOffset(newOffset)
    };

    const onDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = (e) => {
        if (isDragged()) {
            const [ox, oy] = offset()
            if (state.entities.find(entity => entity.id === props.entity.id)) {
                state.entities.find(entity => entity.id === props.entity.id).position = [e.clientX - ox, e.clientY - oy]
            }
            // setState(
            //     'entities',
            //     (entity) => entity.id === props.entity.id,
            //     'position',
            //     [e.clientX - ox, e.clientY - oy]
            // )
        }
    }

    const onStopDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = (e) => {
        setIsDragged(false)
    }

    return (
        <svg
            x={x()}
            y={y()}
            overflow="visible"
            enable-background="true"
            style={{ cursor: 'pointer' }}
            onMouseDown={onStartDrag}
            onMouseMove={onDrag}
            onMouseUp={onStopDrag}
            onMouseLeave={onStopDrag}
        >
            <Switch>
                <Match when={props.entity.type === 'tree'}>
                    <TreeEntityRenderer entity={props.entity} />
                </Match>
            </Switch>
        </svg>
    );
};

export default Entity;
