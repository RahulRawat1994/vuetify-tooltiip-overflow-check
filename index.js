/**
 * 
 * Author: @RahulRawat
 * Description: A custom Vue directive to extend the Vuetify Tooltip functionality.
 * It checks if an element's content is overflowing. If the content is not overflowing, 
 * the tooltip is hidden by setting its display to 'none'.
 * 
 */

// Function to check if an element's content is overflowing
const isOverflowing = (el) => el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;

// Function to toggle tooltip visibility based on overflow
const toggleTooltipVisibility = (el) => {
  const targetEl = document.getElementById(el.getAttribute('aria-describedby'));
  if (targetEl) {
    targetEl.style.display = isOverflowing(el) ? '' : 'none'; // Show or hide the tooltip based on overflow
  }
};

// Extend Vuetify Tooltip directive to check for overflow using modifier
const tooltipOverflowCheck = {
  beforeMount(el) {
    toggleTooltipVisibility(el); // Check visibility on mount
  },
  updated(el) {
    toggleTooltipVisibility(el); // Check visibility on updates (e.g., text changes)
  }
};

export default tooltipOverflowCheck;
