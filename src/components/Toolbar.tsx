import type {Component} from 'solid-js';

const Toolbar: Component = () => {
    const onClickSelectTool = () => {
        alert("Select Tool Clicked!")
    }

    const onClickPointer = () => {
        alert("Pointer Clicked!")
    }

    const onClickNode = () => {
        alert("Node Clicked!")
    }
    const btnStyle = () => "hover:bg-slate-300 px-2 rounded-md transition-colors"
    return (
        <div class="border-solid border-2 border-black max-w-fit m-2 p-1">
            <div class="flex flex-col justify-items-center items-center">
                <button onClick={onClickSelectTool} class={btnStyle()}>
                    <i class="fa-solid fa-arrow-pointer"></i>
                </button>
                <button onClick={onClickNode} class={btnStyle()}>
                    <i class="fa-regular fa-circle"></i>
                </button>
                <button onClick={onClickPointer} class={btnStyle()}>
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
        </div>

    );
}


export default Toolbar;
