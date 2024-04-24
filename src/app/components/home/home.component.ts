import { Component } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit(): void {
    $(document).ready(function () {
    });
  }

  // slideConfig = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: true,
  //   arrows: false,
  //   customPaging: function (slider: any, i: any) {
  //     var thumb = $(slider.$slides[i]).data();
  //     return `<a>${i + 1}</a>`;
  //   },
  // };

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
  };

  homeSlides = [
    {
      imgSrc: 'assets/images/banner-bg-01.jpeg'
    },
    {
      imgSrc: 'assets/images/banner-bg-02.jpeg'
    },
    {
      imgSrc: 'assets/images/banner-bg-03.jpeg'
    }
  ]
}
