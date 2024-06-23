/* Назодим элементы в документе */
document.addEventListener("DOMContentLoaded", () => {
  const usersContainer = document.getElementById("users");
  const userDetailsContainer = document.getElementById("user-details");
  const userDetailsBody = document.getElementById("user-details-body");
  const userListContainer = document.getElementById("user-list");
  const backButton = document.getElementById("back-button");

  /* Делаем запрос к API */
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const userItem = document.createElement("li");
        userItem.classList.add("list-group-item", "list-group-item-action");
        userItem.textContent = user.name;
        userItem.addEventListener("click", () => showUserDetails(user));
        usersContainer.appendChild(userItem);
      });
    })
    .catch((error) => console.error("Error fetching users:", error));

  /* Функция для отображения информации о пользователе*/
  function showUserDetails(user) {
    userListContainer.classList.add("d-none");
    userDetailsContainer.classList.remove("d-none");

    userDetailsBody.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;
  }

  /* Кнопка возврата к списку пользователей */
  backButton.addEventListener("click", () => {
    userListContainer.classList.remove("d-none");
    userDetailsContainer.classList.add("d-none");
  });
});
