import {createStore} from 'solid-js/store';

type Position = [x: number, y: number];

type EntityType = 'tree' | 'graph';

interface BaseEntity {
    id: number;
    type: EntityType;
    position: Position;
}

interface TreeNode {
    id: number;
    label: string;
    children: TreeNode[];
}

interface Edge {
    [id: number]: {
        end1: number;
        end2: number;
    };
}

interface Element {
    nodes: any;
    edges: Edge;
}

export interface TreeEntity extends BaseEntity {
    type: 'tree';
    elements: Element;
}

export type Entity = TreeEntity;

interface SelectState {
    selectedEntityId: BaseEntity['id'];
    dragOffset: [number, number];
    selectedNodeId: number;
    selectedEntityNodeId: number,
}

export interface AppState {
    selectState: SelectState;
    entities: Entity[];
}

export const [state, setState] = createStore<AppState>({
    selectState: {
        selectedEntityId: null,
        selectedEntityNodeId: null,
        dragOffset: [0, 0],
        selectedNodeId: null,
    },
    entities: [
        {
            id: 1,
            type: 'tree',
            position: [100, 100],
            elements: {
                nodes: {
                    1: {
                        parent: null,
                        label: 'A',
                        position: [0, 100],
                        children: [2, 3],
                        edges: [1, 2],
                    },
                    2: {
                        parent: 1,
                        label: 'B',
                        position: [50, 50],
                        children: [],
                        edges: [1],
                    },
                    3: {
                        parent: 1,
                        label: 'C',
                        position: [50, 150],
                        children: [],
                        edges: [2],
                    },
                },
                edges: {
                    1: {
                        end1: 1, // A, idNode1
                        end2: 2, // B, idNode2
                    },
                    2: {
                        end1: 1, // A
                        end2: 3, // C
                    },
                },
            },
        },
    ],
});
