<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Zapisz_sie_na_sport</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
  <script>function formattime(dt) {
    var rok = dt.getFullYear();
    var miesiac = dt.getMonth() + 1;
    var dzien = dt.getDate();
    var dzientygodnia = dt.getDay();
    text = dzien + "." + miesiac + "." + rok;
    return text;}

    var dt = new Date();
    document.write(formattime(dt));
  </script>
</body>
</html>
