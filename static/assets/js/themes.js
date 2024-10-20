<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>忍者のテーマ - パーティクル背景</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            height: 100vh;
            width: 100vw;
            position: relative;
        }
        #particles-js {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1; /* パーティクルが背景として表示されるようにする */
        }
        .background {
            background-image: url('https://tse2.mm.bing.net/th/id/OIG4.1PyEdpKfqtfUM9Vhmsfx?pid=ImgGn');
            background-size: cover;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0; /* 背景画像のレイヤー */
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></script>
</head>
<body>
    <div class="background"></div>
    <div id="particles-js"></div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var selectedTheme = localStorage.getItem('selectedOption');

            // 忍者のテーマの設定
            if (selectedTheme === 'ninja') {
                particlesJS("particles-js", {
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffcc00" // 忍者に合った色
                        },
                        "shape": {
                            "type": "circle",
                        },
                        "opacity": {
                            "value": 0.3, // 背景が見えるように透明度を調整
                            "random": true
                        },
                        "size": {
                            "value": 5,
                            "random": true
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffcc00",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": true,
                            "out_mode": "out",
                            "bounce": false
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
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
            }

            // デフォルトがない場合
            if (selectedTheme === null) {
                particlesJS("particles-js", {
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#476498"
                        },
                        "shape": {
                            "type": "circle",
                        },
                        "opacity": {
                            "value": 0.5, // 背景が見えるように透明度を調整
                            "random": true
                        },
                        "size": {
                            "value": 3,
                            "random": true
                        },
                        "line_linked": {
                            "enable": false,
                        },
                        "move": {
                            "enable": true,
                            "speed": 1.6,
                            "direction": "top",
                            "random": false,
                            "out_mode": "out",
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "repulse"
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
                                "distance": 250,
                                "size": 0,
                                "duration": 2,
                                "opacity": 0,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 400,
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
            }
        });
    </script>
</body>
</html>
