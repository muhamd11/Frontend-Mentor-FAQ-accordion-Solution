const menuItems = document.querySelectorAll(".container .menu li");

// Loop through each menu item
menuItems.forEach((menuItem) => {
  // Find the plus icon, and minus icon within each menu item
  const plusIcon = menuItem.querySelector('.plus');
  const minusIcon = menuItem.querySelector('.minus');
  
  // Add a click event listener to each menu item
  menuItem.addEventListener("click", () => {
    // Find the paragraph element associated with the clicked menu item
    const paragraph = menuItem.querySelector('p');

    // Toggle visibility of the paragraph by toggling its class
    paragraph.classList.toggle("none");

    // Toggle visibility of the plus and minus icons by toggling their 'none' class
    plusIcon.classList.toggle("none");
    minusIcon.classList.toggle("none");
  });
});

