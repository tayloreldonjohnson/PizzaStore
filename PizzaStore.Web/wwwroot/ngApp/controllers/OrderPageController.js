class OrderPageController {
    constructor($http) {
        this.http = $http;
        this.order = {};
        this.orders = [];

    }


    addOrder() {
        this.http.post("api/Orders", this.order)
            .then(res => {
                this.order = {};
                this.getPizzas();
            });
    }
}