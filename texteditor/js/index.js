// Get the toolbar and content area elements
const toolbar = document.querySelector('.toolbar');
const content = document.querySelector('.content');

// Add event listeners to toolbar buttons
toolbar.addEventListener('click', function(event) {
  // Get the clicked button
  const button = event.target.closest('button');

  // If a button was clicked
  if (button) {
    // Get the command associated with the button
    const command = button.dataset.command;

    // Execute the command
    document.execCommand(command, false, null);

    // Prevent the button from submitting the form
    event.preventDefault();
  }
});