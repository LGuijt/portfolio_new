<?php 
include "./core/header.php";

$statement = "SELECT * FROM projects";
$sql = $con->prepare($statement);
$sql->bind_result($id, $title, $img, $date, $description, $link);
?>

<div class="main-container">
    <h1>Mijn projecten</h1>
    <div class="container projects">
        <?php
        if ($sql->execute()) {
            while ($sql->fetch()) {
                ?>
                <article class="project">
                    <img src="./assets/img/projects/<?= $img ?>" alt="<?= $title ?>">
                    <h2><?= $title ?></h2>
                    <p><?= $description ?></p>
                    <a href="<?= $link ?>">Bekijk project</a>
                <?php
            }
        }
        ?>
    </div>
</div>

<?php
include "./core/footer.php";
?>