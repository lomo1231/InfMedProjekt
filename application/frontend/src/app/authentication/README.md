# Installed modules
* express
* express-session
* passport
* passport-local

`npm install`!

# Public API
## `function ensureAuthenticated(req, res, next)`
Example:
```[javascript]
app.get('/admin', ensureAuthenticated, function(req, res) {
	/* do what you want providing that you're authenticated */
});```
