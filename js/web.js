		const sections = document.querySelectorAll('section, div.c1, div.c2');
        window.addEventListener('scroll', () => {
            const triggerBottom = window.innerHeight / 1.5;
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if(sectionTop < triggerBottom) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });

        // Image gallery and modal functionality
        const projectsImages = {
            1: [	//stormaze
                'imgs/projs/stormaze/web/0.jpg', 
                'imgs/projs/stormaze/web/1.jpg',
                'imgs/projs/stormaze/web/2.jpg',
                'imgs/projs/stormaze/web/3.jpg',
                'imgs/projs/stormaze/web/4.jpg',
                'imgs/projs/stormaze/web/5.jpg',
                'imgs/projs/stormaze/web/6.jpg',
                'imgs/projs/stormaze/web/7.jpg',
                'imgs/projs/stormaze/app/1.png',
                'imgs/projs/stormaze/app/2.jpg',
                'imgs/projs/stormaze/app/3.jpg',
                'imgs/projs/stormaze/app/4.jpg',
                'imgs/projs/stormaze/app/5.png',
                'imgs/projs/stormaze/app/6.png',
                'imgs/projs/stormaze/app/7.png',
                'imgs/projs/stormaze/app/8.jpg',
            ],
            2: [	//PSI
                'imgs/projs/psi/1.jpg',
                'imgs/projs/psi/2.jpg',
                'imgs/projs/psi/3.jpg',
                'imgs/projs/psi/4.jpg',
                'imgs/projs/psi/5.jpg',
                'imgs/projs/psi/6.jpg',
            ],
            3: [	//PGA-DCM
                'imgs/projs/dcm/1.png',
                'imgs/projs/dcm/2.png',
                'imgs/projs/dcm/3.png',
                'imgs/projs/dcm/4.png',
                'imgs/projs/dcm/5.png',
                'imgs/projs/dcm/6.png',
                'imgs/projs/dcm/7.png',
                'imgs/projs/dcm/8.png',
            ],
	        4: [	//Exlog
                'imgs/projs/exlog/1.jpg',
                'imgs/projs/exlog/2.jpg',
                'imgs/projs/exlog/3.jpg',
                'imgs/projs/exlog/4.jpg',
                'imgs/projs/exlog/5.jpg',
                'imgs/projs/exlog/6.jpg',
                'imgs/projs/exlog/7.jpg',
                'imgs/projs/exlog/8.jpg',
                'imgs/projs/exlog/9.jpg',
                'imgs/projs/exlog/10.jpg',
            ],
	        5: [	//IDEM
                'imgs/projs/idem/1.jpg',
                'imgs/projs/idem/2.jpg',
                'imgs/projs/idem/3.jpg',
                'imgs/projs/idem/4.jpg',
                'imgs/projs/idem/5.jpg',
                'imgs/projs/idem/6.jpg',
                'imgs/projs/idem/7.jpg',
                'imgs/projs/idem/8.jpg',
            ],
	        6: [	//KPI
                'imgs/projs/kpi/1.png',
                'imgs/projs/kpi/2.png',
                'imgs/projs/kpi/3.png',
                'imgs/projs/kpi/4.png',
                'imgs/projs/kpi/5.png',
                'imgs/projs/kpi/6.png',
            ],
            7: [	//Surelog
                'imgs/projs/surelog/1.jpg',
                'imgs/projs/surelog/2.jpg',
                'imgs/projs/surelog/3.jpg',
                'imgs/projs/surelog/4.jpg',
                'imgs/projs/surelog/5.jpg',
                'imgs/projs/surelog/6.jpg',
                'imgs/projs/surelog/7.jpg',
                'imgs/projs/surelog/8.jpg',
                'imgs/projs/surelog/9.jpg',
            ],
        };

        const imageLength = [0,15,5,7,9,7,5,8];
        selectedGallery = 0;
        const modalImg = document.getElementById("modalImg");
        currentImg = 0;

        function openGallery(projectId) {
            const modal = document.getElementById("modal");
            modal.style.display = "flex";
            selectedGallery = projectId;
            currentImg = 0;
            // Load first image of project
            modalImg.src = projectsImages[projectId][0];

        }

        function next(){
            currentImg++;
            mylength = imageLength[selectedGallery];
            if(currentImg > mylength ){ currentImg = 0; }
            modalImg.src = projectsImages[selectedGallery][currentImg];
        }

        function back(){
            currentImg--;
            mylength = imageLength[selectedGallery];
            if(currentImg < 0 ){ currentImg = mylength; }
            modalImg.src = projectsImages[selectedGallery][currentImg];
        }

        function closeModal() {
            document.getElementById("modal").style.display = "none";
            const existingGallery = document.querySelector('.gallery');
            if (existingGallery) {
                existingGallery.remove();
            }
        }

        window.onload = function() {
            var script = document.createElement("script");
            script.src = "external-script.js";
            document.body.appendChild(script);
        };

        if (window.innerWidth <= 768) {
            // Mobile screen
            document.querySelectorAll('pre').forEach(preTag => {
                const pTag = document.createElement('p');
                pTag.textContent = preTag.textContent;
                pTag.classList.add('aboutTxt');
                preTag.replaceWith(pTag);
            });
        } else {
            // Desktop screen
            console.log("Desktop device");
        }