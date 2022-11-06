function sendit() {
    const user_alias = document.getElementById("user-alias").value.toLowerCase()
    const user_phone = document.getElementById("user-phone").value

    const endpoint = "https://sms.firesidechat.tech:8000/reg"
    const params = JSON.stringify({
        "user_alias" : user_alias,
        "user_number" : "+" + user_phone
    })
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
                switch (xhr.response) {
                    case "success":
                        console.log("Successfully registered user " + user_alias)
                        document.getElementById("registration").style.visibility = "hidden"
                        document.getElementById("success").style.visibility = "visible"
                        document.getElementById("created-alias").innerText = user_alias
                        break
                    case "user_exists":
                        // TODO say name exists
                        break
                    default:
                        console.log("Unknown server response: " + xhr.response + ", registration halted")
                        window.location = "fail.html"
                        document.getElementById("error-code").innerText = xhr.response
                }
        }
    }

    xhr.open("POST", endpoint)
    xhr.setRequestHeader("Content-Type", "application/json")
    console.log("param:" + params)
    xhr.send(params)
}