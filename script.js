// script.js

function showSection(sectionId) {
  // Скрываем все разделы
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Показываем выбранный раздел
  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = 'block';
}

function openModal(imageSrc) {
  const modalContainer = document.getElementById('modal-container');
  const modalImage = document.getElementById('modal-image');

  modalImage.src = imageSrc;
  modalContainer.style.display = 'block';
}

function closeModal() {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'none';
}
