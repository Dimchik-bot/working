function showSection(sectionId) {
  // Скрыть все разделы
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });

  // Показать выбранный раздел
  document.getElementById(sectionId).style.display = 'block';
}
