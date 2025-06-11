-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 11 jun 2025 om 14:25
-- Serverversie: 10.4.32-MariaDB
-- PHP-versie: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Mijn vaardigheden'),
(2, 'Nog aan het leren'),
(3, 'Op de to-do lijst');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(255) NOT NULL,
  `site_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `projects`
--

INSERT INTO `projects` (`id`, `title`, `img_url`, `date`, `description`, `site_url`) VALUES
(1, 'Focus6 [school]', 'focus6.png', '2024-11-01', 'Focus6 is een bedrijf dat andere bedrijven en organisaties helpt succesvoller te maken. Als onderdeel van een school opdracht heb ik geholpen om een website voor hun te maken.', 'https://u230067.gluwebsite.nl/focus6/'),
(2, 'Flappy bird clone [school]', 'flap.png', '2024-11-05', 'Kleinschalige flappy bird clone gedeeltelijk gegenereerd met AI voor een school opdracht, maar verder uitgewerkt door mij en mijn teamgenoten.', ''),
(3, 'Annexbios [school]', 'annexbios.png', '2024-09-25', 'School project waarbij wij een website voor een bioscoop moesten maken inclusief data ophalen via een api van het \"hoofdkantoor\". Zelf ben ik daar vooral mee bezig geweest en met een stoelreserveringssysteem.', 'https://github.com/LGuijt/annexbios-cds2-leerdam'),
(4, 'Dutchsillygames.com [school]', 'dsg.png', '2025-01-10', 'Een spelletjes website in aanbouw. De spelletjes op de website waren voor een schoolopdracht (alleen tetris is van mij), maar de site was een samenwerking tussen Riley de Man en ik. In de toekomst willen wij nog veel meer features toevoegen.', 'https://dutchsillygames.com');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `categorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `skills`
--

INSERT INTO `skills` (`id`, `name`, `img`, `type`, `categorie`) VALUES
(1, 'html', 'html.png', 1, 1),
(2, 'css', 'css.png', 1, 1),
(3, 'javascript', 'javascript.png', 1, 1),
(4, 'php', 'php.png', 1, 1),
(6, 'MySQL', 'mysql.png', 2, 1),
(7, 'react.js', 'reactjs.png', 1, 2),
(8, 'next.js', 'nextjs.png', 1, 2),
(9, 'dosato', 'dosato.png', 1, 2),
(10, 'python', 'python.png', 1, 2),
(12, 'Engels', 'en.png', 4, 1),
(13, 'Frans', 'fr.png', 4, 2),
(14, 'Duits', 'de.png', 4, 2),
(15, 'Japans', 'jp.png', 4, 2),
(16, 'Github', 'github.png', 2, 1),
(17, 'Wordpress', 'wp.png', 2, 2),
(18, 'SCSS/SASS', 'scss.png', 1, 1),
(19, 'laravel', 'laravel.png', 1, 3),
(20, 'vue.js', 'vue.png', 1, 3),
(21, 'tailwind', 'tailwind.png', 1, 3),
(22, 'Samenwerking', 'Samenwerking.png', 3, 1),
(23, 'klantvriendelijk', 'klantvriendelijk.png', 3, 1),
(24, 'Analytisch', 'analytisch.png', 3, 1),
(25, 'leiderschap', 'leiding.png', 3, 2),
(26, 'creatief', 'creatief.png', 3, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'Coding languages'),
(2, 'Coding tools'),
(3, 'Soft skills'),
(4, 'Languages'),
(5, 'Hobbies');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categorie` (`categorie`),
  ADD KEY `type` (`type`);

--
-- Indexen voor tabel `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT voor een tabel `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT voor een tabel `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`categorie`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `skills_ibfk_2` FOREIGN KEY (`type`) REFERENCES `types` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
