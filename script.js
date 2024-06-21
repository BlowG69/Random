const noButton = document.getElementById('noButton');

function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const newLeft = Math.random() * (containerRect.width - buttonRect.width);
    const newTop = Math.random() * (containerRect.height - buttonRect.height);

    noButton.style.left = newLeft + 'px';
    noButton.style.top = newTop + 'px';
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

document.getElementById('yesButton').addEventListener('click', function() {
    const newTab = window.open("", "_blank");
    newTab.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Surprise</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #ffe6e6;
                    font-family: Arial, sans-serif;
                }
                .message {
                    font-size: 30px;
                    color: #ff4d4d;
                }
                .heart {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: #ff4d4d;
                    transform: rotate(45deg);
                    animation: float 5s infinite;
                }
                .heart::before,
                .heart::after {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: #ff4d4d;
                    border-radius: 50%;
                }
                .heart::before {
                    top: -10px;
                    left: 0;
                }
                .heart::after {
                    top: 0;
                    left: -10px;
                }
                @keyframes float {
                    to {
                        transform: translateY(-100vh) rotate(45deg);
                    }
                }
            </style>
        </head>
        <body>
            <div class="message">Sabi mo yan ha!</div>
            <div id="heartContainer"></div>
            <script>
                const heartContainer = document.getElementById('heartContainer');
                
                for (let i = 0; i < 50; i++) {
                    let heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.style.left = Math.random() * 100 + 'vw';
                    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
                    heartContainer.appendChild(heart);
                }
            </script>
        </body>
        </html>
    `);
});
