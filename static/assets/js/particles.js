<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Particles with Shurikens</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            height: 100vh;
        }
        #particles-js {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
        }
    </style>
</head>
<body>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var particlesDiv = document.createElement('div');
            particlesDiv.id = 'particles-js';
            document.body.insertBefore(particlesDiv, document.body.firstChild);

            // Set the background image
            document.body.style.backgroundImage = "url('https://tse2.mm.bing.net/th?id=OIG4.1PyEdpKfqtfUM9Vhmsfx&pid=ImgGn')";
            document.body.style.backgroundSize = 'cover';

            var selectedTheme = localStorage.getItem('selectedOption');
            var particles = localStorage.getItem('particles');

            var canvas = document.getElementById('particles-js');
            var ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            var shurikens = [];

            function Shuriken(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 20 + 15; // Random size
                this.angle = Math.random() * Math.PI * 2; // Random angle
                this.speed = Math.random() * 2 + 1; // Random speed
                this.shape = this.generateShape();

                this.update = function() {
                    this.x += Math.cos(this.angle) * this.speed;
                    this.y += Math.sin(this.angle) * this.speed;

                    // If shuriken goes out of bounds, reset its position
                    if (this.x > canvas.width) this.x = 0;
                    else if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    else if (this.y < 0) this.y = canvas.height;
                }

                this.draw = function() {
                    ctx.save();
                    ctx.translate(this.x, this.y);
                    ctx.rotate(this.angle);
                    ctx.fillStyle = 'grey'; // Shuriken fill color
                    ctx.beginPath();
                    ctx.moveTo(-this.size, -this.size / 2);
                    ctx.lineTo(0, -this.size);
                    ctx.lineTo(this.size, -this.size / 2);
                    ctx.lineTo(this.size / 2, 0);
                    ctx.lineTo(this.size, this.size / 2);
                    ctx.lineTo(0, this.size);
                    ctx.lineTo(-this.size, this.size / 2);
                    ctx.lineTo(-this.size / 2, 0);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            }

            // Generate random shurikens
            function createShurikens(num) {
                for (let i = 0; i < num; i++) {
                    let x = Math.random() * canvas.width;
                    let y = Math.random() * canvas.height;
                    shurikens.push(new Shuriken(x, y));
                }
            }

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                shurikens.forEach(shuriken => {
                    shuriken.update();
                    shuriken.draw();
                });
                requestAnimationFrame(animate);
            }

            // Create shurikens on initialization
            createShurikens(100); // Number of shurikens
            animate();

            // Check if particles are enabled
            if (particles === 'disabled' || particles === null || particles === '') {
                console.log('Particles are disabled.');
            } else {
                // Fallback if no theme is selected
                if (selectedTheme === null) {
                    console.log('No theme selected, using default.');
                }
            }
        });
    </script>
</body>
</html>
