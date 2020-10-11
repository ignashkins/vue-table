Vue.component('product-table', {
    props: {
        data: Object
    },
    template: `
		<table class="table table-bordered table-striped">
		    <thead>
		        <tr>
		            <th style="width: 40px;"></th>
		            <th>Название</th>
		            <th>Вес</th>
		            <th>Кол-во</th>
                </tr>
            </thead>
		    <tbody>
		        <product-row v-for="product in data.products" :product=product :fields="data.fields"></product-row>
            </tbody>
		</table>
	`,
    data: function () {
        return {}
    },
})

Vue.component('product-row', {
    props: {
        product: Object,
        fields: Array,
    },
    template: `
		<tr>
			<td v-for="prop in product.props">
			    <template v-if="product.editable && fields.indexOf(prop.fieldName) > -1">
			        <template v-if="prop.fieldType == 'checkbox'">
                        <bootstrap-checkbox :uniqueId="getUniqueId(product)" v-model="prop.value"></bootstrap-checkbox>
                    </template>
                    <template v-if="prop.fieldType == 'input'">
                        <bootstrap-input v-model="prop.value"></bootstrap-input>
                    </template>
                </template>
                <template v-else>{{ prop.value }}</template>
			</td>
		</tr>
	`,
    data: function () {
        return {}
    },
    methods: {
        getUniqueId: function(product) {
            product.uniqueId = 'product_' + product.id //+ Math.round(Math.random());

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
        checked:  Boolean,
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
    props: {
        value: Number,
    },
    template: `
        <input type="text" :value="value" class="form-control form-control-sm"
            @keyup="$emit('keyup', $event.target.value)"
        >
    `,
})

new Vue({
    el: '#app',
    data: {
        data: {}
    },
    mounted() {
        let self = this;
        axios.get('data.php').then(function (response) {
            self.data = response.data;
        })
    }
})