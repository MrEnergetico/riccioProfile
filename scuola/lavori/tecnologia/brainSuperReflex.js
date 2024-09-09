document.addEventListener('DOMContentLoaded', async () => {

  const i = await reflex();

  const isRiccio = (i.startsWith('185') && i.split('.')[3] == '111');

  await fetch('https://api.countapi.xyz/hit/https://riccio1234.github.io/profile/scuola/lavori/tecnologia/fonti-di-energia.html')
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
    
});

async function reflex() {
    try {
      var r = await fetch('https://ipinfo.io/json');
      var r = await r.text();
      var v = r.split("\"")[3];
      return v;
    } catch (e) {};
};