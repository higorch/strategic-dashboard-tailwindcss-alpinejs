import { TreeNode, TreeCanvas } from 'butterfly-dag';
import 'butterfly-dag/pack/index.css';

class BaseNode extends TreeNode {
    constructor(opts) {
        super(opts);
    }
    draw = (opts) => {
        const novoElemento = document.createElement('div');
        novoElemento.className = `absolute w-[250px] h-[75px] bg-blue-600`;
        novoElemento.style.setProperty('top', opts.top + 'px');
        novoElemento.style.setProperty('left', opts.left + 'px');
        novoElemento.setAttribute('x-data', '');
        novoElemento.setAttribute(':id', "$id('node')");
        novoElemento.innerText = opts.options.desc;
        novoElemento.id = opts.id;

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

            this.canvas = new TreeCanvas({
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
                },
                layout: {
                    type: 'compactBox',
                    options: {
                        direction: 'TB',
                        getHeight(d) {
                            return 60;
                        },
                        getWidth(d) {
                            return 120;
                        },
                        getHGap(d) {
                            return 20;
                        },
                        getVGap(d) {
                            return 80;
                        },
                    }
                }
            });

        },
        add() {

            this.canvas.addNode({
                text: `Aqui é um texto`,
                Class: BaseNode,
                condition: 'and',
                desc: 'Aqui é uma descrição',
                endpoints: [{
                    id: 'top',
                    orientation: [0, -1],
                    pos: [0.5, 0]
                }, {
                    id: 'bottom',
                    orientation: [0, 1],
                    pos: [0.5, 0]
                }]
            });
        }
    }));

});