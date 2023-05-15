import { Node, Canvas } from 'butterfly-dag';
import 'butterfly-dag/pack/index.css';

function setComponent(component) {
    const element = document.createElement('div');
    element.innerHTML = component.trim();

    return element.firstChild;
}

class BaseNode extends Node {
    draw(obj) {

        var component = `
            <div class="flex flex-col absolute w-[230px] rounded-md bg-slate-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-neutral-950">
                <div class="flex px-[15px] py-[15px]">
                    <h3 class="text-base font-semibold text-slate-500 dark:text-slate-400">${obj.options.title}</h3>
                </div>
                <div class="flex px-[15px] py-[5px] border-t-[1px] border-slate-200 dark:border-slate-700">
                    <small class="text-slate-500 dark:text-slate-400">321</small>
                </div>
            </div>
        `;

        return setComponent(component);
    }
}

document.addEventListener('alpine:init', () => {

    Alpine.data('diagram', () => ({
        canvas: '',
        init() {
            this.run();
        },
        run() {

            this.canvas = new Canvas({
                root: this.$refs.render,
                disLinkable: true,
                linkable: true,
                draggable: true,
                zoomable: true,
                moveable: true,
                theme: {
                    edge: {
                        shapeType: 'Manhattan',
                        arrow: true
                    }
                }
            });

        },
        add() {

            var endpoints = [];

            if (this.canvas.nodes.length === 0) {
                endpoints = [{
                    id: 'bottom',
                    orientation: [0, 1]
                }];
            } else {
                endpoints = [{
                    id: 'top',
                    orientation: [0, -1]
                }, {
                    id: 'bottom',
                    orientation: [0, 1]
                }];
            }

            this.canvas.addNode({
                id: 'node-' + this.canvas.nodes.length,
                Class: BaseNode,
                title: `Aqui é um texto`,
                desc: 'Aqui é uma descrição',
                endpoints: endpoints
            });
        }
    }));

});