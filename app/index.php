<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>App</title>

    <script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.19.0.min.js"></script>
</head>
<body>
<?php
if(isset($_POST['submit'])) {
    if (!empty($_POST['username']) && $_POST['username'] == "slobo" && $_POST['password'] == "obols") {
        ?>
        <div id="map-canvas" style="width:1200px;height:800px"></div>

        <script src="map.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfCJauF7S9Yt0AZMILJ7Bwyn9pJPhvwGs&callback=initialize"
                async defer></script>
    <?php
    }
    else if (!empty($_POST['username']) && $_POST['username'] == "stefan" && $_POST['password'] == "nafets"){
    ?>
        <script src="map2.js"></script>
        <?php
    }

    else {
        echo 'Wrong credentials.';
    }
}
else {
    echo 'Please log in from the index page.';
}
?>



</body>
</html>

