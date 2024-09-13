document.addEventListener('DOMContentLoaded', () => {

    let n = 0;

    const titles = [
        "I",
        "IL",
        "IL_",
        "IL_R",
        "IL_RI",
        "IL_RIC",
        "IL_RICC",
        "IL_RICCI",
        "IL_RICCIO",
        "IL_RICCIO",
        " L_RICCIO",
        "  _RICCIO",
        "   RICCIO",
        "    ICCIO",
        "     CCIO",
        "      CIO",
        "       IO",
        "        O",
        "‎",
        "‎",
        "IL_RICCIO",
        "‎",
        "‎",
        "IL_RICCIO",
        "‎",
        "‎",
    ];

    setInterval(() => { 
        document.title = titles[n];
        n++;
        if (n >= titles.length) n = 0;
    }, 300);
});