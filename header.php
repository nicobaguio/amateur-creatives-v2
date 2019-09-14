<?php 
$logo = wp_get_attachment_image_src( $custom_logo_id, 'full');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.1/css/all.css" integrity="sha384-wxqG4glGB3nlqX0bi23nmgwCSjWIW13BdLUEYC4VIMehfbcro/ATkyDsF/AbIOVe" crossorigin="anonymous">
    <title>Amateur Creatives</title>
    <?php wp_head(); ?>
</head>
<body id="body-container">
    <header id="header-container">
        <div id="top-header-container">
            <button class="hamburger hamburger--elastic" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
        <div id="logo-container"><?php the_custom_logo(); ?></div>
        <div id="page-overlay">
            <?php wp_nav_menu( array (
                'menu' => 'header',
                'container_id' => 'menu-header-container',
                'container_class' => "menu-container",
                'menu_id' => 'header-menu',
                'link_after' => '.'
            ) ) ?>
        </div>
    </header>
