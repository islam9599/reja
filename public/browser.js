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
      createField.value("");
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again!!1");
    });
});
