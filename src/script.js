function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('hidden');
}


function toggleContent(sectionId) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('content-' + i).classList.add('hide');
  }
  
  document.getElementById('content-' + sectionId).classList.toggle('hide');
}