const div = document.getElementById("nova-tag")

function createUL() {
    return `
    <ul>
        <li>arroz</li>
        <li>feijão</li>
        <li>refri</li>
        <li>picanha</li>
    </ul>`
}

div.innerHTML = createUL()