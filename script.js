const textArray = ["men", "women", "kids", "Yourself"];
let currentText = 0;
const textElement = document.querySelector("#changingText");

function changeText() {
  textElement.textContent = textArray[currentText];
  currentText = (currentText + 1) % textArray.length;
}
setInterval(changeText, 1000); // Change text every 1 seconds

// document.addEventListener("DOMContentLoaded", function () {
//     const imageSlider = document.querySelector('.image-slider');
//     const sliderItems = document.querySelectorAll('.image-slider > div');
//     const leftArrow = document.querySelector('.arrow-left');
//     const rightArrow = document.querySelector('.arrow-right');
//     let maxVisible = 3; // Maximum number of visible cards for larger screens
  
//     function updateSlider() {
//       sliderItems.forEach((item, index) => {
//         if (index >= startIndex && index < startIndex + maxVisible) {
//           item.style.display = 'block';
//         } else {
//           item.style.display = 'none';
//         }
//       });
  
//       leftArrow.style.display = startIndex > 0 ? 'block' : 'none';
//       rightArrow.style.display = startIndex + maxVisible < sliderItems.length ? 'block' : 'none';
//     }
  
//     leftArrow.addEventListener('click', () => {
//       if (startIndex > 0) {
//         startIndex--;
//         updateSlider();
//       }
//     });
  
//     rightArrow.addEventListener('click', () => {
//       if (startIndex + maxVisible < sliderItems.length) {
//         startIndex++;
//         updateSlider();
//       }
//     });
  
//     // Initial setup
//     let startIndex = 0;
//     updateSlider();
  
//     // Adjust maxVisible for small devices (e.g., iPhone)
//     function adjustMaxVisible() {
//       if (window.innerWidth < 768) {
//         maxVisible = 1; // Display one card at a time on small screens
//       } else {
//         maxVisible = 3; // Display three cards at a time on larger screens
//       }
//       updateSlider();
//     }
  
//     // Listen for window resize events
//     window.addEventListener('resize', adjustMaxVisible);
  
//     // Initial adjustment for current screen size
//     adjustMaxVisible();
//   });





// document.addEventListener("DOMContentLoaded", function () {
//     const imageSlider = document.querySelector('.image-slider');
//     const sliderItems = document.querySelectorAll('.image-slider > div');
//     const leftArrow = document.querySelector('.arrow-left');
//     const rightArrow = document.querySelector('.arrow-right');
//     let maxVisible = 3; // Maximum number of visible cards for larger screens

//     // Retrieve the startIndex from localStorage or use 0 if it doesn't exist
//     let startIndex = parseInt(localStorage.getItem("startIndex")) || 0;

//     function updateSlider() {
//         sliderItems.forEach((item, index) => {
//             if (index >= startIndex && index < startIndex + maxVisible) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });

//         leftArrow.style.display = 'block'; // Always show left arrow
//         if (startIndex + maxVisible < sliderItems.length) {
//             rightArrow.style.display = 'block';
//             rightArrow.disabled = false; // Enable the right arrow
//         } else {
//             rightArrow.style.display = 'block';
//             rightArrow.disabled = true; // Disable the right arrow
//         }
//     }

//     leftArrow.addEventListener('click', () => {
//         if (startIndex > 0) {
//             startIndex--;
//             updateSlider();
//             // Store the updated startIndex in localStorage
//             localStorage.setItem("startIndex", startIndex);
//         }
//     });

//     rightArrow.addEventListener('click', () => {
//         if (startIndex + maxVisible < sliderItems.length) {
//             startIndex++;
//             updateSlider();
//             // Store the updated startIndex in localStorage
//             localStorage.setItem("startIndex", startIndex);
//         }
//     });

//     // Initial setup
//     updateSlider();

//     // Adjust maxVisible for small devices (e.g., iPhone)
//     function adjustMaxVisible() {
//         if (window.innerWidth < 768) {
//             maxVisible = 1; // Display one card at a time on small screens
//         } else {
//             maxVisible = 3; // Display three cards at a time on larger screens
//         }
//         updateSlider();
//     }

//     // Listen for window resize events
//     window.addEventListener('resize', adjustMaxVisible);

//     // Initial adjustment for current screen size
//     adjustMaxVisible();
// });


document.addEventListener("DOMContentLoaded", function () {
    const imageSlider = document.querySelector('.image-slider');
    const sliderItems = document.querySelectorAll('.image-slider > div');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    let maxVisible = 3; // Maximum number of visible cards for larger screens
    let startIndex = 0;

    function updateSlider() {
        sliderItems.forEach((item, index) => {
            if (index >= startIndex && index < startIndex + maxVisible) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        leftArrow.style.display = 'block'; // Always show left arrow
        if (startIndex + maxVisible >= sliderItems.length) {
            rightArrow.style.display = 'none';
        } else {
            rightArrow.style.display = 'block';
        }
    }

    leftArrow.addEventListener('click', () => {
        if (startIndex > 0) {
            startIndex--;
            updateSlider();
            localStorage.setItem("startIndex", startIndex);
        }
    });

    rightArrow.addEventListener('click', () => {
        if (startIndex + maxVisible < sliderItems.length) {
            startIndex++;
            updateSlider();
            localStorage.setItem("startIndex", startIndex);
        }
    });

    // Initial setup
    updateSlider();

    // Adjust maxVisible for small devices
    function adjustMaxVisible() {
        if (window.innerWidth < 768) {
            maxVisible = 1; // Display one card at a time on small screens
        } else {
            maxVisible = 3; // Display three cards at a time on larger screens
        }
        updateSlider();
    }

    // Listen for window resize events
    window.addEventListener('resize', adjustMaxVisible);

    // Initial adjustment for current screen size
    adjustMaxVisible();
});


// -------------------------------------------------



// This section is linking my class ="link-button" on my blog.html to readblog.html
// Get a reference to the button element by its id
const readMoreButton = document.getElementById("readMoreButton");

// Add a click event listener to the button
readMoreButton.addEventListener("click", function() {
  // Navigate to the target HTML page
  window.location.href = "readblog.html";
});
// End of linking my blog


function showSearch(event) {
    event.preventDefault();
    const getSearch = document.querySelector(".has-search");
    const getLogo = document.querySelector(".byclogo");
    const searchIcon = document.querySelector(".si");
    getSearch.style.display = "block";
    searchIcon.style.display = "none";
    getLogo.style.display = "none"
}

