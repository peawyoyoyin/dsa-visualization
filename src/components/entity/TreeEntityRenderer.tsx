import {Component, For} from 'solid-js';
import {Entity, setState, TreeEntity} from '../../store/store';

interface EntityRendererProps<T extends Entity> {
    entity: T;
}

const TreeEntityRenderer: Component<EntityRendererProps<TreeEntity>> = (
    props
) => {
    const edges = () => props.entity.elements.edges;
    const edgesKeys = () => Object.keys(edges());
    const nodes = () => props.entity.elements.nodes;
    const nodesKeys = () => Object.keys(nodes());
    const entityId = () => props.entity.id;

    return (
        <g>
            <g>
                <For each={edgesKeys()}>
                    {(key) => {
                        // idNode1, idNode2
                        const {end1, end2} = edges()[key];
                        const [x1, y1] = nodes()[end1].position;
                        const [x2, y2] = nodes()[end2].position;

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
                <For each={nodesKeys()}>
                    {(nodeKey) => {
                        const node = nodes()[nodeKey];
                        const [x, y] = node.position;
                        return (
                            <g
                                onDblClick={(e) => {
                                    setState(
                                        'selectState',
                                        'selectedNodeId',
                                        parseInt(nodeKey, 10)
                                    )
                                    setState(
                                        'selectState',
                                        'selectedEntityNodeId',
                                        entityId()
                                    )
                                }
                                }
                            >
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
                                    style={{'user-select': 'none'}}
                                >
                                    {node.label}
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
