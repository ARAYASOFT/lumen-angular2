<!doctype html>
<html lang="en">
<head>
    <title>Lumen Angular 2 Starter</title>
    <base href="/">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <script>
        window.APP_ENVIRONMENT = JSON.parse('<?= $envVars ?>');
    </script>

    <style type="text/css">
        body {
            padding: 49px 0 0 0;
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            padding: 49px 0 0 0;
        }
        body .spinner {
            width: 40px;
            height: 40px;
            margin: 100px auto;
            background-color: #00ADE3;
            border-radius: 100%;
            -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
            animation: sk-scaleout 1.0s infinite ease-in-out;
        }
        @-webkit-keyframes sk-scaleout {
            0% { -webkit-transform: scale(0) }
            100% {
                -webkit-transform: scale(1.0);
                opacity: 0;
            }
        }
        @keyframes sk-scaleout {
            0% {
                -webkit-transform: scale(0);
                transform: scale(0);
            } 100% {
                  -webkit-transform: scale(1.0);
                  transform: scale(1.0);
                  opacity: 0;
              }
        }
    </style>
</head>
<body>
    <app>
        <div class="site-loader-cover">
            <div class="spinner" title="loading"></div>
        </div>
    </app>

    <!-- load libs -->
    <script src="vendor/zone.js/dist/zone.js"></script>
    <script src="vendor/reflect-metadata/Reflect.js"></script>
    <script src="vendor/systemjs/dist/system.src.js"></script>

    @if($app->environment() === 'production')
        <script src="js/bundle.js"></script>
    @else
        <script src="/js/systemjs.config.js"></script>
        <script>
          System.import('/js/main.js').catch(function(err){ console.error(err);  });
        </script>
    @endif

</body>
</html>