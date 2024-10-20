document.addEventListener('DOMContentLoaded', function() {
    var particlesDiv = document.createElement('div');
    particlesDiv.id = 'particles-js';
    document.body.insertBefore(particlesDiv, document.body.firstChild);

    var selectedTheme = localStorage.getItem('selectedOption');
    
    // デフォルトの忍者テーマの設定
    if (selectedTheme === null) {
        selectedTheme = 'ninja'; // デフォルトテーマを忍者に設定
    }

    // 各テーマによるパーティクルの設定
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100, // パーティクルの数
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffcc00" // 忍者の雰囲気に合わせた色
            },
            "shape": {
                "type": "image", // アイコン画像を使用
                "image": {
                    "src": "https://tse2.mm.bing.net/th?id=OIG4.1PyEdpKfqtfUM9Vhmsfx&pid=ImgGn", // 忍者のアイコン画像URL
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 15,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 20,
                    "size_min": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});
