class OrderPageController {
    constructor($http, $cookies) {
        this.http = $http;
        this.order = {};
        this.orders = [];
		this.cookies = $cookies;
		this.getPizzas();
		this.pizzas = [];
		this.order.customerid = this.getCustomerId(); 
    }

    getCustomerId() {
		var customerid = this.cookies.get("customerId");
		return parseInt(customerid);
	}

	getPizzas() {
		this.http.get("api/Pizzas")
			.then(res => {
				this.pizzas = res.data;
			});
	}

	addOrder() {
		console.log(this.order);
        this.http.post("api/Orders", this.order)
            .then(res => {
                this.order = {};
            });
    }
}