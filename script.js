(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-JN5UZ01B6XFV-2");


const handleSubmit = (email, password) => {
    console.log(email, password)
    if (
        (email === "admin@gmail.com" && password === "admin") ||
        (email === "user1@gmail.com" && password === "user") ||
        (email === "user2@gmail.com" && password === "user") ||
        (email === "user3@gmail.com" && password === "user")
    ) {
        alert("Login Successful");
    } else {
        alert("Invalid username or password");
    }
};

const handleClick = () => {
    alert("add to cart");
};