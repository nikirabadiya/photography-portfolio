import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  ngOnInit(): void {
    // For the hero section banner slider customization
    $(document).ready(function () {
      var sectionHeight = $('.home-banner .banner-slider').outerHeight();
      $('.home-banner .slick-list, .home-banner .swiper-slide').css('height', sectionHeight);

      var $status = $('.paging-info');
      var $slickElement = $('.testimonial-show');

      $slickElement.on('init reInit afterChange', function (event: any, slick: any, currentSlide: any) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
      });
    });

    $(window).on('resize orientationchange', function () {
      setTimeout(function () {
        var slideLength = $('.home-banner .swiper-slide').length;
        var sectionHeight = $('.home-banner .banner-slider').outerHeight();
        var sliderTotalHeight = sectionHeight * slideLength;
        $('.home-banner .slick-track').css('height', sliderTotalHeight);
        $('.home-banner .slick-list, .home-banner .swiper-slide').css('height', sectionHeight);
        var activeIndex = $('.home-banner .slick-dots li.slick-active').index();
        $('.home-banner .slick-track').css({
          'height': sliderTotalHeight,
          'transform': 'translate3d(0,' + -(activeIndex * sectionHeight) + 'px, 0)'
        });
      }, 500);
    });

    $(window).on('load', function () {
      setTimeout(function () {
        var sectionHeight = $('.home-banner .banner-slider').outerHeight();
        $('.home-banner .slick-list, .home-banner .swiper-slide').css('height', sectionHeight);
      }, 500);
    });
  }

  slickInit(e: any) { };

  slickDestroy(e: any) { };

  breakpoint(e: any) { };

  afterChange(e: any) { };

  beforeChange(e: any) { };

  bannerSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    touchMove: true,
    swipeToSlide: true,
    swipe: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: function (slider: any, i: any) {
      var thumb = $(slider.$slides[i]).data();
      return `<a>${i + 1}</a>`;
    },
  };

  testimonialConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          autoplaySpeed: 7000,
          fade: false,
          speed: 300,
        },
      },
    ],
  };

  featureConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    touchMove: true,
    swipeToSlide: true,
    swipe: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  galleryConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    touchMove: true,
    swipeToSlide: true,
    swipe: true,
    infinite: true,
    centerMode: true,
    centerPadding: '90px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: '70px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '90px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  homeSlides = [
    {
      imgSrc: 'assets/images/banner-bg-01.jpg'
    },
    {
      imgSrc: 'assets/images/banner-bg-02.jpg'
    },
    {
      imgSrc: 'assets/images/banner-bg-03.jpg'
    },
    {
      imgSrc: 'assets/images/banner-bg-04.jpg'
    }
  ]

  testimonialSlides = [
    {
      img: 'assets/images/testimonial-01.jpg',
      title: 'John Baxter'
    },
    {
      img: 'assets/images/testimonial-02.jpg',
      title: 'Mike Cohen'
    },
    {
      img: 'assets/images/testimonial-03.jpg',
      title: 'Clarissa Miller'
    },
    {
      img: 'assets/images/testimonial-04.jpg',
      title: 'Maya Piretti'
    },
    {
      img: 'assets/images/testimonial-05.jpg',
      title: 'Hermann Mayer'
    },
    {
      img: 'assets/images/testimonial-06.jpg',
      title: 'Jason Meyers'
    }, {
      img: 'assets/images/testimonial-07.jpg',
      title: 'Kendra Wilson'
    }
  ]

  collections = [
    {
      collectionImg: 'assets/images/block-img-01.jpg',
      collectionTitle: 'Lorem Ipsum',
      sub: 'Subtitle',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur distinctio! Dignissimos voluptates fugiat, reprehenderit eius nihil quisquam illo provident itaque, iste, blanditiis possimus distinctio hic. Laboriosam repudiandae itaque ab!`
    },
    {
      collectionImg: 'assets/images/block-img-02.jpg',
      collectionTitle: 'Dafa fajeaee',
      sub: 'Subtitle',
      description: `Incidunt, distinctio omnis tempore commodi aperiam officiis voluptatibus consequuntur blanditiis recusandae provident velit! Dicta quae facilis qui deleniti animi inventore quaerat voluptatem!`
    },
    {
      collectionImg: 'assets/images/block-img-03.jpg',
      collectionTitle: 'Hdoda efoaefhad',
      sub: 'Subtitle',
      description: `Neque, eligendi magni tempora aliquam quibusdam itaque iste!
      Mollitia quod voluptates id ipsum, assumenda tempore? Rem blanditiis est similique. Ea iusto beatae consectetur voluptatibus aperiam reprehenderit ipsam architecto corrupti ipsa, dolor, placeat numquam.`
    }
  ]

  features = [
    {
      imgSrc: 'assets/images/feature-img-01.jpeg',
      title: 'Oeyertgdch',
      sub: 'Peru',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi, numquam maiores, autem aliquid harum est a architecto, nesciunt asperiores similique blanditiis obcaecati non nulla. Maxime, aliquam? Expedita, eum accusantium.
      Reiciendis ab quos accusantium aliquid facere iste quia perspiciatis in est molestias earum quisquam possimus cum, deserunt voluptates pariatur accusamus veniam. Ad quam delectus blanditiis quod! Iure quasi minima suscipit.`
    },
    {
      imgSrc: 'assets/images/feature-img-02.jpeg',
      title: 'Sfaidfoisjd',
      sub: 'Russia',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptate harum perferendis fuga voluptatem accusamus.`
    },
    {
      imgSrc: 'assets/images/feature-img-03.jpg',
      title: 'Hfslfkjasd',
      sub: 'Poland',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quas laborum unde quis, enim commodi, adipisci soluta, qui veniam nihil asperiores culpa! Ipsam, similique. Quod sit atque excepturi sapiente assumenda!`
    },
    {
      imgSrc: 'assets/images/feature-img-04.jpg',
      title: 'Fdanrfiasjfla',
      sub: 'Japan',
      description: `Cum aperiam, odio molestiae dolores rerum ducimus cupiditate culpa fugit distinctio quos, beatae et illo eum temporibus corrupti quidem, quam ipsum similique!`
    }
  ]

  gallery = [
    {
      imgSrc: 'assets/images/image-slider-01.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-02.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-03.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-04.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-05.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-06.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-07.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-08.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-09.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-10.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-11.jpg'
    },
    {
      imgSrc: 'assets/images/image-slider-12.jpg'
    }
  ]
}
