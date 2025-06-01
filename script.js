export const tickets = [];



export const mainContainer = document.querySelector('main');



export function initializeContent() {
    const formContainer = `<div class="main_container main_container_form">
      <h2>
        Your Journey to Coding Conf<br />
        2025 Starts Here!
      </h2>
      <p>Secure your spot at next year's biggest coding conference.</p>
      <form action="" method="" id="user-form">
      <fieldset>
          <label for="userAvatar" class="select_label">Upload Avatar</label>
          <label for="userAvatar" class="upload_label">
            <span class="user_avatar"><img src="./assets/images/icon-upload.svg" alt="upload-icon"></span>
            <span>Drag and drop or click to upload</span>
            <input type="file" name="userAvatar" id="userAvatar" accept="image/png,image/jpeg" required hidden>
          </label>
          <span class="validation-message">Upload your photo (JPG or PNG, max size: 500KB)</span>
      </fieldset>
      <fieldset>
        <label for="user-name" class="select_label">Full Name</label>
        <input type="text" name="name" id="user-name" minlength="5"  required>
      </fieldset>
      <fieldset>
        <label for="user-email" class="select_label">Email Address</label>
        <input type="email" name="email" id="user-email" placeholder="example@gmail.com" required>
      </fieldset>
      <fieldset>
        <label for="user-github_username" class="select_label">GitHub Username</label>
        <input type="text" name="github-username" id="user-github_username" placeholder="@yourusername" minlength="5"  required>
      </fieldset>
      <input type="submit" value="Generate My Ticket">
      <!-- <input type="reset" value="Reset"> -->
      </form>
    </div>`
    mainContainer.insertAdjacentHTML('beforeend', formContainer);
    console.log(mainContainer);
}
initializeContent();


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Ulitlity function declaration and vairables for avatar upload UI 
const userAvatar = document.querySelector('.user_avatar img');
const dropArea = document.querySelector('.upload_label');
export const inputFile = document.querySelector('#userAvatar');
const validationMessage = document.querySelector('.validation-message');
const fileList = inputFile.files;

// To queuFree to filelist of inputFile
function removeFile(indexToRemove) {
  const files = Array.from(fileList);
  files.splice(indexToRemove, 1); // Remove the file at the specified index

  const newFileList = new DataTransfer();
  files.forEach(file => newFileList.items.add(file));

  inputFile.files = newFileList.files;
}
// To queuFree to filelist of inputFile

function changeAvatar() {
    checkValidation();
}

function checkValidation() {
    const imageLink = URL.createObjectURL(inputFile.files[0]);

    if(inputFile.files[0].size >= 500000) {
        if(inputFile.files[0].type === 'image/jpeg' || inputFile.files[0].type === 'image/png') {
            validationMessage.textContent = 'Upload your photo (JPG or PNG, max size: 500KB)';
            validationMessage.style.color = 'red';
            userAvatar.src = 'assets/images/icon-upload.svg';
            removeFile(0);
            // console.log(inputFile.files);
        }
        
    } else {
        if(inputFile.files[0].type === 'image/jpeg' || inputFile.files[0].type === 'image/png') {
            validationMessage.textContent = `Uploaded`;
            validationMessage.style.color = 'green';
            userAvatar.src = `${imageLink}`;
        } else {
            validationMessage.textContent = 'Upload your photo (JPG or PNG, max size: 500KB)';
            validationMessage.style.color = 'red';
            userAvatar.src = 'assets/images/icon-upload.svg';
            removeFile(0);
        }
        
    }
}
// Ulitlity function declaration for avatar upload UI 

console.log(window);
inputFile.addEventListener('change', changeAvatar);

dropArea.addEventListener('dragover', e => {
    e.preventDefault();
})

dropArea.addEventListener('drop', e => {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    // const imageLink = URL.createObjectURL(inputFile.files[0]);
    checkValidation();
})
const objs = [{
  name: 'Pallab Bora',
  age: 12
}]
// const obj1 = {
//   name: 'Pallab Bora',
//   age: 12
// }





