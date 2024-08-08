const scroll = new LocomotiveScroll({
    el: document.querySelector('#outer-main'),
    smooth: true
});

var tl=gsap.timeline()
tl.to("#main",{
    y:"100vh",
    scale:0.6,
    duration:0
})

tl.to("#main",{
    y:"10vh",
    duration:1,
    delay:1
})
tl.to("#main",{
    y:"0",
    rotate:360,
    scale:1,
    duration:0.8
})