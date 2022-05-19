const Comment = {
    render: (props) => {
        if(!props.value) {
            return `<div></div>`
        }
        return `
            <div>
                <span>${props.value > 5 ? `<p>Popüler</p>` : `<p>Popüler değil</p>`}</span>
            </div>
        `
    }
}

export default Comment