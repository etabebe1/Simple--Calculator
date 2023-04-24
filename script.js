let func = {
  "+": () => {
    return console.log(document.querySelector("input").value);
  },
  "=": () => {
    document.querySelector("input").value = eval(
      document.querySelector("input").value
    );
  },
  "-": () => {},
  "/": () => {},
  "*": () => {},
  c: () => {
    document.querySelector("input").value = "";
  },
};
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    if (event.target.dataset.num != "=" && event.target.dataset.num != "c") {
      document.querySelector("input").value += event.target.dataset.num;
    }
    if (["=", "-", "+", "*", "c"].includes(event.target.dataset.num)) {
      if (document.querySelector("input").value) {
        func[event.target.dataset.num]();
      }
    }
  });
});
