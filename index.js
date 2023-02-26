warframes = [
    "ash",
    "atlas",
    "banshee",
    "baruuk",
    "caliban",
    "chroma",
    "citrine",
    "ember",
    "equinox",
    "excalibur",
    "frost",
    "gara",
    "garuda",
    "gauss",
    "grendel",
    "gyre",
    "harrow",
    "hildryn",
    "hydroid",
    "inaros",
    "ivara",
    "khora",
    "lavos",
    "limbo",
    "loki",
    "mag",
    "mesa",
    "mirage",
    "nekros",
    "nezha",
    "nidus",
    "nova",
    "nyx",
    "oberon",
    "octavia",
    "protea",
    "revenant",
    "rhino",
    "saryn",
    "sevagoth",
    "styanax",
    "titania",
    "trinity",
    "valkyr",
    "vauban",
    "volt",
    "wisp",
    "wukong",
    "xaku",
    "yareli",
    "zephyr"
]

randomFrame = () => {
    let idx = Math.floor(Math.random() * warframes.length);
    let p = document.getElementById("warframe");
    document.canvas.src = `./warframes/${warframes[idx]}.png`;
    p.textContent = capitalize(warframes[idx]);
}

capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}