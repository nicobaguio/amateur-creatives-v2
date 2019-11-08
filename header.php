<?php 
$is_woo = is_woocommerce() || is_cart() || is_checkout();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Amateur Creatives</title>
    <?php wp_head(); ?>
    <style type="text/css">
        hr {
            background-image: url("<?php echo get_template_directory_uri() ?>/images/divider.png")
        }

        #content ul li,
        #shop-container ul li,
        #product-container ul li {
            background-image: url("<?php echo get_template_directory_uri() ?>/images/ul-bullet.png")
        }

        #page-loader {
            background: white;
            position: fixed;
            top: 0;
            left: -25vw;
            height: 150vh;
            width: 150vw;
            z-index: 5;
        }

        #page-loader.loaded {
            display: none;
        }

        .animated-gradient {
            background: repeating-linear-gradient(to right, #B6C2F1 0%, #FEEB52 50%, #B6C2F1 100%);
            width: 100%;
            height: 5px;
            position: absolute;
            top: 0;
            left: 0;
            background-size: 200% auto;
            background-position: 0 100%;
            animation: gradient 2s infinite;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
        }

        @keyframes gradient { 
            0%   { background-position: 0 0; }
            100% { background-position: -200% 0; }
        }

        .select2-results__options {
            font-size: 15px;
            font-family: 'Realtime-Semibold', serif;
            text-align: center;
        }
    </style>
</head>
<body id="body-container" class="<?php echo $is_woo ? 'woocommerce-small' : '' ; ?>">
    <div id="page-loader">
        <div class="animated-gradient"></div>
    </div>
    <header id="header-container">
        <div id="top-container">
            <div id="top-header-container">
                <button class="hamburger hamburger--elastic is-active <?php echo $is_woo ? 'hidden' : '' ?>" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div id="logo-header-container">
                <div class="logo"><?php the_custom_logo(); ?></div>
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
            <!-- <div id="newsletter-header-container" class="newsletter">
                <?php
                    // dynamic_sidebar('newsletter-header')
                ?>
            </div> -->
        </div>
        <div id="header-hero-container">
            <?php dynamic_sidebar('hero-header') ?>
        </div>
    </header>
