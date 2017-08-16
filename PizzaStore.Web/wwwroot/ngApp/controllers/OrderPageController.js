class OrderPageController {
    constructor($http, $cookies) {
        this.http = $http;
        this.order = {};
        this.orders = [];
        this.cookies = $cookies;
    }

    getCustomerId() {
        return this.cookies.get("customerId");
    }

    addOrder() {
        this.http.post("api/Orders", this.order)
            .then(res => {
                this.order = {};
                this.getPizzas();
            });
    }
}