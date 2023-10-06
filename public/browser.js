console.log("This is a front-end page");
function itemTemplate(item) {
  return `
       <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button data_id = "${item._id} "class="edit-me btn btn-secondary btn-sm mr-1">
              O'zgartirish
            </button>
            <button data_id =" ${item._id} "class="delete-me btn btn-danger btn-sm">O'chirish</button>
          </div>
        </li>
    `;
}

let createField = document.getElementById("create-field");
console.log(createField);
let createForm = document.getElementById("create-form");
console.log(createForm);
createForm.addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((res) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(res.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again!!");
    });
});

document.addEventListener("click", function (e) {
  //   console.log(e);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Do you really want to delete?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {});
    }
  }
  //Delete operations

  if (e.target.classList.contains("edit-me")) {
    // alert("You pressed edit button!!!");

    let userInput = prompt(
      "O'zgartirishni kiriting!",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      console.log(userInput);
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((res) => {
          console.log(res.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Please try again later!");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((res) => {
    alert(res.data.state);
    document.location.reload();
  });
});

//Edit operations
