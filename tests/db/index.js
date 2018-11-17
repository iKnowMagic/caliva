const path = require('path')
const fs = require('fs')

const jsonServer = () => {
  try {
    fs.unlinkSync(path.join(__dirname, '/db.json'))
  } catch (e) {}

  let files = fs.readdirSync(path.join(__dirname, '/../'))
  var json = {}

  files.forEach(function(file) {
    let match = file.match(/(.*)\.json$/)
    if (match) {
      let text = fs.readFileSync(path.join(__dirname, '/../', match[0]), 'utf8')
      try {
        json[match[1]] = JSON.parse(text.toString())
      } catch (e) {
        json[match[1]] = {}
      }
    }
  })
  fs.writeFileSync(path.join(__dirname, '/db.json'), JSON.stringify(json))
}

jsonServer()

module.exports = jsonServer
