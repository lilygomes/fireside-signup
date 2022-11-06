function sendit() {
    const user_alias = document.getElementById("user-alias").value.toLowerCase()
    const user_phone = document.getElementById("user-phone").value

    const endpoint = "https://sms.firesidechat.tech:8000/reg"
    const params = JSON.stringify({
        alias : user_alias,
        number : user_phone
    })
    console.log("alias is: " + alias)
    console.log("number is: " + number)
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
                switch (xhr.response) {
                    case "success":
                        // TODO redirect to success page
                        console.log("Successfully registered user " + alias)
                        break
                    case "user_exists":
                        // TODO say name exists
                        break
                    default:
                        // TODO oops email support
                        // code: [response]
                        console.log("Unknown server response: " + xhr.response + ", registration halted")
                }
        }
    }

    xhr.open("POST", endpoint)
    xhr.setRequestHeader("Content-Type", "application/json")
    console.log("param:" + params)
    xhr.send(params)
}

function getMatch() {
    console.log(document.getElementById("user-alias").innerText.match())
}