class MainController {
    constructor($http, $state, $cookies) {
        this.http = $http;
        this.order = {};
		this.customer = {};
        this.state = $state
        this.cookies = $cookies;
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