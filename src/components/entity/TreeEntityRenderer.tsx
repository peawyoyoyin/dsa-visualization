import { Component, For } from 'solid-js';
import { renderTree } from '../../MainView/RenderTree';
import { Entity, TreeEntity } from '../../store/store';

interface EntityRendererProps<T extends Entity> {
    entity: T;
}

const TreeEntityRenderer: Component<EntityRendererProps<TreeEntity>> = (
    props
) => {
    const renderInfo = () =>
        renderTree(props.entity.tree, {
            levelSpacing: 90,
            nodeSize: 40,
            baseNodeSpacing: 35,
            incrementalNodeSpacing: 5,
        });

    return (
        <g>
            <g>
                <For each={renderInfo().edges}>
                    {(item) => {
                        const [x1, y1] = item.end1;
                        const [x2, y2] = item.end2;
                        return (
                            <line
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="black"
                                stroke-width="1px"
                            />
                        );
                    }}
                </For>
            </g>

            <g>
                <For each={renderInfo().nodes}>
                    {(item) => {
                        const [x, y] = item.position;
                        return (
                            <g onDblClick={(e) => { }}>
                                <circle
                                    cx={x}
                                    cy={y}
                                    r="20"
                                    stroke="black"
                                    stroke-width="1px"
                                    fill="white"
                                />
                                <text
                                    x={x}
                                    y={y}
                                    fill="black"
                                    dominant-baseline="middle"
                                    text-anchor="middle"
                                    style={{ 'user-select': 'none' }}
                                >
                                    {item.nodeRef.label}
                                </text>
                            </g>
                        );
                    }}
                </For>
            </g>
        </g>
    );
};
export default TreeEntityRenderer;
