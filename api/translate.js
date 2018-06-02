const translate = require('google-translate-api')
module.exports = (app) => {
    app.get('/api/translate/', (req, res) => {
        let text = req.param('text')
        let to = req.param('to')
        translate(text, { to : to}).then((data) => {
            if (data.from.text.value) {
                var result = {
                    "messages": [
                      {"text": data.text},
                      {"text": "Sai lỗi chính tả: " + data.from.text.value}
                    ]
                }
            } else {
                var result = {
                    "messages": [
                        {"text": data.text}
                    ]
                }
            }
            res.send(result)
        }).catch((err) => {
            console.log(err)
        })
    })
}