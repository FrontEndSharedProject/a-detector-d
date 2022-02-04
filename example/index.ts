import ADDetector from '../src/index'

;(async () =>{
    const isAdBlockerOn = await ADDetector();

    document.body.classList.add(isAdBlockerOn ? 'on' : 'off')
})()