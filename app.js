Vue.component('btable', {
    props: {
        fields: Array
    },
    template: `
		<table class="table table-bordered table-vertical">
			<thead>
			<tr>
				<th v-for="field in fields" v-show="field.displayable">{{ field.title }}</th>
			</tr>
			</thead>
			<tbody>
			<slot></slot>
			</tbody>
		</table>
    `,
})

Vue.component('brow', {
    template: `
		<tr>
			<slot></slot>
		</tr>
    `
})

Vue.component('bcol', {
    props: ['colspan'],
    template: `
		<td :colspan="colspan">
			<slot></slot>
		</td>
    `
})

Vue.component('bcheckbox', {
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: {
        checked: Boolean,
        uniqueId: String,
    },
    template: `
		<div class="custom-control custom-checkbox">
			<input
					type="checkbox"
					class="custom-control-input"
					:id="uniqueId"
					:checked="checked"
					@change="$emit('change', $event.target.checked)"
			>
			<label class="custom-control-label" :for="uniqueId"></label>
		</div>
    `,
})

Vue.component('binput', {
    model: {
        prop: 'value',
        event: 'keyup',
    },
    props: ['value', 'disabled', 'mask'],
    template: `
		<input type="text" :value="value" class="form-control form-control-sm" :disabled="disabled">
    `,
    mounted() {
        let im = new Inputmask(this.mask)
        im.mask(this.$el);
    }
})

Vue.component('bbutton', {
    props: {
        disabled: Boolean,
        btn_class: String,
        name: String,
        element: Object,
        elementId: Number,
    },
    template: `
		<button type="button" :class="btn_class" @click="$emit('addSubRow', elementId)">
			{{ name }}
		</button>
    `
})

new Vue({
    el: '#app',

    data: {
        requests: [],
    },

    methods: {
        getSortedFieldsList: function (fields) {
            return _.sortBy(fields, f => f.sort);
        },
        getSortedElementsList: function (list) {
            list.elements.forEach(function (element) {
                element._props = [];
                element.props.forEach(function (prop, i) {
                    list.fields.forEach(function (field, f) {
                        if (prop.field === field.name) {
                            element._props[f] = prop;
                        }
                    });
                });
            });
            return list;
        },

        addSubRow: function (elementId) {
            this.products.splice((elementId + 1), 0, {
                disabled: false,
                editable: true,
                parent: elementId,
                _props: [
                    {field: 'product_weight', value: 0},
                    {field: 'product_quantity', value: 0},
                ]
            });

            this.products[elementId].subRows++;
        },
        changeSubRowsState: function (productId, checked) {
            this.products.forEach(function (product, i) {
                if (productId === product.parent) {
                    product.disabled = !checked
                }
            })
        },
        getUniqueId: function (element, id, checked) {
            element.uniqueId = 'elem_' + new Date().getTime() + id
            element.disabled = !checked
            this.changeSubRowsState(id, checked)
            return element.uniqueId;
        }
    },

    mounted() {
        let self = this;
        axios.get('data.php').then(function (response) {
            return response.data;
        }).then(function (data) {
            self.requests = self.getSortedElementsList(data.requests);
        });
    },
})