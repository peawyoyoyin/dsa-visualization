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
    return (
        <div class="border-solid border-2 border-black max-w-fit m-2">
            <div class="flex flex-col m-1 justify-items-center items-center">
                <button onClick={onClickSelectTool}>
                    <i class="fa-solid fa-arrow-pointer"></i>
                </button>
                <button onClick={onClickNode}>
                    <i class="fa-regular fa-circle"></i>
                </button>
                <button onClick={onClickPointer}>
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
        </div>
    );
}

export default Toolbar;
