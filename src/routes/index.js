import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../templates/Character' 
import Error404 from '../templates/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
const routes = {
    '/': Home,
    '/:id': Character,
    'contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById("header")
    const content = null || document.getElementById("content")

    header.innerHTML = await Header();
    let hash = getHash()
    console.log("start")
    console.log(hash)
    console.log("end")
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    if(typeof render == 'function'){
        content.innerHTML = await render()
    }else{
        content.innerHTML = render
    }
}

export default router