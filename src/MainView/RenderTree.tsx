interface TreeNode {
  id: number
  label: string
  children: TreeNode[]
}

type Coordinate = [number, number]

interface EdgeRenderInfo {
  end1: Coordinate
  end2: Coordinate

  node1Ref: TreeNode
  node2Ref: TreeNode
}

interface NodeRenderInfo {
  position: Coordinate
  nodeRef: TreeNode
}

interface TreeRenderInfo {
  edges: EdgeRenderInfo[]
  nodes: NodeRenderInfo[]
}

interface RenderTreeOptions {
  nodeSize: number
  baseNodeSpacing: number
  incrementalNodeSpacing: number
  levelSpacing: number
}

const calculateY = (level: number, levelSpacing: number) => level * levelSpacing

export const renderTree = (root: TreeNode, options: RenderTreeOptions): TreeRenderInfo => {
  const { nodeSize, baseNodeSpacing, incrementalNodeSpacing, levelSpacing } = options
  
  const stack = [root]

  const vertices = new Map<number, TreeNode>()
  const rawEdges = []

  while (stack.length > 0) {
    const top = stack.pop()

    vertices.set(top.id, top)
    for(const child of top.children) {
      rawEdges.push([top.id, child.id])
      stack.push(child)
    }
  }

  let maxLevel = 0
  const ys = new Map<number, number>()
  const findY = (node: TreeNode, level = 0) => {
    maxLevel = Math.max(level, maxLevel)
    ys.set(node.id, calculateY(level, levelSpacing))
    
    for(const child of node.children) {
      findY(child, level+1)
    }
  }
  findY(root)

  const xs = new Map<number, number>()
  const findX = (node: TreeNode, leftOffset: number, level = 0): [number, number] => {
    if (node.children.length == 0) {
      xs.set(node.id, leftOffset)
      const selfLeft = leftOffset - nodeSize / 2
      const selfRight = leftOffset + nodeSize / 2
      return [selfLeft, selfRight]
    }

    let leftBoundary = Infinity
    let rightBoundary = -1
    let currentLeftOffset = leftOffset
    for(const child of node.children) {
      const [childLeft, childRight] = findX(child, currentLeftOffset, level+1)

      leftBoundary = Math.min(childLeft, leftBoundary)
      rightBoundary = Math.max(childRight, rightBoundary)

      currentLeftOffset = childRight + baseNodeSpacing + (incrementalNodeSpacing * (maxLevel - level + 1))
    }

    const selfX = (leftBoundary + rightBoundary) / 2
    xs.set(node.id, selfX)

    return [leftBoundary, rightBoundary]
  }
  findX(root, 0)

  const nodes: NodeRenderInfo[] = []
  for (const [id, node] of vertices) {
    nodes.push({
      nodeRef: node,
      position: [xs.get(id), ys.get(id)],
    })
  }
  
  const edges: EdgeRenderInfo[] = []
  for (const [nodeId1, nodeId2] of rawEdges) {
    edges.push({
      end1: [xs.get(nodeId1), ys.get(nodeId1)],
      end2: [xs.get(nodeId2), ys.get(nodeId2)],

      node1Ref: vertices.get(nodeId1),
      node2Ref: vertices.get(nodeId2)
    })
  }

  return {
    nodes,
    edges
  }
}
