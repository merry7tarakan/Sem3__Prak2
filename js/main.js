"use strict";
var bodyStyles = window.getComputedStyle(document.body),
    gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));
if (document.querySelector(".we-offer")) var accordion1 = new GraphAccordion(".accordion-1", {
        speed: 300
    }),
    accordion2 = new GraphAccordion(".accordion-2", {
        speed: 300
    });
var burger = document.querySelector(".burger"),
    menu = document.querySelector(".header__nav"),
    overlay = document.querySelector(".overlay"),
    disScroll = function() {
        var e = window.scrollY;
        document.body.classList.add("dis-scroll"), document.body.dataset.position = e, document.body.style.top = -e + "px"
    },
    enScroll = function() {
        var e = parseInt(document.body.dataset.position, 10);
        document.body.style.top = "auto", document.body.classList.remove("dis-scroll"), window.scrollTo({
            top: e,
            left: 0
        }), document.body.removeAttribute("data-position")
    };
burger.addEventListener("click", (function(e) {
    burger.classList.toggle("burger--active"), menu.classList.toggle("header__nav--active"), overlay.classList.toggle("overlay--active"), burger.classList.contains("burger--active") ? disScroll() : enScroll()
})), console.log("maxgraph");
var modal = new GraphModal,
    portfolioTabsNav = document.querySelector(".portfolio-tabs-nav"),
    portfolioTabsBtns = document.querySelectorAll(".portfolio-tabs-nav__btn"),
    portfolioTabsItems = document.querySelectorAll(".portfolio-tabs__item"),
    portfolioTabsItemsVisible = document.querySelectorAll(".portfolio-tabs__item--visible"),
    loadMore = document.querySelector(".portfolio-more"),
    maxItems = 9;
if (portfolioTabsNav) {
    var isLoadMoreNeeded = function(e) {
            e.length <= maxItems ? loadMore.style.display = "none" : loadMore.style.display = "inline-flex"
        },
        hideMoreItems = function(e) {
            e.length > maxItems && Array.from(e).slice(maxItems, e.length).forEach((function(e) {
                e.classList.remove("portfolio-tabs__item--visible"), e.classList.remove("portfolio-tabs__item--visible-more")
            }))
        };
    portfolioTabsNav.addEventListener("click", (function(e) {
        var t = e.target;
        if (t.classList.contains("portfolio-tabs-nav__btn")) {
            var o = t.dataset.path;
            portfolioTabsBtns.forEach((function(e) {
                e.classList.remove("portfolio-tabs-nav__btn--active")
            })), t.classList.add("portfolio-tabs-nav__btn--active"), portfolioTabsItems.forEach((function(e) {
                e.classList.remove("portfolio-tabs__item--visible"), e.classList.remove("portfolio-tabs__item--visible-more")
            })), document.querySelectorAll('[data-target="'.concat(o, '"]')).forEach((function(e) {
                e.closest(".portfolio-tabs__item").classList.add("portfolio-tabs__item--visible")
            })), isLoadMoreNeeded(document.querySelectorAll('[data-target="'.concat(o, '"]'))), hideMoreItems(document.querySelectorAll(".portfolio-tabs__item--visible")), "all" == o && (portfolioTabsItems.forEach((function(e) {
                e.classList.add("portfolio-tabs__item--visible")
            })), isLoadMoreNeeded(document.querySelectorAll(".portfolio-tabs__item--visible")), hideMoreItems(document.querySelectorAll(".portfolio-tabs__item--visible")))
        }
    })), hideMoreItems(portfolioTabsItems), isLoadMoreNeeded(portfolioTabsItemsVisible), loadMore.addEventListener("click", (function(e) {
        document.querySelectorAll(".portfolio-tabs__item--visible");
        var t = document.querySelector(".portfolio-tabs-nav__btn--active").dataset.path;
        console.log(t), "all" == t ? portfolioTabsItems.forEach((function(e) {
            e.classList.add("portfolio-tabs__item--visible-more"), loadMore.style.display = "none"
        })) : (document.querySelectorAll('[data-target="'.concat(t, '"]')).forEach((function(e) {
            e.closest(".portfolio-tabs__item").classList.add("portfolio-tabs__item--visible-more")
        })), loadMore.style.display = "none")
    }))
}
var circles = document.querySelectorAll(".facts-element__circle");
circles.forEach((function(e) {
    if ("true" == e.dataset.percentage) {
        var t = e.querySelector(".progress"),
            o = e.querySelector(".facts-element__value"),
            i = t.getAttribute("r"),
            r = 2 * Math.PI * i,
            s = e.dataset.full,
            l = e.dataset.value,
            a = Math.floor(l / s * 100);
        o.textContent = l, t.setAttribute("stroke-dasharray", r), t.setAttribute("stroke-dashoffset", r - r * a / 100)
    } else {
        var n = e.querySelector(".progress"),
            d = e.querySelector(".facts-element__value"),
            c = n.getAttribute("r"),
            v = 2 * Math.PI * c,
            u = e.dataset.percent,
            p = Math.floor(u);
        d.textContent = u + "%", n.setAttribute("stroke-dasharray", v), n.setAttribute("stroke-dashoffset", v - v * p / 100)
    }
}));
var selects = document.querySelectorAll(".form-field__select");
selects.forEach((function(e) {
    new Choices(e, {
        shouldSort: !1,
        position: "bottom",
        searchEnabled: !1
    })
}));
var portSlider = document.querySelector(".portfolio-section__items"),
    relatedSlider = document.querySelector(".related-projects__items");
