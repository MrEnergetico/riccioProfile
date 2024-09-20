document.addEventListener('DOMContentLoaded', async () => {
    
    let info = {
        status: 'on | lime',
        
        activityImage: 'https://cdn.discordapp.com/attachments/1135172213507629087/1282270121817145416/Nuovo_progetto_28.png?ex=66ee909c&is=66ed3f1c&hm=d7c937cef1e0f24d15b4618fbdb1ec0f7296a2c373b69370a81c2d01334b7d0d&',
        text1: 'Sta Giocando a WildMC',
        text2: 'Best server EU!',
    };

    if (info.status && !info.status.includes('off')) {
        document.getElementById('presenceStatus').style.backgroundColor = info.status.split(' | ')[1];
        document.getElementById('presenceImg').src = info.activityImage;
        document.getElementById('activityText1').textContent = info.text1;
        document.getElementById('activityText2').textContent = info.text2;
    } else if (info.status && info.status.includes('off')) {
        document.getElementById('activitybox').style.visibility = 'hidden';
    } else {
        document.getElementById('activitybox').style.visibility = 'hidden';
        document.getElementById('presenceStatus').style.visibility = 'hidden';
    };

});

/*
fetch('/').then(response => response.json()).then(data => {

        console.log(data);

        //api visite

    });
*/