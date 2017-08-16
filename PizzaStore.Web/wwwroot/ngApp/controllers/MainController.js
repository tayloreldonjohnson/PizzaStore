class MainController {
    constructor($http, $state) {
        this.http = $http;
        this.pizzas = [];
        this.getPizzas();
        this.order = {};
		this.customer = {};
		this.state = $state
    }
    getPizzas() {
        this.http.get("api/Pizzas")
            .then(res => {
                this.pizzas = res.data;
            });
    }
    

	addCustomers() {
		this.http.post("api/Customers", this.customer)
            .then(res => {
				this.customer = {};
				this.state.go('orderpage');
            });
    }
}