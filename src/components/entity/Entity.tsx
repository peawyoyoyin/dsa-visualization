import { Component, createSignal, JSX, Match, Switch } from 'solid-js';
import { Entity as IEntity, setState } from '../../store/store';

interface EntityProps {
    entity: IEntity;
}

const Entity: Component<EntityProps> = (props: EntityProps) => {
    const [isDragged, setIsDragged] = createSignal(false)
    const [offset, setOffset] = createSignal([0, 0])

    const x = () => props.entity.position[0]
    const y = () => props.entity.position[1]

    const onStartDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = (e) => {
        e.preventDefault()
        setIsDragged(true)
        const newOffset = [e.clientX - x(), e.clientY - y()]
        setOffset(newOffset)
    };

    const onDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = (e) => {
        e.preventDefault()
        if (isDragged()) {
            const [ox, oy] = offset()
            setState(
                'entities',
                (entity) => entity.id === props.entity.id,
                'position',
                [e.clientX - ox, e.clientY - oy]
            )
        }
    }

    const onStopDrag: JSX.EventHandler<SVGSVGElement, MouseEvent> = (e) => {
        e.preventDefault()
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
                    <text style={{ 'user-select': 'none' }}>tree</text>
                </Match>
            </Switch>
        </svg>
    );
};

export default Entity;
