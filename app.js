Vue.component('bootstrap-table', {
    template: `
		<table class="table table-bordered table-striped">
			<thead>
			<tr>
				<th v-for="field in fields" v-show="field.displayable">{{ field.title }}</th>
			</tr>
			</thead>
			<tbody>
			<bootstrap-table-row v-for="product in products" :product=product :fields="fields"></bootstrap-table-row>
			</tbody>
		</table>
    `,
    data: function () {
        return {
            fields: [],
            products: [],
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
        });
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
        }
    }
})

Vue.component('bootstrap-table-row', {
    props: {
        product: Object,
        fields: Array,
    },
    template: `
		<tr>
			<td v-for="(prop, p) in product._props" v-show="fields[p].displayable">
				<template v-if="product.editable && fields[p].editable">
					<template v-if="fields[p].type === 'checkbox'">
						<bootstrap-checkbox :uniqueId="getUniqueId(product,prop.value)" v-model="prop.value"></bootstrap-checkbox>
					</template>
					<template v-if="fields[p].type === 'input'">
						<bootstrap-input v-model="prop.value" :disabled="product.disabled"></bootstrap-input>
					</template>
				</template>
				<template v-else>
					<template v-if="fields[p].displayValue">
						{{ prop.value }}
					</template>
				</template>
			</td>
		</tr>
    `,
    data: function () {
        return {}
    },
    methods: {
        getUniqueId: function (product, checked) {
            product.uniqueId = 'elem_' + new Date().getTime() + Math.round(Math.random());
            product.disabled = !checked;
            return product.uniqueId;
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
    props: ['value', 'disabled'],
    template: `
		<input type="text" :value="value" class="form-control form-control-sm" :disabled="disabled"
			   @keyup="$emit('keyup', $event.target.value)">
    `
})

new Vue({
    el: '#app'
})