if (portSlider) {
    var portfolioSlider = new Swiper(portSlider, {
        slidesPerView: 1,
        spaceBetween: gap,
        on: {
            init: function() {
                var e = portSlider.querySelector(".swiper-slide-active"),
                    t = e.nextElementSibling,
                    o = t.nextElementSibling;
                e.classList.add("slider-visible"), t.classList.add("slider-visible"), o.classList.add("slider-visible")
            }
        },
        navigation: {
            nextEl: ".portfolio-section__next",
            prevEl: ".portfolio-section__prev"
        },
        breakpoints: {
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            }
        }
    });
    document.querySelector(".portfolio-section__prev").addEventListener("click", (function() {
        var e = portSlider.querySelector(".swiper-slide-next");
        if (document.querySelectorAll(".portfolio-section__items .swiper-slide").forEach((function(e) {
                e.classList.remove("slider-visible")
            })), e.previousElementSibling) {
            var t = e.previousElementSibling;
            e.classList.add("slider-visible"), t.classList.add("slider-visible"), e.nextElementSibling.classList.add("slider-visible")
        }
    })), document.querySelector(".portfolio-section__next").addEventListener("click", (function() {
        var e = portSlider.querySelector(".swiper-slide-active"),
            t = e.nextElementSibling,
            o = t.nextElementSibling;
        document.querySelectorAll(".portfolio-section__items .swiper-slide").forEach((function(e) {
            e.classList.remove("slider-visible")
        })), e.classList.add("slider-visible"), t.classList.add("slider-visible"), o.classList.add("slider-visible")
    }))
}
if (relatedSlider) {
    var relatedProjSlider = new Swiper(relatedSlider, {
        slidesPerView: 1,
        spaceBetween: gap,
        on: {
            init: function() {
                var e = relatedSlider.querySelector(".swiper-slide-active"),
                    t = e.nextElementSibling,
                    o = t.nextElementSibling;
                e.classList.add("slider-visible"), t.classList.add("slider-visible"), o.classList.add("slider-visible")
            }
        },
        navigation: {
            nextEl: ".related-projects__next",
            prevEl: ".related-projects__prev"
        },
        breakpoints: {
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            }
        }
    });
    document.querySelector(".related-projects__prev").addEventListener("click", (function() {
        var e = relatedSlider.querySelector(".swiper-slide-next");
        if (document.querySelectorAll(".related-projects__items .swiper-slide").forEach((function(e) {
                e.classList.remove("slider-visible")
            })), e.previousElementSibling) {
            var t = e.previousElementSibling;
            e.classList.add("slider-visible"), t.classList.add("slider-visible"), e.nextElementSibling.classList.add("slider-visible")
        }
    })), document.querySelector(".related-projects__next").addEventListener("click", (function() {
        var e = relatedSlider.querySelector(".swiper-slide-active"),
            t = e.nextElementSibling,
            o = t.nextElementSibling;
        document.querySelectorAll(".related-projects__items .swiper-slide").forEach((function(e) {
            e.classList.remove("slider-visible")
        })), e.classList.add("slider-visible"), t.classList.add("slider-visible"), o.classList.add("slider-visible")
    }))
}
var testimonialsSlider = new Swiper(".testimonials__items", {
        slidesPerView: 1,
        spaceBetween: gap,
        loop: !0,
        navigation: {
            nextEl: ".testimonials__next",
            prevEl: ".testimonials__prev"
        }
    }),
    workImages = document.querySelector(".work-images-slider");
