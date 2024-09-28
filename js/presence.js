document.addEventListener('DOMContentLoaded', async () => {
    
    //fetch('https://localhost:10397/profileApi/').then(response => response.json()).then(info => {
        
        let info = {
            "visits": "115",
            "status": "online",
            "presence": {
                "img": "https://cdn.discordapp.com/app-assets/383226320970055681/808841241142755358.webp",
                "text1": "Visual Studio Code",
                "text2": "Workspace: profile-main"
            }
        }

        console.log(info.visits);

        if (info.status && !info.status.includes('off')) {
            document.getElementById('presenceStatus').style.backgroundColor = await getColor(info.status);
            document.getElementById('presenceImg').src = info.presence.img;
            document.getElementById('activityText1').textContent = info.presence.text1;
            document.getElementById('activityText2').textContent = info.presence.text2;
        } else if (info.status && info.status.includes('off')) {
            document.getElementById('activitybox').style.visibility = 'hidden';
        } else {
            document.getElementById('activitybox').style.visibility = 'hidden';
            document.getElementById('presenceStatus').style.visibility = 'hidden';
        };
    //});

});

async function getColor(status) {

    if (status == 'online') return 'lime';

}

/*
fetch('/').then(response => response.json()).then(data => {

        console.log(data);

        //api visite

    });
*/