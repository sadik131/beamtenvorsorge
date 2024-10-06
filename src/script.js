function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('hidden');
  }

//   function toggleContent() {
//     var content = document.getElementById("content");
//     if (content.classList.contains('hidden')) {
//         content.classList.remove('hidden');
//     } else {
//         content.classList.add('hidden');
//     }
// }

function toggleContent(sectionId) {
  // Hide all sections
  for (let i = 1; i <= 3; i++) {
    document.getElementById('content-' + i).classList.add('hidden');
  }
  
  // Show the clicked section
  document.getElementById('content-' + sectionId).classList.toggle('hidden');
}