# NicePortal-V6
Login Page NicePortal V6

Sesuaikan file config.js sebelum digunakan, 
Anda harus menggunakan user_id dan router_id anda sendiri.
Untuk mendapakan user_id dan router_id silahkan kunjungi website https://niceportal.net

```js
class Config{
    constructor(){
        this.user_id = 'USER ID ANDA';
        this.router_id = 'ROUTER ID ANDA';
        
        this.color = 'theme-green.css';
    }
}
```

Bypass Server URL :
```rsc
/ip hotspot walled-garden ip
add action=accept disabled=no comment="NICEPORTAL" dst-host="niceportal.net";
```

### PILIHAN WARNA
- ![#ffc107](https://placehold.co/15x15/ffc107/ffc107.png) `0 - theme-amber.css`
- ![#000000](https://placehold.co/15x15/000000/000000.png) `1 - theme-black.css`
- ![#f44336](https://placehold.co/15x15/f44336/f44336.png) `2 - theme-red.css`
- ![#607d8b](https://placehold.co/15x15/607d8b/607d8b.png) `3 - theme-blue-grey.css`
- ![#2196f3](https://placehold.co/15x15/2196f3/2196f3.png) `4 - theme-blue.css`
- ![#00bcd4](https://placehold.co/15x15/00bcd4/00bcd4.png) `5 - theme-cyan.css`
- ![#616161](https://placehold.co/15x15/616161/616161.png) `6 - theme-dark-grey.css`
- ![#ff5722](https://placehold.co/15x15/ff5722/ff5722.png) `7 - theme-deep-orange.css`
- ![#673ab7](https://placehold.co/15x15/673ab7/673ab7.png) `8 - theme-deep-purple.css`
- ![#4caf50](https://placehold.co/15x15/4caf50/4caf50.png) `9 - theme-green.css`
- ![#3f51b5](https://placehold.co/15x15/3f51b5/3f51b5.png) `10 - theme-indigo.css`
- ![#87ceeb](https://placehold.co/15x15/87ceeb/87ceeb.png) `11 - theme-light-blue.css`
- ![#8bc34a](https://placehold.co/15x15/8bc34a/8bc34a.png) `12 - theme-light-green.css`
- ![#cddc39](https://placehold.co/15x15/cddc39/cddc39.png) `13 - theme-lime.css`
- ![#ff9800](https://placehold.co/15x15/ff9800/ff9800.png) `14 - theme-orange.css`
- ![#e91e63](https://placehold.co/15x15/e91e63/e91e63.png) `15 - theme-pink.css`
- ![#9c27b0](https://placehold.co/15x15/9c27b0/9c27b0.png) `16 - theme-purple.css`
- ![#009688](https://placehold.co/15x15/009688/009688.png) `17 - theme-teal.css`
- ![#ffeb3b](https://placehold.co/15x15/ffeb3b/ffeb3b.png) `18 - theme-yellow.css`


# DOKUMENTASI API
Anda juga dapat mengintegrasikan website atau template anda sendiri dengan NicePortal melalui API.
Berikut adalah beberapa contoh sederhana untuk membuat Request API ke NicePortal.

## Mengambil Informasi Router
```html
<script type="text/javascript" src="assets/js/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/config.js"></script>
<script type="text/javascript" src="assets/js/system.js"></script>
<script type="text/javascript">
    const app = new System();
    $(document).ready((e) => {
        app.get_info().then(result => {
            console.log(result);
        });
    });
</script>
```
Contoh Response
```json
{
    "user_id": "72SGPJZV22H07UJQ",
    "name": "Server Name",
    "session": "on",
    "expire": "2029-03-30",
    "disable": "false"
}
```

### Mengambil Data Produk / Voucher
```js
    const app = new System();
    $(document).ready((e) => {
        app.get_info().then(result => {
            console.log(result);
        });
    });
```
Contoh Response
```json
[
    {
        "user_id": "72SGPJZV22H07UJQ",
        "router_id": "Q2J24W13IY8JKOPR",
        "name": "7 Hari",
        "profile": "7 Hari",
        "price": "20,000",
        "limit_uptime": "0",
        "limit_bytes": "0",
        "description": "- Unlimited Kuota",
        "product_id": "5E4D66WNMU4YIY50"
    },
    {
        "user_id": "72SGPJZV22H07UJQ",
        "router_id": "Q2J24W13IY8JKOPR",
        "name": "30 Hari",
        "profile": "30 Hari",
        "price": "50,000",
        "limit_uptime": "0",
        "limit_bytes": "0",
        "description": "- Unlimited Kuota",
        "product_id": "F0S45D47V8HEU2GH"
    }
]
```

### Permintaan Transaksi
```js
const app = new System();
$(document).ready((e) => {
    app.checkout({
        "product_id": "ID PRODUK",
        "first_name": "Nama Depan",
        "last_name": "Nama Belakang",
        "phone": "08XXXXXXXXXX",
        "email": "examplemail.com"
    }).then(result => {
        console.log(result);
    });
});
```
Contoh Response 
```json
{
    "user_id": "72SGPJZV22H07UJQ",
    "router_id": "Q2J24W13IY8JKOPR",
    "product_id": "F0S45D47V8HEU2GH",
    "year": "2025",
    "month": "04",
    "days": "04",
    "time": "11:01:23 AM",
    "profile": "30 Hari",
    "product_name": "30 Hari",
    "gross_amount": "50000",
    "service_cost": 500,
    "first_name": "Septiana",
    "last_name": "Harun",
    "phone": "085117018997",
    "email": "",
    "transaction_status": "pending",
    "transaction_id": "73ea2cf8-4134-4ce4-89af-e0389551b9d8",
    "qr_string": "00020101021226610014COM.GO-JEK.WWW01189360091434519636870210G4519636870303UKE51440014ID.CO.QRIS.WWW0215ID10222328083970303UKE5204573453033605405500005802ID5911NICE PORTAL6008SUKABUMI61054335962395028A220250404040123riHNDhBvaAID0703A01630489D5",
    "acquirer": "gopay",
    "expiry_time": "2025-04-04 11:16:23",
    "order_id": "ZW2XI2S5UCXCNYQ1"
}
```
Anda dapat harus membuat response (qr_string) menjadi sebuah QR Code agar dapat dipindai menggunakan aplikasi pembayaran yang mendukung QRIS. Lihat cara merubah string menjadi QR Code menggunakan JavaScript. https://davidshimjs.github.io/qrcodejs/

### Cek Status Transaksi
```js
const app = new System();
$(document).ready((e) => {
    app.get_status(ORDER_ID_XXXXX).then(result => {
        console.log(result);
    });
});
```
Contoh Response PENDING
```json
{
    "status" : "pending",
    "voucher" : ""
}
```
Contoh Response SUCCESS
```json
{
    "status" : "settlement",
    "voucher" : "ABC1234"
}
```
