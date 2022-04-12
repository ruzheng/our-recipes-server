// // SHOW
// // GET /examples/5a7db6c74d55bc51bdf39793
// router.get('/examples/:id', requireToken, (req, res, next) => {
// // req.params.id will be set based on the `:id` in the route
// Unit.findById(req.params.id)
// eslint-disable-next-line no-tabs
// 		.then(handle404)
// eslint-disable-next-line no-tabs
// 		// if `findById` is succesful, respond with 200 and "example" JSON
// eslint-disable-next-line no-tabs
// 		.then((example) => res.status(200).json({ example: example.toObject() }))
// eslint-disable-next-line no-tabs
// 		// if an error occurs, pass it to the handler
// eslint-disable-next-line no-tabs
// 		.catch(next)
// })
