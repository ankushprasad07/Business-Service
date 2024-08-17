const businessServiceElement = document.getElementById('business-service');

businessServiceElement.onmouseover = function() {
  this.textContent = 'Business Template';
};

businessServiceElement.onmouseout = function() {
  this.textContent = 'Business Service';
};