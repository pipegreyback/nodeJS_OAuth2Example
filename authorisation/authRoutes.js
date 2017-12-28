module.exports =  (router, expressApp, authRoutesMethods) => {

    //route for registering new users
    router.post('/registerUser', authRoutesMethods.registerUser)

    //route for allowing existing users to login
    router.post('/login', expressApp.oauth.grant(), authRoutesMethods.login)
		router.post('/get_retrive_token', expressApp.oauth.grant(), authRoutesMethods.login)
		router.post('/accesToResource', expressApp.oauth.grant(), authRoutesMethods.login)
    return router
}
