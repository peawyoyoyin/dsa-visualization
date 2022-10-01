import { Component, For } from "solid-js";
import { renderTree } from "./RenderTree";

const renderInfo = renderTree({
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
              children: []
            },
            {
              id: 13,
              label: 'Z2',
              children: []
            }
          ]
        }
      ]
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
              children: []
            },
            {
              id: 36,
              label: 'F',
              children: []
            },
            {
              id: 37,
              label: 'G',
              children: []
            }
          ]
        },
        {
          id: 26,
          label: 'F',
          children: []
        },
        {
          id: 27,
          label: 'G',
          children: []
        }
      ]
    },
    {
      id: 4,
      label: 'D',
      children: [
        {
          id: 5,
          label: 'E',
          children: []
        },
        {
          id: 6,
          label: 'F',
          children: []
        },
        {
          id: 7,
          label: 'G',
          children: []
        }
      ]
    }
  ]
}, {
  levelSpacing: 90,
  nodeSize: 40,
  baseNodeSpacing: 35,
  incrementalNodeSpacing: 5
})

const MainView: Component = () => {
  const { nodes, edges } = renderInfo

  return (
    <svg width="100%" height="95vh">
      <svg x="100" y="100" overflow="visible">
        <g>
          <For each={edges}>
            {
              (item) => {
                const [x1, y1] = item.end1
                const [x2, y2] = item.end2
                return (
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" stroke-width="1px" />
                )
              }
            }
          </For>
        </g>

        <g>
          <For each={nodes}>
            {
              (item) => {
                const [x, y] = item.position
                return (
                  <circle cx={x} cy={y} r="20" stroke="black" stroke-width="1px" fill="white" />
                )
              }
            }
          </For>
        </g>
        <g>
          <For each={nodes}>
            {
              (item) => {
                const [x, y] = item.position
                return (
                  <text
                    x={x}
                    y={y}
                    fill="black"
                    dominant-baseline="middle"
                    text-anchor="middle"
                  >
                    {item.nodeRef.label}
                  </text>
                )
              }
            }
          </For>
        </g>
      </svg>
    </svg>
  )
}

export default MainView;