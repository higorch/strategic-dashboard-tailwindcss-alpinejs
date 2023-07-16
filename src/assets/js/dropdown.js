document.addEventListener('alpine:init', () => {

    Alpine.data('dropdown', (placement = 'left') => ({
        open: false,
        init() {
            var referenceEl = this.$refs.referenceDropdown;
            var floatingEl = this.$refs.floatingDropdown;
            autoUpdate(referenceEl, floatingEl, () => {
                computePosition(referenceEl, floatingEl, {
                    placement: placement,
                    middleware: [flip()]
                }).then(({ x, y }) => {
                    Object.assign(floatingEl.style, {
                        top: `${y}px`,
                        left: `${x}px`
                    });
                });
            });
        }
    }));

});