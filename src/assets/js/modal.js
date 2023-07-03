document.addEventListener('alpine:init', () => {

    Alpine.data('modal', (ref) => ({
        open: false,
        ref: ref,
        dialogue: {
            ['@open-modal.window']() {
                if (this.$event.detail.ref == this.ref) this.open = true;
            },
            [':class']() {
                return {
                    'visible': this.open,
                    'invisible': !this.open
                };
            }
        },
        transitionSidebar: {
            [':class']() {
                return {
                    'right-0 opacity-100': this.open,
                    'right-[-100%] opacity-0': !this.open
                };
            }
        },
        init() {
            this.$watch('open', (value) => {
                document.body.style.overflow = value ? 'hidden' : 'auto';
            });
        }
    }));

});