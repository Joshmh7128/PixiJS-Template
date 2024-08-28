const log = console.log;

// the application
(async() => {

    // make sure we initialize our application
    const application = new PIXI.Application();

    // in here we can change our initialization properties
    await application.init({ 
        // we can set the resolution of our game here
        width: 1024,
        height: 768,
        /// we can also say
        // resizeTo: window,
        /// or, to resize it to the current window size
        // width: window.innerWidth,
        // height: window.innerHeight,

        // if we want to change the opacity of the background
        backgroundAlpha: 1,
        // we can also change the background color of the game
        backgroundColor: 0xA3A3A3
    });

    // we need to set the position of the canvas to absolute, so that we don't have to resize our page
    application.canvas.style.position = 'absolute';
    // the we add the canvas to the body of our page
    document.body.appendChild(application.canvas);

})();