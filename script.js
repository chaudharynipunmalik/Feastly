// ===== SEARCH =====

let searchBar = document.getElementById("search");
let rows = document.getElementsByClassName("row");
let noResult = document.getElementById("no-result");

// this runs every time the user types something
searchBar.addEventListener("input", function () {
    let text = searchBar.value.toLowerCase();
    let found = 0;

    for (let i = 0; i < rows.length; i++) {
        let boxes = rows[i].getElementsByClassName("food-box");
        let shownInRow = 0;

        for (let j = 0; j < boxes.length; j++) {
            // restaurant name and cuisine of this box
            let name = boxes[j].getElementsByTagName("h3")[0].innerText.toLowerCase();
            let cuisine = boxes[j].getElementsByTagName("p")[0].innerText.toLowerCase();

            if (name.includes(text) || cuisine.includes(text)) {
                boxes[j].style.display = "block";
                shownInRow++;
                found++;
            } else {
                boxes[j].style.display = "none";
            }
        }

        // hide the whole row if nothing in it matches
        if (shownInRow == 0) {
            rows[i].style.display = "none";
        } else {
            rows[i].style.display = "flex";
        }

        // while searching, show results from the left side
        if (text == "") {
            rows[i].style.justifyContent = "space-between";
            rows[i].style.gap = "0px";
        } else {
            rows[i].style.justifyContent = "flex-start";
            rows[i].style.gap = "40px";
        }
    }

    // show message if no restaurant matches
    if (found == 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
});