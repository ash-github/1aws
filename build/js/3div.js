  let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('#carouselWrapper img');
            const totalSlides = slides.length;
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }
            const offset = -currentSlide * 100;
            document.getElementById('carouselWrapper').style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }