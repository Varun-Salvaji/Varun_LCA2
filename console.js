console.log("Welcome to Varun Rao Salvaji's portfolio site!");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Thanks for reaching out, " + name + "! Your message has been sent.");
});
let all_paragraphs = document.
getElementsByTagName ("p");
console. log(all_paragraphs);