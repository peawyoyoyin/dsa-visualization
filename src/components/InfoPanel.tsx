import { Component } from 'solid-js';
import {state} from '../store/store'

const InfoPanel: Component = () => {
    const btnStyle = () =>
        'bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded-md transition-colors';
    const rowStyle = () => 'flex flex-row my-3';

    const nodeId = () => state.selectState.selectedNodeId;
    const entityNodeId = () => state.selectState.selectedEntityNodeId;
    const entity = () => state.entities.find(e => e.id === entityNodeId());
    const nodeValue = () => entity()?.elements?.nodes[nodeId()].label;

    return (
        <div class="fixed top-11 right-2 max-w-fit bg-slate-300 px-3 py-4 rounded-md">
            <div class={rowStyle()}>
                <div class="mr-2">Node</div>
                <div>#12223124</div>
            </div>
            <div class={rowStyle()}>
                <div class="mr-2">Value</div>
                <input value={nodeValue()}>[Input Box]</input>
            </div>
            <div class={rowStyle()}>
                <button class={btnStyle()}>+ Child Left</button>
                <button class={`${btnStyle()} mx-3`}>Child Right +</button>
                <button class={btnStyle()}>Delete</button>
            </div>
        </div>
    );
};

export default InfoPanel;
