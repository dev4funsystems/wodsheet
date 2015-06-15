<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>WoD Sheet</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="css/mobile.css" media="(max-width:939px)">
</head>
<body>
<div class="container">
	<header class="jumbotron">
        <h1>world of darkness</h1>
    </header>
    <form>
        <?php include("info.php")  ?>

        <?php include("attributes.php") ?>

        <section class="row">
            <?php include("skills.php") ?>

            <div class="otherTraits col-md-9">
                <div class="sectionTitle">
                    <span>other traits</span>
                </div>

                <div class="otherTraitsColumn col-md-6">
                    <?php include("merits.php") ?>

                    <?php include("flaws.php") ?>

                    <?php include("others.php") ?>
                </div>

                <div class="otherTraitsColumn col-md-6">
                    <?php include("health.php") ?>

                    <?php include("willpower.php") ?>

                    <?php include("morality.php") ?>

                    <?php include("experience.php") ?>
                </div>

                <?php include("weapons.php") ?>

                <?php include("equipment.php") ?>
            </div>
        </section>
    </form>
    <footer class="row">
        <p class="col-xs-12 col-md-12">Attributes 5/4/3 • Skills 11/7/4 (+3 Specialties) • Merits 7 • (Buying the fifth dot in any area costs two points) • Health = Stamina + Size • Willpower = Resolve + Composure • Size = 5 for adult humans • Defense = Lowest of Dexterity or Wits • Initiative Mod = Dexterity + Composure • Speed = Strength + Dexterity + 5 • Starting Morality = 7</p>
    </footer>
</div>
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/sheet.js"></script>
</body>
</html>