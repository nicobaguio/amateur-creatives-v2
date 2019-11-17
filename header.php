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

        .select2-results__options,
        .select2-selection__rendered {
            font-size: 15px;
            font-family: 'Realtime-Semibold', serif;
            text-align: left;
        }

        .select2-container--default .select2-selection--single {
            border: 1px var(--salmon) solid;
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
                    'theme_location' => 'header-menu',
                    'container_id' => 'menu-header-container',
                    'container_class' => "menu-container",
                    'menu_id' => 'header-menu',

                ) ) ?>
                <?php if ($is_woo): ?>
                    <div id="shop-sidebar-container">
                        <div class="cart-logo-container">
                            <a href="/cart" class="cart-link">&#128722; cart (<?php echo WC()->cart->get_cart_contents_count(); ?>)</a>
                        </div>
                        <ul class="menu-container">
                            <li class="menu-item"><a href="/shop">Browse all</a></li>
                            <li class="menu-item"><a href="/?post_type=product&product_tag=new">New Stuff</a></li>
                        </ul>
                        <?php wp_nav_menu( array (
                                'theme_location' => 'shop-menu',
                                'container' => '',
                                'menu_id' => 'product-sidebar-menu',
                                'menu_class' => 'menu-container',
                                'fallback_cb' => false
                        ) ) ?>
                        <?php wp_nav_menu( array (
                                'theme_location' => 'shop-bottom-menu',
                                'container' => '',
                                'menu_id' => 'shop-bottom-sidebar-menu',
                                'menu_class' => 'menu-container',
                                'fallback_cb' => false
                        ) ) ?>
                    </div>
                    <p class="shipping-from">All products are shipped from manila, philippines!</p>
                <?php endif; ?>
                <div id="search-form-container">
                    <?php if ($is_woo) {
                        get_template_part( 'template-parts/forms/search', 'product' );
                    } else {
                        get_template_part( 'template-parts/forms/search', 'normal' );
                    }
                    ?>                    
                </div>
                <?php if ($is_woo): ?>
                    <a href="/" class="homepage-link">Back to main site!</a>
                <?php endif; ?>
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
