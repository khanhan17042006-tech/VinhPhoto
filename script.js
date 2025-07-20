
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất.');
  this.reset();
});
