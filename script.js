// // // var acc = document.getElementsByClassName("box");
// // // var i;
// // // var checkbox = document.getElementById("checkbox");

// // // for (i = 0; i < acc.length; i++) {
// // //     acc[i].addEventListener("click", function() {
// // //         this.classList.toggle("active");
// // //     var panel = this.nextElementSibling;
// // //     if (panel.style.display === "block") {
// // //       panel.style.display = "none";
// // //       checkbox.classList.remove("checked");
// // //     } else {
// // //         panel.style.display = "block";
// // //         checkbox.classList.add("checked");
// // //     }
// // //   });
// // // }


// // // Accordian practice

document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll('.box');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentNode;
            const accordionContent = accordionItem.querySelector('.box_3');

            // Close all accordion items except the clicked one
            document.querySelectorAll('.box_3').forEach(content => {
                if (content !== accordionContent) {
                    content.style.display = 'none';
                }
            });

            // Toggle the clicked accordion item
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';

            } else {
                accordionContent.style.display = 'block';
            }
        });
    });
});



// // document.getElementById("myCheck").checked = true;

function toggleCheckbox(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
}