const educationContainer = document.getElementById("education-container") as HTMLDivElement;
const skillsContainer = document.getElementById("skills-container") as HTMLDivElement;
const projectsContainer = document.getElementById("projects-container") as HTMLDivElement;
const form = document.getElementById("resume-form") as HTMLFormElement;

document.getElementById("add-education")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.required;
    input.classList.add("education");
    educationContainer?.appendChild(input);
});

document.getElementById("remove-education")?.addEventListener("click", () => {
    if (educationContainer?.children.length == 1) {
        null;
    } else {
        educationContainer?.lastChild?.remove();
    }
});

document.getElementById("add-skill")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("skill");
    input.required;
    input.placeholder = "Enter a skill";
    skillsContainer?.appendChild(input);
});

document.getElementById("remove-skill")?.addEventListener("click", () => {
    if (skillsContainer?.children.length == 1) {
        null;
    } else {
        skillsContainer?.lastChild?.remove();
    }
});

document.getElementById("add-project")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("project");
    input.required;
    input.placeholder = "Enter a project";
    projectsContainer?.appendChild(input);
});

document.getElementById("remove-project")?.addEventListener("click", () => {
    if (projectsContainer?.children.length == 1) {
        null;
    } else {
        projectsContainer?.lastChild?.remove();
    }
});

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const profileSummary = (document.getElementById('profile') as HTMLTextAreaElement).value;

    const educationFields = document.querySelectorAll('.education') as NodeListOf<HTMLInputElement>;
    let educationHTML = '';
    educationFields.forEach(function (field: HTMLInputElement) {
        educationHTML += `<li>${field.value}</li>`;
    });

    const skillFields = document.querySelectorAll('.skill') as NodeListOf<HTMLInputElement>;
    let skillsHTML = '';
    skillFields.forEach(function (field: HTMLInputElement) {
        skillsHTML += `<span class="badge">${field.value}</span>`;
    });

    const projectFields = document.querySelectorAll('.project') as NodeListOf<HTMLInputElement>;
    let projectsHTML = '';
    projectFields.forEach(function (field: HTMLInputElement) {
        projectsHTML += `<li>${field.value}</li>`;
    });

    const resumeHTML = `
        <div id="intro">
            <h1>${name}</h1>
            <div class="line"></div> 
            <p>${profileSummary}</p> 
        </div>
        <div class="contact-info">
            <div class="icon">
                <img src="./1000_F_141001208_v3DEsH43GqiCQlnOM6S3pSE8guHSJO74-removebg-preview.png" alt="">
                <p>${phone}</p>
            </div>
            <div class="icon">
                <img src="./pngwing.com (2).png" alt="">
                <p>${email}</p>
            </div>
            <div class="icon">
                <img src="./pngwing.com (3).png" alt="">
                <p>${address}</p>
            </div>
        </div>
        <div class="education-section">
            <h2>Education:</h2>
            <ul>
                ${educationHTML}
            </ul>
        </div>
        <div class="skills-section">
            <h2>Skills:</h2>
            <div class="line"></div>
            <div class="skills">
                <div class="line"></div>
                ${skillsHTML}
            </div>
        </div>
        <div class="projects-section">
            <h2>Projects:</h2>
            <ul>
                ${projectsHTML}
            </ul>
        </div>
        <button style="margin-top:25px" id="edit-button">Edit Resume</button>
        <button id="download-button">Download cv</button>
    `;


    const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
    const resume = document.getElementById("container") as HTMLElement;
    resumeDisplay.innerHTML = resumeHTML;
    resumeDisplay.style.display = 'block';
    resume.style.display = "none";

    const editButton = document.getElementById("edit-button") as HTMLButtonElement;
    editButton?.addEventListener("click", (e) => {
        document.querySelector("#intro h1")?.setAttribute("contentEditable", "true");

        const education_items = document.querySelectorAll("p");
        education_items.forEach(e => {
            e?.setAttribute("contentEditable", "true");
        });

        const project_items = document.querySelectorAll("ul");
        project_items.forEach(e => {
            e?.setAttribute("contentEditable", "true");
        });

        const skill_items = document.querySelectorAll("span");
        skill_items.forEach(e => {
            e?.setAttribute("contentEditable", "true");
        });
    });

    const download=document.getElementById("download-button");
    download?.addEventListener("click",()=>{
      editButton.style.display="none";
      download.style.display="none";
      window.print();
    })
});

