# NicePortal-V6
Login Page NicePortal V6

Sesuaikan file config.js sebelum digunakan, 
Anda harus menggunakan user_id dan router_id anda sendiri.
Untuk mendapakan user_id dan router_id silahkan kunjungi website https://niceportal.net

```js
class Config{
    constructor(){
        this.user_id = '72SGPJZV22H07UJQ';
        this.router_id = 'Q2J24W13IY8JKOPR';
        
        this.color = 'theme-green.css';
    }
}
```

Bypass Server URL :
```rsc
/ip hotspot walled-garden ip
add action=accept disabled=no comment="NICEPORTAL" dst-host="niceportal.net";
```
