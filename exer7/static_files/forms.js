document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('foodForm');
    const foodCardsContainer = document.getElementById('foodCards');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const foodName = document.getElementById('foodName').value;
        const description = document.getElementById('description').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const rank = parseInt(document.getElementById('rank').value);

        if (foodName.trim() === '' || description.trim() === '' || imageUrl.trim() === '' || isNaN(rank)) {
            alert('Please fill out all fields and ensure the rank is a number.');
            return;
        }

        addFoodCard(foodName, description, imageUrl, rank);
        form.reset();
    });

    function addFoodCard(foodName, description, imageUrl, rank) {
        const card = document.createElement('div');
        card.classList.add('food-card');
        card.innerHTML = `
            <h2>${foodName}</h2>
            <p>${description}</p>
            <img src="${imageUrl}" alt="${foodName}">
            <p>Rank: ${rank}</p>
            <button class="delete-btn">Delete</button>
        `;
        foodCardsContainer.appendChild(card);

        // Add event listener for delete button
        card.querySelector('.delete-btn').addEventListener('click', () => {
            card.remove();
        });
    }
});
