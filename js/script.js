// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce


Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            currentActiveSlide: 0,
            clock: null,

            slides:  [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ]
        },
        methods: {
            showNextSlide: function () {
                if (this.currentActiveSlide < this.slides.length - 1){
                    this.currentActiveSlide++;
                } else {
                    this.currentActiveSlide = 0;
                }
            },
            showPrevSlide: function () {
                if (this.currentActiveSlide > 0) {
                    this.currentActiveSlide--;
                } else {
                    this.currentActiveSlide = this.slides.length - 1
                }
            },
            changeSlide: function (index){
                this.currentActiveSlide = index;
            },
            startAutoplay: function () {
                this.clock = setInterval(this.showNextSlide, 1000)
            },
            stopAutoplay: function () {
                clearInterval(this.clock)
            }
        },
        created: function () {
            this.startAutoplay();
        }
    }
);