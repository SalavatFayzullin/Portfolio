let date = null, title = null, img = null, err = null

function fetch_joke(event) {
    const email = document.getElementById('email').value
    fetch('https://fwd.innopolis.university/api/hw2?email=' + email)
    .then(resp => resp.json())
    .then(resp => {
        console.log('Your personal ID: ' + resp)
        return fetch('https://fwd.innopolis.university/api/comic?id=' + resp)
    })
    .then(resp => resp.json())
    .then(resp => {
        if (date != null) date.remove();
        if (title != null) title.remove();
        if (img != null) img.remove();
        if (err != null) err.remove();
        
        date = document.createElement('h2')
        date.textContent = new Date(resp['year'], resp['month'], resp['day']).toLocaleDateString()
        document.getElementById('hw2').prepend(date)
    
        title = document.createElement('h2')
        title.textContent = resp['safe_title']
        document.getElementById('hw2').prepend(title)
    
        img = new Image()
        img.src = resp['img']
        img.alt = resp['alt']
        document.getElementById('joke-container')
        document.getElementById('joke-container').appendChild(img)
    })
    .catch(e => {
        console.log(e)
        if (date != null) date.remove();
        if (title != null) title.remove();
        if (img != null) img.remove();
        if (err != null) err.remove();
        err = document.createElement('h2')
        err.textContent = 'Error occured. Write a valid e-mail address'
        err.classList.add('error')
        document.getElementById('joke-input').append(err)
    })
}