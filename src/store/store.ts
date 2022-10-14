import { createStore } from 'solid-js/store';

type Position = [x: number, y: number]

type EntityType = 'tree' | 'graph'

interface BaseEntity {
    id: number
    type: EntityType
    position: Position
}

interface TreeNode {
    id: number
    label: string
    children: TreeNode[]
}

export interface TreeEntity extends BaseEntity {
    type: 'tree'
    tree: TreeNode
}

export type Entity = TreeEntity;

interface SelectState {
    selectedEntityId: BaseEntity['id']
    dragOffset: [number, number]
}

export interface AppState {
    selectState: SelectState
    entities: Entity[]
}

export const [state, setState] = createStore<AppState>({
    selectState: {
        selectedEntityId: null,
        dragOffset: [0, 0]
    },
    entities: [
        {
            id: 1,
            type: 'tree',
            position: [100, 100],
            tree: {
                id: 1,
                label: 'A',
                children: [
                    {
                        id: 2,
                        label: 'B',
                        children: [
                            {
                                id: 11,
                                label: 'Z',
                                children: [
                                    {
                                        id: 12,
                                        label: 'Z1',
                                        children: [],
                                    },
                                    {
                                        id: 13,
                                        label: 'Z2',
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        label: 'C',
                        children: [
                            {
                                id: 25,
                                label: 'E',
                                children: [
                                    {
                                        id: 35,
                                        label: 'E',
                                        children: [],
                                    },
                                    {
                                        id: 36,
                                        label: 'F',
                                        children: [],
                                    },
                                    {
                                        id: 37,
                                        label: 'G',
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: 26,
                                label: 'F',
                                children: [],
                            },
                            {
                                id: 27,
                                label: 'G',
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 4,
                        label: 'D',
                        children: [
                            {
                                id: 5,
                                label: 'E',
                                children: [],
                            },
                            {
                                id: 6,
                                label: 'F',
                                children: [],
                            },
                            {
                                id: 7,
                                label: 'G',
                                children: [],
                            },
                        ],
                    },
                ],
            },
        },
    ],
});
