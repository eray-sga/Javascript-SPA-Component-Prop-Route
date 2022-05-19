import { urlParse } from "./utils.js";
import HomeView from "./views/HomeView.js";
import NotFoundView from "./views/NotFoundView.js";
import PostView from "./views/PostView.js";

const routes = {
    "/":HomeView,
    "/post/:id":PostView
}

const router = async() => {
    const request = urlParse()
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + 
    (request.id ? '/:id' : '')
    const view = routes[parseUrl] ? routes[parseUrl] : NotFoundView
    const main = document.getElementById('container')
    main.innerHTML = await view.render()
}

window.addEventListener('load', router)
window.addEventListener('hashchange',router)