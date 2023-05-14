import { TreeNode } from 'butterfly-dag';
import { TreeCanvas } from 'butterfly-dag';

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
        novoElemento.setAttribute(':id', "$id('eleme')");
        novoElemento.innerText = opts.options.desc;
        novoElemento.id = opts.id;

        return novoElemento;
    }
}

document.addEventListener('alpine:init', () => {

    Alpine.data('diagram', () => ({
        canvas: '',
        data: {
            nodes: {}
        },
        init() {
            this.run();
        },
        run() {
            this.canvas = new TreeCanvas({
                root: this.$refs.render,
                disLinkable: true, // 可删除连线
                linkable: true,    // 可连线
                draggable: true,   // 可拖动
                zoomable: true,    // 可放大
                moveable: true,    // 可平移
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

            // this.canvas.draw(this.data, {}, () => {
            //     this.canvas.focusCenterWithAnimate();
            // });
        },
        add() {
            this.canvas.addNode({
                text: `我是id为的节点`,
                Class: BaseNode,
                condition: 'and',
                desc: '请选择指标',
                endpoints: [{
                    id: 'left',
                    orientation: [-1, 0],
                    pos: [0, 0.5]
                }, {
                    id: 'bottom',
                    orientation: [0, 1],
                    pos: [0.5, 0]
                }],
            });
        }
    }));

});