var visited = localStorage.getItem('visited');
if (!visited) {
  alert("Welcome to my Website!");
  localStorage.setItem('visited', true);
}
