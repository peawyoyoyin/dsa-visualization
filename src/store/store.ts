import { createStore } from "solid-js/store";

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

interface TreeEntity extends BaseEntity {
  type: 'tree'
  tree: TreeNode
}

export type Entity = TreeEntity

export interface AppState {
  entities: Entity[]
}

export const [state, setState] = createStore<AppState>({
  entities: [
    {
      id: 1,
      type: 'tree',
      position: [100, 100],
      tree: {
        id: 1,
        label: '',
        children: [],
      },
    }
  ]
})