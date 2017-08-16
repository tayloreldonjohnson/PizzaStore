class MainController {
    constructor($http) {
        this.http = $http;
        this.pizzas = [];
        this.getPizzas();
        this.order = {};
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