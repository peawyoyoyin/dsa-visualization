import { Component, createSignal, JSX, Match, Switch } from 'solid-js';
import { Entity as IEntity, setState } from '../../store/store';
import TreeEntityRenderer from './TreeEntityRenderer';

interface EntityProps {
    entity: IEntity;
}

const Entity: Component<EntityProps> = (props) => {
    const entityId = () => props.entity.id
    const x = () => props.entity.position[0]
    const y = () => props.entity.position[1]

    const onStartDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = (e) => {
        setState('selectState', 'selectedEntityId', entityId())
        const newOffset = [e.clientX - x(), e.clientY - y()] as [number, number]
        setState('selectState', 'dragOffset', newOffset)
    };

    return (
        <svg
            x={x()}
            y={y()}
            overflow="visible"
            enable-background="true"
            style={{ cursor: 'pointer' }}
            onMouseDown={onStartDrag}
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
