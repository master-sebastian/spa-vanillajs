const resolveRoutes = (route) => {
    if(route.length <= 3){
        if(route === "/"){
            return route
        }else{
            return "/:id"
        }
    }
    return '/'+route
}

export default resolveRoutes