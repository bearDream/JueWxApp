var exec = require('child_process').execSync

module.exports = function () {
  var name
  var email

  try {
    name = exec('git config --get mine.name')
    email = exec('git config --get mine.email')
  } catch (e) {}

  name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
  email = email && (' <' + email.toString().trim() + '>')
  return (name || '') + (email || '')
}
