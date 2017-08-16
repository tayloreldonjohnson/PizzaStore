class MainController {
    constructor($http, $state, $cookies) {
        this.http = $http;
        this.pizzas = [];
        this.getPizzas();
        this.order = {};
		this.customer = {};
        this.state = $state
        this.cookies = $cookies;
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
                //console.log(res);
                this.state.go('orderpage');
                this.cookies.put("customerId", res.data.customerId);
            });
    }
}