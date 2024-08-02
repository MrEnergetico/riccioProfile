window.onload = start()

async function start() {
    await fetch('https://discordlookup.mesalytic.moe/v1/user/949809500548911176').then(res => res.json()).then((res) => {

        console.log(res.badges);
        let slot = 1; 

        if (res.badges.length == 1) {
            res.badges.forEach(b => { 
                if (slot == 1) {
                    document.getElementById('b1_1').src = 'media/utils/alt.png';
                    slot = 2;
                } if (slot == 2) {
                    document.getElementById('b2_1').src = `badges/${res.badges[0]}.png`;
                    slot = 3;
                } if (slot == 3) {
                    document.getElementById('b3_1').src = 'media/utils/dslogo.png';
                    slot = 4;
                } if (slot == 4) {
                    document.getElementById('b4_1').src = 'media/utils/alt.png';
                };
            });
        } else if (res.badges.length == 2) {
            res.badges.forEach(b => { 
                if (slot == 1) {
                    document.getElementById('b1_1').src = 'media/utils/alt.png';
                    slot = 2;
                } if (slot == 2) {
                    document.getElementById('b2_1').src = `badges/${res.badges[0]}.png`;
                    slot = 3;
                } if (slot == 3) {
                    document.getElementById('b3_1').src = `badges/${res.badges[1]}.png`;
                    slot = 4;
                } if (slot == 4) {
                    document.getElementById('b4_1').src = 'media/utils/alt.png';
                };
            });
        } else if (res.badges.length == 3) {
            res.badges.forEach(b => { 
                if (slot == 1) {
                    document.getElementById('b1_1').src = `badges/${res.badges[0]}.png`;
                    slot = 2;
                } if (slot == 2) {
                    document.getElementById('b2_1').src = `badges/${res.badges[1]}.png`;
                    slot = 3;
                } if (slot == 3) {
                    document.getElementById('b3_1').src = `badges/${res.badges[2]}.png`;
                    slot = 4;
                } if (slot == 4) {
                    document.getElementById('b4_1').src = 'media/utils/dslogo.png';
                };
            });
        } else if (res.badges.length >= 4) {
            res.badges.forEach(b => { 
                if (slot == 1) {
                    document.getElementById('b1_1').src = `badges/${res.badges[0]}.png`;
                    slot = 2;
                } if (slot == 2) {
                    document.getElementById('b2_1').src = `badges/${res.badges[1]}.png`;
                    slot = 3;
                } if (slot == 3) {
                    document.getElementById('b3_1').src = `badges/${res.badges[2]}.png`;
                    slot = 4;
                } if (slot == 4) {
                    document.getElementById('b4_1').src = `badges/${res.badges[3]}.png`;
                };
            });
        };
        
        document.getElementById('immagine').src = res.avatar.link;
        document.getElementById('nome').textContent = res.raw.global_name;
        if (res.avatar_decoration.asset == null || res.avatar_decoration == null) return;
        document.getElementById('avatar-decoration').src = `https://cdn.discordapp.com/avatar-decoration-presets/${res.avatar_decoration.asset}.png?size=80&passthrough=true`;
    });
};