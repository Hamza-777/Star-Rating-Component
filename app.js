const reactions = ["😢", "😞", "😐", "😀", "😎"];

const stars = document.querySelectorAll('.fa-solid');

const unfillStars = () => {
    stars.forEach(star => {
        if(star.classList.contains('filled')) {
            star.classList.remove('filled');
        }
    });
}

const fillStars = (idx) => {
    unfillStars();
    stars.forEach((star, i) => {
        if(i <= idx) {
            star.classList.add('filled');
        }
    });
}

stars.forEach((star, idx) => {
    star.addEventListener('mouseover', (e) => {
        fillStars(idx);
    })
});

stars.forEach((star, idx) => {
    star.addEventListener('click', (e) => {
        fillStars(idx);
        document.getElementById('result').innerText = reactions[idx];
    })
});