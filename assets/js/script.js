    
    let play = document.getElementById("play")
    function myaudio() {
        let audio = new Audio("./assets/audio/perfect-beauty-191271.mp3");
        audio.play();
        document.getElementById("sub_content").innerHTML = 
            '<div class="container">'+
                '<div class="row justify-content-center align-items-center gy-5 mb-5 mt-2 mt-md-0">'+
                    '<div class="col-12 col-md-6">' +
                        '<div class="content-image">'+'<img class="image" src="./assets/image/s3.png" alt="">'+'</div>'+
                    '</div>'+
                    '<div class="col-12 col-md-6">' +
                        '<div id="video-background">' +
                            '<video autoplay loop muted>' +
                                '<source src="/assets/video/production_id_4112431 (1080p).mp4" type="video/mp4">' + 
                                '<source src="/assets/video/production_id_4112431 (720p).mp4" type="video/mp4">' +
                                '<source src="/assets/video/production_id_4112431 (540p).mp4" type="video/mp4">' +   
                                'Your browser does not support the video tag.' +
                            '</video>' +
                        '</div>' +
                        '<div >'+
                            '<div class="content main-contents-1">' +
                                '<h1>“The day is all yours — have fun!”</h1>' +
                                '<p>"Happy Birthday to the one who brings laughter to every moment, light to every day, and joy to every gathering! May this year be filled with endless adventures, unforgettable memories, and all the happiness your heart can hold. Here\'s to celebrating you today and always, my dear friend!" 🎉🎂🎈</p>' +
                            '</div>' +
                            '<div id="removeClassButton" class="mt-4 d-flex justify-content-center">'+
                                '<button class="image-button fw-bolder" id="image_forward" onclick="imageforward()">'+
                                    'More'+
                                    '<div class="button__horizontal"></div>'+
                                    '<div class="button__vertical"></div>'+
                                '</button>'+
                            '<div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>';
    }
    play.addEventListener("click", myaudio);

    let elements = document.getElementById("content_change");
    
    function imageforward() {
            console.log(elements);
            let romvedesplay = document.getElementById("removeClassButton");
            // romvedesplay.classList.add("d-none");
            
            if (elements.classList.contains("d-none")) {
                // If the element has class "d-none", remove it
                romvedesplay.classList.add("d-none");
                elements.classList.remove("d-none");
                console.log("Class removed, content visible.");
            } else {
                // If the element does not have class "d-none", add it
                romvedesplay.classList.remove("d-none");
                elements.classList.add("d-none");
                console.log("Class added, content hidden.");
            };
    }