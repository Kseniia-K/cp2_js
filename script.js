for(let i in cats){
    html = `
    <div class="card">
        <img src="${cats[i].img_link}" alt="cat${i}">
        <div class="name">
            <h3>${cats[i].name}</h3>
        </div>
        <div class="age">
            <p><i>Возраст: ${cats[i].age} мес.</i></p>
        </div>
        <div class="rate">${ranging(cats[i].rate)}</div>
        <div class="description">
            <p>${cats[i].description}</p>
        </div>
    `;

    if(cats[i].favourite) {
        html += `<img src="https://svg-art.ru/wp-content/uploads/2016/05/heart-whole.png" alt="redHeart" class="likeHeart">`;
    }

    html += '</div>';
    document.body.innerHTML += html;
}

function ranging(rate){
    let likes = "";
    for(let i = 0; i < 10; i++){
        if (i < rate) {
            likes += `<img src="https://cdn-icons-png.flaticon.com/512/31/31414.png" alt="blackHeart" width="5" height="5" class="hearts">`;
        }
        else {
            likes += `<img src="https://cdn-icons-png.flaticon.com/512/30/30724.png" alt="emptyHeart" width="5" height="5" class="hearts">`;
        }
    }
    return likes;
}