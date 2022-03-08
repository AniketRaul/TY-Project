self.addEventListener("install",function(e){
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./Start Page/start page.html", "./Start Page/img/1.jpg",
            "./Difficulty Page/text.html", "./Difficulty Page/img/3.jpg",
            "./Bootstrap/bootstrap.min.css","./Bootstrap/bootstrap.bundle.min.js",
            "./Easy/index.html", "./Easy/css/style.css","./Easy/js/index.js","./Easy/img/3.jpg",
            "./Medium/medium.html", "./Medium/CSS/medium.css","./Medium/JS/medium.js","./Medium/IMG/level2.jpg",
            "./Hard/hard.html", "./Hard/CSS/Hard.css","./Hard/JS/Hard.js","./Hard/IMG/level3.jpg"
        ]);
        })
    );
});

self.addEventListener("activate", e => {
    console.log("Activated");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
