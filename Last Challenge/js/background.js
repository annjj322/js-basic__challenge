const images = [
    "https://p4.wallpaperbetter.com/wallpaper/667/329/114/mercedes-benz-mercedes-benz-e-class-w212-car-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/320/157/305/mercedes-benz-mercedes-amg-car-mercedes-benz-e-class-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/931/875/651/car-mercedes-benz-mercedes-amg-mercedes-amg-gt-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/931/875/651/car-mercedes-benz-mercedes-amg-mercedes-amg-gt-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/272/122/325/dark-souls-iii-dark-souls-gothic-midevil-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/504/627/694/abstracto-bosque-dark-noche-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/457/150/565/abstracto-oscuro-rayas-textura-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/31/185/213/abstracto-ladrillos-oscura-pared-wallpaper-preview.jpg",
];



const chosenImage = images[Math.floor(Math.random() *images.length)];



function backgroundImage() {
    document.body.style.background = `url(${chosenImage})`;
    document.body.style.backgroundPosition = `center`;
    document.body.style.backgroundSize = `cover`;
}

backgroundImage()