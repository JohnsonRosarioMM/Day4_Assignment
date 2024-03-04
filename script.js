// 1. Create your own resume data in JSON format
document.addEventListener("DOMContentLoaded", function () {
    fetch('resume.json')
        .then(response => response.json())
        .then(data => {
            let display = document.getElementById("display");

            let namedata = document.createElement('p');
            namedata.textContent = `Name: ${data.name}`;

            let dobdata = document.createElement('p');
            dobdata.textContent = `Contact: ${data.digi.ph}`;

            let edudata = document.createElement('p');
            edudata.textContent = `Education: ${data.edu.clg}`;

            let skilldata = document.createElement('p');
            skilldata.textContent = `Skills: ${data.skill}`;
        
            let wedata = document.createElement('p');
            wedata.textContent = `Work Expirence: ${data.we}`;

            let landata = document.createElement('p');
            landata.textContent = `Languages known: ${data.lan}`;

            let achdata = document.createElement('p');
            achdata.textContent = `Achivements: ${data.ach}`;

            let recdata = document.createElement('p');
            recdata.textContent = `Awards: ${data.rec}`;

            let cerdata = document.createElement('p');
            cerdata.textContent = `Certifications: ${data.cer}`;

            display.append(namedata,dobdata,edudata,skilldata,
                wedata,landata,achdata,recdata,cerdata);
        })
        .catch();
});

