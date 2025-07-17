function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}   
// // Typewriter Effect
// const text = "I'm a Web Developer & AI Enthusiast";
// const typewriterElement = document.getElementById("typewriter");

// let index = 0;
// let isDeleting = false;

// function typeEffect(){
//     let currentText = text.substring(0, index);
//     typewriterElement.textContent = currentText;

//     if(!isDeleting && index < text.length){
//         index++;
//         setTimeout(typeEffect,100);
//     }else if(isDeleting && index > 0){
//         setTimeout(typeEffect,50);
//     }else{
//         isDeleting = !isDeleting;
//         setTimeout(typeEffect,1000);
//     }
// }

// Dynamically generate project cards
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            img: './assets/projekdjango.png',
            title: 'Project Django',
            github: 'https://github.com/Ahmad-FikriA/wingsky-management',
            liveDemo: '#',
            projectText: 'A School Django project for managing CRUD Restaurant.'
        },
        {
            img: './assets/projekblog.png',
            title: 'Project Blog',
            github: 'https://github.com/Ahmad-FikriA',
            liveDemo: 'https://intronet69.wordpress.com/'
        },
        {
            img: './assets/webhmif.png',
            title: 'Website HMIF',
            github: 'https://github.com/firdausmntp/hmif',
            liveDemo: '#',
            liveDemoText: 'On Progress',
            projectText: 'A website for HMIF (Himpunan Mahasiswa Informatika) at Universitas Sultan Ageng Tirtyasa.'
        },
        {
            img: './assets/aifooddetection.png',
            title: 'Website Food Nutrition AI',
            github: 'https://github.com/Ahmad-FikriA/ai_food_detection',
            liveDemo: 'https://github.com/Ahmad-FikriA',
            projectText: 'A web application that uses AI to detect food nutrition.'
        },
        {
            img: './assets/FaceAttendance.png',
            title: 'Face Attendance System',
            github: 'https://github.com/IsmetMaulanaAzhari/Absen_Muka',
            liveDemo: '#',
            liveDemoText: '(Off) <br>Live Demo',
            projectText: 'A machine learning project for face attendance system.'
        },
        {
            img: './assets/pinjamruang.png',
            title: 'Room Reservation System',
            github: 'https://github.com/Ahmad-FikriA/sistem_peminjaman_ruang',
            liveDemo: 'https://github.com/Ahmad-FikriA',
            projectText: 'A web application for managing room reservations at the campus.'
        }
        ];

        const projectsContainer = document.getElementById('projects-container');

        projects.forEach(project => {
        const projectCard = `
            <div class="details-container color-container">
                <div class="article-container">
                    <div class="image-wrapper">
                        <img src="${project.img}" alt="${project.title}" class="project-img" />
                        <div class="overlay">
                            <button class="overlay-btn" onclick="location.href='${project.github}'">
                                GitHub
                            </button>
                        </div>
                    </div>
            </div>
        <h2 class="experience-sub-title project-title">${project.title}</h2>
        <p class="project-text">A project that showcases my skills in web development and AI.</p>
    </div>
        `;
        projectsContainer.insertAdjacentHTML('beforeend', projectCard);
    });
});
