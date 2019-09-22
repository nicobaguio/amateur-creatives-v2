<?php 
$logo = wp_get_attachment_image_src( $custom_logo_id, 'full');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Amateur Creatives</title>
    <?php wp_head(); ?>
</head>
<body id="body-container">
    <header id="header-container">
        <div id="top-container">
            <div id="top-header-container">
                <button class="hamburger hamburger--elastic is-active" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div id="logo-container">
                <div class="logo-pads"></div>
                <div><?php the_custom_logo(); ?></div>
                <div class="logo-pads"></div>
            </div>
        </div>
        <div id="middle-container">
            <div id="page-overlay">
                <?php wp_nav_menu( array (
                    'menu' => 'header-menu',
                    'container_id' => 'menu-header-container',
                    'container_class' => "menu-container",
                    'menu_id' => 'header-menu'
                ) ) ?>
                <div id="search-form-container">
                    <?php get_search_form(); ?>
                </div>
            </div>
            <div id="newsletter-container">
                <?php dynamic_sidebar('newsletter-header') ?>
            </div>
        </div>
        <div id="header-hero-container">
            <?php dynamic_sidebar('hero-header') ?>
        </div>
    </header>