if (workImages) var workSlider = new Swiper(".work-images-nav", {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: !0,
        watchSlidesProgress: !0,
        breakpoints: {
            576: {
                slidesPerView: 6
            },
            768: {
                slidesPerView: 10
            }
        }
    }),
    workSlidesNav = new Swiper(workImages, {
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".work-images__next",
            prevEl: ".work-images__prev"
        },
        thumbs: {
            swiper: workSlider
        }
    });
var historySlider = document.querySelector(".history-slider");
if (historySlider) {
    var _workSlider = new Swiper(historySlider, {
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".history__next",
            prevEl: ".history__prev"
        }
    });
    _workSlider.on("slideChange", (function() {
        console.log(_workSlider.realIndex), historyBtns.forEach((function(e) {
            e.classList.remove("history-nav__btn--active")
        })), document.querySelector('.history-nav__btn[data-index="'.concat(_workSlider.realIndex, '"]')).classList.add("history-nav__btn--active")
    }));
    var historyBtns = document.querySelectorAll(".history-nav__btn");
    historyBtns.forEach((function(e, t) {
        e.setAttribute("data-index", t), e.addEventListener("click", (function(e) {
            var t = e.currentTarget.dataset.index;
            historyBtns.forEach((function(e) {
                e.classList.remove("history-nav__btn--active")
            })), e.currentTarget.classList.add("history-nav__btn--active"), _workSlider.slideTo(t)
        }))
    }))
}
var heroSliderSpeed = 1500,
    fooBar = (bodyStyles = window.getComputedStyle(document.body)).getPropertyValue("--hero-slider-speed");
document.body.style.setProperty("--hero-slider-speed", heroSliderSpeed + "ms");
var heroHeight, heroSlider = new Swiper(".hero-slider", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".hero__next",
            prevEl: ".hero__prev"
        },
        speed: heroSliderSpeed,
        autoplay: {
            delay: 1e3
        },
        pagination: {
            el: ".hero__pag",
            type: "bullets",
            clickable: !0
        },
        on: {
            init: function() {
                document.querySelectorAll(".hero__pag .swiper-pagination-bullet").forEach((function(e) {
                    e.innerHTML = '<span class="hero__bar"></span>'
                }))
            }
        }
    }),
    scroll = new SmoothScroll(".to-top"),
    toTop = document.querySelector(".to-top");
document.querySelector(".hero") && (heroHeight = document.querySelector(".hero").offsetHeight), document.querySelector(".page-hero") && (heroHeight = document.querySelector(".page-hero").offsetHeight);
var isVisibleToTop = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    e >= heroHeight ? toTop.classList.add("to-top--active") : toTop.classList.remove("to-top--active")
};
isVisibleToTop(window.scrollY), window.addEventListener("scroll", (function() {
    var e = window.scrollY;
    isVisibleToTop(e)
}));
var videoBlock = document.querySelector(".video-block");
if (videoBlock) {
    var video = videoBlock.querySelector("video"),
        playBtn = videoBlock.querySelector(".video-block__play");
    playBtn.addEventListener("click", (function() {
        videoBlock.classList.add("video-block--played"), video.play(), video.controls = !0, playBtn.classList.add("video-block__play--played")
    })), video.onpause = function() {
        videoBlock.classList.remove("video-block--played"), video.controls = !1, playBtn.classList.remove("video-block__play--played")
    }
}