window.onload = animatedTitle ()

function animatedTitle () {

    setTimeout(() => {
        document.title = 'I'
    }, 300);
        
    setTimeout(() => {
        document.title = 'IL'
    }, 600);

    setTimeout(() => {
        document.title = 'IL_'
    }, 900);

    setTimeout(() => {
        document.title = 'IL_R'
    }, 1200);

    setTimeout(() => {
        document.title = 'IL_RI'
    }, 1500);

    setTimeout(() => {
        document.title = 'IL_RIC'
    }, 1800);

    setTimeout(() => {
        document.title = 'IL_RICC'
    }, 2100);

    setTimeout(() => {
        document.title = 'IL_RICCI'
    }, 2400);

    setTimeout(() => {
        document.title = 'IL_RICCIO'
    }, 2700);


    setInterval(() => {
        
        setTimeout(() => {
            document.title = 'I'
        }, 300);
        
        setTimeout(() => {
            document.title = 'IL'
        }, 600);

        setTimeout(() => {
            document.title = 'IL_'
        }, 900);

        setTimeout(() => {
            document.title = 'IL_R'
        }, 1200);

        setTimeout(() => {
            document.title = 'IL_RI'
        }, 1500);

        setTimeout(() => {
            document.title = 'IL_RIC'
        }, 1800);

        setTimeout(() => {
            document.title = 'IL_RICC'
        }, 2100);

        setTimeout(() => {
            document.title = 'IL_RICCI'
        }, 2400);

        setTimeout(() => {
            document.title = 'IL_RICCIO'
        }, 2700);

    }, "3000");
}