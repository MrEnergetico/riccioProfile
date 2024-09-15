document.addEventListener('DOMContentLoaded', async () => {

    document.getElementById('dsButton').addEventListener('click', async () => {
        document.getElementById('discordBox').classList.add('show');
        sfx('click');
        document.querySelectorAll('body > *:not(.discordBox)').forEach(node => {
            if (node.classList == 'snowflakes') return node.style.visibility = 'hidden';
            node.style.filter = 'blur(5px)';
        });
    });

    document.getElementById('exit').addEventListener('click', async () => {
        sfx('click');
        document.getElementById('discordBox').classList.remove('show');
        document.querySelectorAll('body > *:not(.discordBox)').forEach(node => {
            if (node.classList == 'snowflakes') return node.style.visibility = 'visible';
            node.style.filter = '';
        });
    });

    document.getElementById('addFriend').addEventListener('click', async () => {
        let a = document.createElement("textarea");
        a.value = 'il_riccio';
        document.body.appendChild(a);
        a.select();
        a.setSelectionRange(0, 99999);
        await navigator.clipboard.writeText(a.value);
        document.body.removeChild(a);
    });

});