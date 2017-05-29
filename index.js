const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // if the shift key is down and it's being checked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over all the boxes
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
