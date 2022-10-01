import type {Component} from 'solid-js';

const Toolbar: Component = () => {
    return (
        <div class="border-solid border-2 border-black max-w-fit m-2">
            <div class="flex flex-col m-1 justify-items-center items-center">
                <div>
                    <i class="fa-solid fa-arrow-pointer"></i>
                </div>
                <div>
                    <i class="fa-regular fa-circle"></i>
                </div>
                <div>
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
