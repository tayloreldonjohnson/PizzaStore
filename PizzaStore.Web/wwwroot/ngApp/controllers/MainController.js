class MainController {
    constructor($http) {
        this.http = $http;
        this.pizzas = [];
        this.getPizzas();
        this.order = {};
        this.customer = {};
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
            });
    }
}