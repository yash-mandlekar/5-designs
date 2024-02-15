gsap.from('.i1',{
    opacity:0,
    ease: Expo.easeInOut,
    duration:1,
    stagger:0.3
})
gsap.from('.bottom',{
    x: 10,
    opacity:0,
    width:0,
    duration:4,
    stagger:0.3,
    ease : "elastic.inOut(1,0.3)"
})
