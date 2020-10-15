Vue.component('bootstrap-table', {
    props: {
        fields: Array,
        elements: Array,
    },
    template: `
		<table class="table table-bordered table-vertical" v-if="elements.length > 0">
			<thead>
			<tr>
				<th
						v-for="field in fields"
						v-show="field.displayable"
				>{{ field.title }}</th>
			</tr>
			</thead>
			<tbody>
			<bootstrap-table-row
					v-for="(element,i) in elements"
					:element=element
					:key="i"
					:elementId="i"
					:fields="fields"
					@addSubRow="$root.addSubRow"
					@changeSubRowsState="$root.changeSubRowsState"
			></bootstrap-table-row>
			</tbody>
		</table>
    `,
})

Vue.component('bootstrap-table-row', {
    props: {
        element: Object,
        elementId: Number,
        fields: Array,
    },
    template: `
		<tr>
			<template v-if="element.parent > -1">
				<td v-for="prop in element._props">
					<bootstrap-input
							v-model="prop.value"
							:disabled="element.disabled"
					></bootstrap-input>
				</td>
			</template>
			<template v-else>
				<td
						:rowspan="fields[p].duplicatable ? 1 : (element.subRows+1)"
						v-for="(prop, p) in element._props"
						v-show="fields[p].displayable"
				>
					<template v-if="element.editable && fields[p].editable">
						<template v-if="fields[p].type === 'checkbox'">
							<bootstrap-checkbox
									:uniqueId="getUniqueId(element,prop.value)"
									:checked="prop.value"
									v-model="prop.value"
							></bootstrap-checkbox>
						</template>
						<template v-if="fields[p].type === 'input'">
							<bootstrap-input
									v-model="prop.value"
									:disabled="element.disabled"
									:mask="fields[p].mask"
							></bootstrap-input>
						</template>
						<template v-if="fields[p].type === 'button'">
							<bootstrap-button
									:disabled="false"
									:btn_class="'btn btn-sm btn-icon btn-outline-secondary'"
									:name="'+'"
									:element="element"
									:elementId="elementId"
									@addSubRow="$emit('addSubRow', elementId)"
									v-show="!element.disabled"
							>{{ prop.value }}</bootstrap-button>
						</template>
					</template>
					<template v-else>
						<template v-if="fields[p].displayValue">
							{{ prop.value }}
						</template>
					</template>
				</td>
			</template>
		</tr>
    `,
    methods: {
        getUniqueId: function (element, checked) {
            element.uniqueId = 'elem_' + new Date().getTime() + Math.round(Math.random());
            element.disabled = !checked;
            this.$emit('changeSubRowsState', this.elementId, checked)
            return element.uniqueId;
        }
    },
})

Vue.component('bootstrap-checkbox', {
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

Vue.component('bootstrap-input', {
    model: {
        prop: 'value',
        event: 'keyup',
    },
    props: ['value', 'disabled', 'mask'],
    template: `
		<input type="text" :value="value" class="form-control form-control-sm" :disabled="disabled"
			   @keyup="$emit('keyup', $event.target.value)">
    `,
    mounted() {
        let im = new Inputmask(this.mask)
        im.mask(this.$el);
    }
})

Vue.component('bootstrap-button', {
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
        fields: [],
        products: [],
    },

    methods: {
        getSortedFieldList: function (fields) {
            return _.sortBy(fields, f => f.sort);
        },
        getSortedProductList: function (products) {
            let fields = this.fields;

            products.forEach(function (product) {
                product._props = [];
                product.props.forEach(function (prop, i) {
                    fields.forEach(function (field, f) {
                        if (prop.field === field.name) {
                            product._props[f] = prop;
                        }
                    });
                });
            });

            return products;
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
            console.log(productId, checked)
            this.products.forEach(function (product, i) {
                if (productId === product.parent) {
                    product.disabled = !checked
                }
            })
        }
    },

    mounted() {
        let self = this;
        axios.get('data.php').then(function (response) {
            return response.data;
        }).then(function (data) {
            self.fields = self.getSortedFieldList(data.fields);
            return data.products;
        }).then(function (products) {
            self.products = self.getSortedProductList(products);
        }).then(function () {
            console.log('Data loaded');
        });
    },
})