(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-JN5UZ01B6XFV-2");


const handleSubmit = (email, password, name) => {
    console.log(email, password, name)
    if (
        (email === "admin@gmail.com" && password === "admin") ||
        (email === "user1@gmail.com" && password === "user") ||
        (email === "user2@gmail.com" && password === "user") ||
        (email === "user3@gmail.com" && password === "user") ||
        (email === "12as1912002@gmail.com" && password === "nidhi")
    ) {
        //passing user and account objects:
        let id = email.slice(0, -10);
        console.log(id);
        aptrinsic("identify",
            {
                //User Fields
                "id": id, // Required for logged in app users
                "email": email,
                "firstName": id,
                "lastName": "User",
                "signUpDate": 1522697426479, //unix time in ms
                "plan": "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
                "price": 95.5,
                "userHash": "",
                "Language":"hi",
                "MyCustomAttribute": Math.floor(Math.random() * 100)// optional transient for HMAC identification
            },
            {
                //Account Fields
                "id": "IBM", //Required
                "name": "International Business Machine",
                "Program": "Platinum" // flat custom attributes
            });
        aptrinsic('set', 'globalContext', {"version":12345, "name":"Salesforce", "type":"Iframe"});
        aptrinsic('set', 'user', { 'firstName': name, 'role': 'Software Engineer' });

        console.log(location.href);
        location.href = "index.html"
    } else {
        alert("Invalid username or password");
    }
};

const handleClick = () => {
    alert("add to cart");
};
