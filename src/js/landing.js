$(document).ready(function() {
//example:	fullpage({'verticalCentered':true,'navigation':true,'navigationPosition':'right','navigationTooltips':['Main page','Vacancies','Office','Teams','Activity','Contacts'],'anchors':['Main','Vacancies','Office','Teams','Activity','Contacts'],menu:'#menu',scrollingSpeed:700,css3:true,loopBottom:false,afterRender:function(){var myAnchor=$('.attention');myAnchor.attr('style','');myAnchor.addClass('visible');$('body.hidden').removeClass('hidden')},afterLoad:function(anchorLink,index){var myAnchor=$('.attention');myAnchor.attr('style','').removeClass('visible');if(index==1){myAnchor.addClass('visible')}else{myAnchor.removeClass('visible')}
	$('#fullpage').fullpage({
     //Navigation
        menu: "#menu",
        lockAnchors: false,
        anchors:['Main', 'HowToUse','WhereUseCC','OrderCard','News'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Main page', 'How to use Comfort.Cards', 'Where use Comfort.Cards','Order Comfort.Card','News'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
})
