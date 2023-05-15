import { Node, Canvas } from 'butterfly-dag';
import 'butterfly-dag/pack/index.css';

class BaseNode extends Node {
    draw(obj) {

        const novoElemento = document.createElement('div');
        novoElemento.innerText = obj.options.desc;
        novoElemento.id = obj.options.id;
        novoElemento.className = `absolute w-[250px] h-[75px] bg-blue-600`;

        return novoElemento;
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

            this.canvas.addNode({
                id: 'node-' + this.canvas.nodes.length,
                text: `Aqui é um texto`,
                Class: BaseNode,
                condition: 'and',
                desc: 'Aqui é uma descrição',
                endpoints: [{
                    id: 'top',
                    orientation: [0, -1]
                }, {
                    id: 'bottom',
                    orientation: [0, 1]
                }]
            });
        }
    }));

});