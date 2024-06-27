const form = document.querySelector("form.your-comment");
const name_input = document.querySelector("form.your-comment input");
const comment_input = document.querySelector("form.your-comment textarea");
const comments_container = document.querySelector(".comments");

const formSubmit = (e) => {
  e.preventDefault();
  const name = name_input.value;
  const comment = comment_input.value;
  if (name && comment) {
    const comment_element = document.createElement("div");
    comment_element.classList.add("comment");
    comment_element.innerHTML = `
        <p><strong>${name}</strong> - ${comment}</p>
        `;
    comments_container.insertBefore(
      comment_element,
      comments_container.firstChild
    );
    name_input.value = "";
    comment_input.value = "";
  }
};
form.addEventListener("submit", formSubmit);
