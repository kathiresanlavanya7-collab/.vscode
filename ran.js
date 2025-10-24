const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const checkBtn = document.getElementById('checkBtn');

fileInput.addEventListener('change', () => {
  fileList.innerHTML = '';
  [...fileInput.files].forEach(file => {
    const fileDiv = document.createElement('div');
    fileDiv.classList.add('file-item');
    fileDiv.innerHTML = `
      <span>${file.name}</span>
      <button onclick="this.parentElement.remove()">❌</button>
    `;
    fileList.appendChild(fileDiv);
  });
});

checkBtn.addEventListener('click', () => {
  alert('Checking files for plagiarism...');
});