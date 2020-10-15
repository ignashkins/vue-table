Vue.component('vtable', {
   template: `
        <table class="table table-vertical table-bordered"><slot></slot></table>
   `
});

Vue.component('vtr', {
    template: `
        <tr><slot></slot></tr>
   `
});

Vue.component('vtd', {
    template: `
        <td><slot></slot></td>
   `
});

new Vue({
    el: '#app',
    data: {
        elements: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Leon'},
            {id: 3, name: 'Pugna'},
        ]
    },
    methods: {
        addColumn: function(id) {
            this.elements.push({
                id: this.elements.length + 1, name: 'New Man'
            })
        }
    }
})