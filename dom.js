
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "white"
            ? "#0d1428"
            : "white";
});



document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".box1").style.display = "none";
    });
});




const filterBtns = document.querySelectorAll(".filter-btn");
const allBoxes = document.querySelectorAll(".box1");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {


        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterType = btn.dataset.filter;

        allBoxes.forEach(box => {
            const toggle = box.querySelector(".switch input");

            if (filterType === "all") {
                box.style.display = "flex";
            } else if (filterType === "active") {
                box.style.display = toggle.checked ? "flex" : "none";
            } else if (filterType === "inactive") {
                box.style.display = toggle.checked ? "none" : "flex";
            }
        });
    });
});
