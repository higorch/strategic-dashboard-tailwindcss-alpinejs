document.addEventListener('alpine:init', () => {

    Alpine.data('modal', (ref) => ({
        open: false,
        ref: ref,
        dialogue: {
            ['@open-modal.window']() {
                this.$event.detail.ref == this.ref ? this.open = true : this.open = false;
            },
            [':class']() {
                return {
                    'visible': this.open,
                    'invisible': !this.open
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