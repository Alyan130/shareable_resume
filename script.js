var _a, _b, _c, _d, _e, _f;
var educationContainer = document.getElementById("education-container");
var skillsContainer = document.getElementById("skills-container");
var projectsContainer = document.getElementById("projects-container");
var form = document.getElementById("resume-form");
(_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var input = document.createElement("input");
    input.type = "text";
    input.required;
    input.classList.add("education");
    educationContainer === null || educationContainer === void 0 ? void 0 : educationContainer.appendChild(input);
});
(_b = document.getElementById("remove-education")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var _a;
    null;
    if ((educationContainer === null || educationContainer === void 0 ? void 0 : educationContainer.children.length) > 1) {
        (_a = educationContainer === null || educationContainer === void 0 ? void 0 : educationContainer.lastChild) === null || _a === void 0 ? void 0 : _a.remove();
    }
});
(_c = document.getElementById("add-skill")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add("skill");
    input.required;
    input.placeholder = "Enter a skill";
    skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.appendChild(input);
});
(_d = document.getElementById("remove-skill")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var _a;
    if ((skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.children.length) > 1) {
        (_a = skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.lastChild) === null || _a === void 0 ? void 0 : _a.remove();
    }
});
(_e = document.getElementById("add-project")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add("project");
    input.required;
    input.placeholder = "Enter a project";
    projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.appendChild(input);
});
(_f = document.getElementById("remove-project")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    var _a;
    if ((projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.children.length) > 1) {
        (_a = projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.lastChild) === null || _a === void 0 ? void 0 : _a.remove();
    }
});
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var profileSummary = document.getElementById('profile').value;
    var educationFields = document.querySelectorAll('.education');
    var educationHTML = '';
    educationFields.forEach(function (field) {
        educationHTML += "<li>".concat(field.value, "</li>");
    });
    var skillFields = document.querySelectorAll('.skill');
    var skillsHTML = '';
    skillFields.forEach(function (field) {
        skillsHTML += "<span class=\"badge\">".concat(field.value, "</span>");
    });
    var projectFields = document.querySelectorAll('.project');
    var projectsHTML = '';
    projectFields.forEach(function (field) {
        projectsHTML += "<li>".concat(field.value, "</li>");
    });
    var resumeHTML = "\n        <div id=\"intro\">\n            <h1>".concat(name, "</h1>\n            <div class=\"line\"></div> \n            <p>").concat(profileSummary, "</p> \n        </div>\n        <div class=\"contact-info\">\n            <div class=\"icon\">\n                <img src=\"./1000_F_141001208_v3DEsH43GqiCQlnOM6S3pSE8guHSJO74-removebg-preview.png\" alt=\"Phone Icon\">\n                <p>").concat(phone, "</p>\n            </div>\n            <div class=\"icon\">\n                <img src=\"./pngwing.com (2).png\" alt=\"Email Icon\">\n                <p>").concat(email, "</p>\n            </div>\n            <div class=\"icon\">\n                <img src=\"./pngwing.com (3).png\" alt=\"Address Icon\">\n                <p>").concat(address, "</p>\n            </div>\n        </div>\n        <div class=\"education-section\">\n            <h2>Education:</h2>\n            <ul>\n                ").concat(educationHTML, "\n            </ul>\n        </div>\n        <div class=\"skills-section\">\n            <h2>Skills:</h2>\n            <div class=\"line\"></div>\n            <div class=\"skills\">\n                <div class=\"line\"></div>\n                ").concat(skillsHTML, "\n            </div>\n        </div>\n        <div class=\"projects-section\">\n            <h2>Projects:</h2>\n            <ul>\n                ").concat(projectsHTML, "\n            </ul>\n        </div>\n    ");
    var resumeDisplay = document.getElementById('resume-display');
    var resume = document.getElementById("container");
    var download = document.getElementById("download-button");
    var editButton = document.getElementById("edit-button");
    var generateLinkButton = document.getElementById('generate-link-button');
    resumeDisplay.innerHTML = resumeHTML;
    resumeDisplay.style.display = 'block';
    resume.style.display = "none";
    download.style.display = "block";
    generateLinkButton.style.display = "block";
    editButton.style.display = "block";
    editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener("click", function () {
        var _a;
        (_a = document.querySelector("#intro h1")) === null || _a === void 0 ? void 0 : _a.setAttribute("contentEditable", "true");
        var education_items = document.querySelectorAll("p");
        education_items.forEach(function (e) {
            e === null || e === void 0 ? void 0 : e.setAttribute("contentEditable", "true");
        });
        var project_items = document.querySelectorAll("ul");
        project_items.forEach(function (e) {
            e === null || e === void 0 ? void 0 : e.setAttribute("contentEditable", "true");
        });
        var skill_items = document.querySelectorAll("span");
        skill_items.forEach(function (e) {
            e === null || e === void 0 ? void 0 : e.setAttribute("contentEditable", "true");
        });
    });
    generateLinkButton === null || generateLinkButton === void 0 ? void 0 : generateLinkButton.addEventListener('click', function () {
        var sanitizedName = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '');
        var uniquePath = "https://resume$/".concat(sanitizedName);
        navigator.clipboard.writeText(uniquePath).then(function () {
            alert('Link copied to clipboard: ' + uniquePath);
        }).catch(function (err) {
            console.error('Failed to copy text: ', err);
        });
    });
    download.addEventListener('click', function () {
        download.style.display = "none";
        editButton.style.display = "none";
        generateLinkButton.style.display = "none";
        if (resumeDisplay) {
            window.print();
        }
        download.style.display = "block";
        editButton.style.display = "block";
        generateLinkButton.style.display = "block";
    });
});
