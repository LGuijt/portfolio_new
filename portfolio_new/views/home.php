<?php
include_once './core/header.php';
?>
<div class="main-container">
    <div id="top">
        <div id="over-mij" class="kopje intros">
            <h4>Over Mij</h4>
            <?php
            $birthday = new DateTime('2004-03-10');
            $today = new DateTime('now');
            $age = $today->diff($birthday)->y;
            ?>
            <div id="over-mij-tekst">
                <p>Hoi! Ik ben een <?= $age ?>-jarige student webdevelopment met een passie voor alles wat te maken
                    heeft met technologie. In mijn vrije tijd teken ik graag en ben ik daarnaast altijd bezig met nieuwe creatieve
                    bezigheden.</p>
                <p>Ik hou ervan om nieuwe dingen te leren en mezelf uit te dagen en ik streef naar creativiteit en functionaliteit in alles wat ik maak, en ik geloof dat zelfs de
                    kleinste details een groot verschil kunnen maken.</p>
                <img src="assets/img/ik.jpg" alt="Lisa Guijt" class="img-lisa">
                <div class="scroll-container">
                    <img src="assets/img/art/spin.png" alt="spin tekening">
                    <img src="assets/img/art/kat.png" alt="tekening kat">
                    <img src="assets/img/art/knife.png" alt="tekening mes">
                    <img src="assets/img/art/loki.png" alt="tekening kat Loki">
                    <img src="assets/img/art/aap.png" alt="tekening maki's">
                    <img src="assets/img/art/aap2.png" alt="tekening vari's">
                    <img src="assets/img/art/fairy.png" alt="tekening fairy">
                    <img src="assets/img/art/hond.png" alt="tekening hond">
                    <img src="assets/img/art/kat2.png" alt="tekening kat">
                    <img src="assets/img/art/kat3.png" alt="tekening kat">
                    <img src="assets/img/art/kat4.png" alt="tekening kat">
                    <img src="assets/img/art/kat5.png" alt="tekening kat">
                    <img src="assets/img/art/kat6.png" alt="tekening kat">
                    <img src="assets/img/art/kat7.png" alt="tekening kat">
                    <img src="assets/img/art/skeleton.png" alt="tekening skelet">
                    <img src="assets/img/art/vogels.png" alt="tekening vogels">
                    <img src="assets/img/art/zombie.png" alt="tekening zombie">
                </div>
            </div>
        </div>
        <div id="projecten" class="kopje intros">
            <h4>Projecten</h4>
            <div id="projecten-tekst">
                <p>Hieronder vind je een aantal van mijn projecten. Ik heb ze gemaakt met verschillende technieken en
                    tools, en ik ben trots op elk van hen.</p>
                <div id="projecten-container">
                    <?php
                    $statement = "SELECT * FROM projects";
                    $sql = $con->prepare($statement);
                    $sql->bind_result($id, $title, $img, $date, $description, $link);
                    $sql->execute();
                    $sql->store_result();
                    $sql->bind_result($id, $title, $img, $date, $description, $link);
                    while ($sql->fetch()) {
                        ?>
                        <div class="project-item slide fade">
                            <a class="project-class" href="<?= $link ?>" target="_blank">
                                <img src="./assets/img/projects/<?= $img ?>" alt="<?= $title ?>">
                                <h5><?= $title ?></h5>
                                <p><?= $date ?></p>
                                <p><?= $description ?></p>
                            </a>
                        </div>
                        <?php
                    }
                    $sql->close();
                    ?>
                </div>
            </div>
        </div>
    </div>
    <div id="intro" class="intro-text">
        <?php
        $time = date("H");
        if ($time < "6") {
            $extra = "nacht";
        } elseif ($time < "12") {
            $extra = "morgen";
        } elseif ($time < "18") {
            $extra = "middag";
        } else {
            $extra = "avond";
        }
        ?>
        <script>
            let tijd = "<?= $extra ?>";
        </script>
        <h1><span id="text1"></span><span id="typing1">|</span></h1>
        <h2><span id="text2"></span><span id="typing2"> </span></h2>
        <h3><span id="text3"></span><span id="typing3"> </span></h3>
    </div>
    <div id="bottom">
        <div id="skills" class="kopje intros">
            <h4>Skills</h4>
            <div id="skills-tekst">
                <div class="tabs">
                    <div class="tab" id="tab1" onclick="openTab(event, 'skills-list')">Mijn Skills</div>
                    <div class="tab" id="tab2" onclick="openTab(event, 'learning')">In ontwikkeling</div>
                    <div class="tab" id="tab3" onclick="openTab(event, 'to-do')">Mijn To-Do Lijst</div>
                </div>
                <?php
                $skillsArray = array();
                $skillsstmt = "SELECT * FROM skills";
                $skillsql = $con->prepare($skillsstmt);
                $skillsql->bind_result($id, $name, $img, $type, $category);
                $skillsql->execute();
                while ($skillsql->fetch()) {
                    $skillsArray[] = array(
                        'id' => $id,
                        'name' => $name,
                        'img' => $img,
                        'type' => $type,
                        'category' => $category
                    );
                }
                $skillsql->close();
                ?>
                <div id="skills-content">
                    <div id="skills-list" class="tabcontent">
                        <div class="skills-list-container skill-grid">
                            <?php
                            for ($i = 0; $i < 5; $i++) {
                                foreach ($skillsArray as $skill) {
                                    if ($skill['category'] == 1 && $skill['type'] == $i) {
                                        ?>
                                        <div class="skill-item">
                                            <img src="./assets/img/skills/<?= $skill['img'] ?>" alt="<?= $skill['name'] ?>">
                                            <p><?= $skill['name'] ?></p>
                                        </div>
                                        <?php
                                    }
                                }
                            }
                            ?>
                        </div>
                    </div>
                    <div id="learning" class="tabcontent">
                        <div class="skills-list-container skill-grid">
                            <?php
                            for ($i = 0; $i < 5; $i++) {
                                foreach ($skillsArray as $skill) {
                                    if ($skill['category'] == 2 && $skill['type'] == $i) {
                                        ?>
                                        <div class="skill-item">
                                            <img src="./assets/img/skills/<?= $skill['img'] ?>" alt="<?= $skill['name'] ?>">
                                            <p><?= $skill['name'] ?></p>
                                        </div>
                                        <?php
                                    }
                                }
                            }
                            ?>
                        </div>
                    </div>
                    <div id="to-do" class="tabcontent">
                        <div class="skills-list-container skill-grid">
                            <?php
                            for ($i = 0; $i < 5; $i++) {
                                foreach ($skillsArray as $skill) {
                                    if ($skill['category'] == 3 && $skill['type'] == $i) {
                                        ?>
                                        <div class="skill-item">
                                            <img src="./assets/img/skills/<?= $skill['img'] ?>" alt="<?= $skill['name'] ?>">
                                            <p><?= $skill['name'] ?></p>
                                        </div>
                                        <?php
                                    }
                                }
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="contact" class="kopje intros">
            <h4>Contact</h4>
            <div id="contact-tekst">
            <p>Ik ben te bereiken via: <a href="mailto:mail.lisageurts@gmail.com">email (mail.lisageurts@gmail.com)</a></p>
            <p>of via mijn nog niet bestaande linkedin account. (voor de styling)</p>
            <p>Wil je meer zien over mijn creatieve bezigheden? Neem dan een kijkje op mijn <a href="https://www.instagram.com/liesguijt/">instagram</a></p>
            </div>
        </div>
    </div>
</div>
<?php
include_once './core/footer.php';
?>