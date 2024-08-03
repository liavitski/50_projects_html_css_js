const notesWrapper = document.querySelector('.notes-wrapper');

const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNote(note));
}

addBtn.addEventListener('click', () => addNote());

clearBtn.addEventListener('click', () => {
  const notes = notesWrapper.querySelectorAll('.note');

  notes.forEach((note) => {
    note.remove();
  });
  localStorage.clear();
});

function addNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="note-header">
      <button id="edit-btn">
        <i class="fa-solid fa-file-pen"></i>
      </button>
      <button id="delete-btn"> 
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>

    <div class="main  ${text ? 'note-body' : 'hidden'}"></div>
    <textarea class="note-body ${
      text ? 'hidden' : ''
    }">${text}</textarea>
  `;

  const editBtn = note.querySelector('#edit-btn');
  const deleteBtn = note.querySelector('#delete-btn');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('.note-body');

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');

    updateLS();
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    main.innerHTML = value;

    updateLS();
  });

  notesWrapper.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea');
  let notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}
