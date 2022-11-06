function sendit() {
    const alias = document.getElementById("user-alias").innerText;
    const number = document.getElementById("user-phone").innerText;

    const endpoint = "http://sms.firesidechat.tech:8000/sms"
    const params = {
        user_alias : alias,
        user_number : number
    }
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.response === "200") {
                console.log("hey, it worked!")
                // TODO redirect to success page
            } else {
                // TODO redirect to fail page
            }
        }
    }

    xhr.open("POST", endpoint)
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(params)
}