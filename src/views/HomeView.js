const HomeView = {
    render: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            headers: {'Content-Type':'application/json'}
        })
        if(!response || !response.ok){
            return `<div>veri yok</div>`
        }
        const posts = await response.json()

        return `
            ${posts.map((post)=>`
                <div class="content">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <a href="#/post/${post.id}">detay</a>
                </div>
            `).join("\n")}
        `
    }
}

export default HomeView