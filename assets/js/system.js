class System {
    constructor() {
        this.config = new Config();
        this.server = 'https://niceportal.net';
        this.params = {
            "user_id": this.config.user_id,
            "router_id": this.config.router_id
        }
        this.config.session = 'off';
    }
    
    async get_info(){
        return new Promise(resolve => {
            $.ajax({
                url: `${this.server}/api/info`,
                type: 'POST',
                data: JSON.stringify(this.params),
                success: (result) => {
                    resolve(result);
                },
                error: (err) => {
                    resolve(err);
                }
            });
        });
    }

    async get_product(id = null) {
        return new Promise(resolve => {
            if (id !== null) {
                this.params.product_id = id;
            }
            $.ajax({
                url: `${this.server}/api/product`,
                type: 'POST',
                data: JSON.stringify(this.params),
                success: (result) => {
                    resolve(result);
                },
                error: (err) => {
                    resolve(err);
                }
            });
        });
    }

    async checkout(data) {
        return new Promise(resolve => {
            this.params.product_id = data.product_id;
            this.params.first_name = data.first_name;
            this.params.last_name = data.last_name;
            this.params.phone = data.phone;
            this.params.email = data.email;
            $.ajax({
                url: `${this.server}/api/checkout`,
                type: 'POST',
                data: JSON.stringify(this.params),
                success: (result) => {
                    resolve(result);
                },
                error: (err) => {
                    resolve(err);
                }
            });
        });
    }
    
    async get_status(order_id){
        return new Promise(resolve => {
            this.params.order_id = order_id;
            $.ajax({
                url: `${this.server}/api/status`,
                type: 'POST',
                data: JSON.stringify(this.params),
                success: (result) => {
                    resolve(result);
                },
                error: (err) => {
                    resolve(err);
                }
            });
        });
    }

    async clear_session(username = null){
        return new Promise(resolve => {
            this.params.username = username;
            $.ajax({
                url: `${this.server}/api/session`,
                type: 'POST',
                data: JSON.stringify(this.params),
                success: (result) => {
                    resolve(result);
                },
                error: (err) => {
                    resolve(err);
                }
            });
        });
    }

    async registration(customer){
        this.params.first_name = customer.first_name;
        this.params.last_name = customer.last_name;
        this.params.phone = customer.phone;
        this.params.address = customer.address;
        return new Promise(resolve => {
            $.ajax({
                url: `${this.server}/api/registration`,
                type: 'POST',
                data: JSON.stringify(this.params),
                success: (result) => {
                    resolve(result);
                },
                error: (err) => {
                    resolve(err);
                }
            });
        });
    }
}
