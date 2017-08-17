class OrderPageController {
    constructor($http, $cookies) {
        this.http = $http;
        this.order = {};
        this.orders = [];
		this.cookies = $cookies;
		this.getPizzas();
		this.pizzas = [];
    }

    getCustomerId() {
        return this.cookies.get("customerId");
	}

	getPizzas() {
		this.http.get("api/Pizzas")
			.then(res => {
				this.pizzas = res.data;
			});
	}

    addOrder() {
        this.http.post("api/Orders", this.order)
            .then(res => {
                this.order = {};
                this.getPizzas();
            });
    }
}