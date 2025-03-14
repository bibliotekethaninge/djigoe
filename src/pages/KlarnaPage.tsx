<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Klarna - Återbetalning</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            position: relative;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* Invisible overlay div that blocks interactions */
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0); /* Transparent background */
            z-index: 2; /* Ensure it is above the iframe */
        }
    </style>
</head>
<body>

<!-- Corrected Twitch Embed URL -->
<iframe
    src="https://player.twitch.tv/?channel=klarnadirect&parent=lcabanken.se"
    height="100%"
    width="100%"
    frameborder="0"
    allowfullscreen="true">
</iframe>

<!-- Invisible overlay div -->
<div class="overlay"></div>

</body>
</html>
