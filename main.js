let formSelector = document.querySelector("form")

formSelector.addEventListener('submit', event => {
    event.preventDefault()
    let formData = new FormData(formSelector)
    let data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });
    let header = new Headers()
    header.append('Content-Type', 'application/json');
    options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: header
    }
    fetch("http://localhost:8080/pagamentos", options)
        .then(response => response.json())
        .then(json => console.log(json))
});
