import { Component } from 'solid-js';

const InfoPanel: Component = () => {
    const btnStyle = () =>
        'bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded-md transition-colors';
    const rowStyle = () => 'flex flex-row my-3';
    return (
        <div class="max-w-fit bg-slate-300 px-3 py-4 rounded-md">
            <div class={rowStyle()}>
                <div class="mr-2">Node</div>
                <div>#12223124</div>
            </div>
            <div class={rowStyle()}>
                <div class="mr-2">Value</div>
                <input>[Input Box]</input>
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
