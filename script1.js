import { tickets, mainContainer, inputFile } from "./script.js";

const ticketGenButton = document.querySelector('input[type="submit"]');
const inputName = document.querySelector("#user-name");
const inputEmail = document.querySelector("#user-email");
const inputGithubID = document.querySelector("#user-github_username");
const ticketNumbers = [];

function logger() {
  console.log(inputName.value);
}

function genUniqueTicketNo() {
  let no = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
  if (ticketNumbers.includes(no)) {
    genUniqueTicketNo();
  } else {
    return no;
  }
}

function generateTicket() {
  // console.log(inputFile.files.length > 0);
  const ticketNumber = genUniqueTicketNo();
  const tempTicket = {};

  if (inputFile.files.length > 0) {
    if (inputName.value && inputName.value.length > 4) {
      if (inputName.parentElement.querySelector(".validation-message")) {
        inputName.parentElement.querySelector(".validation-message").remove();
      }
      if (inputEmail.value.includes("@gmail.com")) {
        // console.log(inputEmail.parentElement.querySelector('.validation-message'));
        if (inputEmail.parentElement.querySelector(".validation-message")) {
          inputEmail.parentElement
            .querySelector(".validation-message")
            .remove();
        }

        if (inputGithubID.value && inputGithubID.value.length > 4) {
          if (
            inputGithubID.parentElement.querySelector(".validation-message")
          ) {
            inputGithubID.parentElement
              .querySelector(".validation-message")
              .remove();
          }
          if (
            tickets.find((ticket) => {
              ticket.email === inputEmail.value;
            }) === undefined
          ) {
            tempTicket.name = inputName.value;
            tempTicket.avatar = URL.createObjectURL(inputFile.files[0]);
            tempTicket.email = inputEmail.value;
            tempTicket.githubID = inputGithubID.value;
            tempTicket.ticketNo = String(
              ticketNumber
            );
            displayTicket(tempTicket);
            tickets.push(tempTicket);
          } else {
            mainContainer.innerHTML = '';
            mainContainer.insertAdjacentHTML('beforeend', '<h2>You have already registered</h2>');
            mainContainer.insertAdjacentHTML('beforeend', `<p>Check your email we have already sent your ticket to ${inputEmail.value}</p>`);
          }
        } else {
          if (
            inputGithubID.parentElement.querySelector(".validation-message") ===
            null
          ) {
            inputGithubID.insertAdjacentHTML(
              "afterend",
              '<span class="validation-message validation-messageth">Please fill the required field correctly<span>'
            );
          }
        }
      } else {
        if (
          inputEmail.parentElement.querySelector(".validation-message") === null
        ) {
          inputEmail.insertAdjacentHTML(
            "afterend",
            '<span class="validation-message validation-messageth">Please fill the required field correctly<span>'
          );
        }
      }
    } else {
      console.log("validation-message");
      inputName.insertAdjacentHTML(
        "afterend",
        '<span class="validation-message validation-messageth">Please fill the required field correctly<span>'
      );
    }
  } else {
    // console.log(inputFile.parentElement.parentElement.querySelector('.validation-message'));
    inputFile.parentElement.parentElement
      .querySelector(".validation-message")
      .classList.add("validation-messageth");
    // document.querySelector('fieldset:nth-child(1) span').classList.add('validation-messageth');
  }
}

function displayTicket(ticket) {
  const html = `<div class="main_container mian_container_approved hiddens">
      <h2 class="appr_message">
        Congrates, <span>${ticket.name}!</span> <br> Yor ticket is ready.
      </h2>
      <p class="update_message">WE have emailed your ticket to <br> <span>${
        ticket.email
      }</span> and will send updates in <br> the run up to the event.</p>

      <div class="ticket">
        <div class="event_details">
          <img src="./assets/images/logo-mark.svg" alt="Ticket" style="float: left;">
          <h3>Coding Conf</h3>
          <p>Jan 31, 2025 / Austin, TX</p>
        </div>

        <div class="user_info">
          <img src="${ticket.avatar}" alt="image_logo">
          <h4>${ticket.name}</h4>
          <p><img src="./assets/images/icon-github.svg" alt="github-icon" width="25px">${
            ticket.githubID
          }</p>
        </div>
        
        <p class="ticket_number">${ticket.ticketNo.padStart(6, "#0")}</p>
      </div>
    </div>`;
  mainContainer.innerHTML = "";
  mainContainer.insertAdjacentHTML("beforeend", html);
}
console.log(ticketGenButton);

ticketGenButton.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();
  generateTicket();
});
