<?php 
// Register JS and CSS scripts
if ( ! function_exists( 'my_scripts' ) ) {
    function my_scripts() {
        wp_enqueue_script( 'fonts', get_template_directory_uri() . '/js/fonts.js', $in_footer=true);
        wp_enqueue_script( 'ac-js', get_template_directory_uri() . '/js/amateur-creatives.js', $in_footer=true);
        if (is_front_page() or is_page('home')) {
        wp_enqueue_script( 'custom-typed-js', get_template_directory_uri() . '/js/typed-custom.js', $in_footer=true);
        wp_enqueue_script( 'custom-flkty-js', get_template_directory_uri() . '/js/flickity-custom.js', $in_footer=true);
        }
    }
}

if ( ! function_exists( 'vendor_scripts' ) ) {
    function vendor_scripts() {
        if (is_front_page() or is_page('home')) {
            wp_enqueue_script( 'typed-js', 'https://cdn.jsdelivr.net/npm/typed.js@2.0.10/lib/typed.min.js', $in_footer=true);
            wp_enqueue_script( 'flickity-js', 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js', $in_footer=true);
        }
    }
}

if ( ! function_exists( 'my_styles' ) ) {
    function my_styles() {
        wp_enqueue_style( 'style', get_stylesheet_uri());
        wp_enqueue_style( 'front', get_template_directory_uri() . '/css/front.css', array(), null, '(max-width: 1023px)');
        wp_enqueue_style( 'desktop-front', get_template_directory_uri() . '/css/desktop-front.css', array(), null, '(min-width: 1024px)');
    };    
}

if ( ! function_exists( 'vendor_styles' ) ) {
    function vendor_styles() {
        wp_enqueue_style( 'flickity-css', 'https://unpkg.com/flickity@2/dist/flickity.min.css', array(), null, '(max-width: 1023px)');
    }
}

if ( function_exists( 'register_nav_menus' ) ) {
	function ac_nav_menus() {
		register_nav_menus(
			array(
				'header-menu' => 'Header Menu'
		)
	);
}}
// Register Sidebars

if (function_exists('register_sidebar') ) {
    function ac_header_widgets() {
        register_sidebar(array(
            'name' => 'Newsletter Header',
            'id' => 'newsletter-header',
            'description' => 'Newsletter block in header of homepage',
            'before_widget' => '<div id="newsletter-widget">',
            'after_widget' => '</div>',
            'before_title' => '<h1>',
            'after_title' => '</h1>',
        ));

        register_sidebar(array(
            'name' => 'Hero Header',
            'id' => 'hero-header',
            'description' => 'Hero Header image',
            'before_widget' => '<div class="hero-header-widget">',
            'after_widget' => '</div>',
        ));
}}

// Add ACF fields
if ( function_exists('acf_add_local_field_group') ) {

    acf_add_local_field_group(array(
        'key' => 'group_5bae00553c5ad',
        'title' => 'Blogpost Fields',
        'fields' => array(
            array(
                'key' => 'field_5b2a050458049',
                'label' => 'horizontal featured image',
                'name' => 'horizontal_featured_img',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'return_format' => 'id',
                'min_width' => 0,
                'min_height' => 0,
                'min_size' => 0,
                'max_width' => 0,
                'max_height' => 0,
                'max_size' => 0,
                'mime_types' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'post',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'side',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
        ),
        'active' => true,
        'description' => '',
    ));
    
    acf_add_local_field_group(array(
        'key' => 'group_5bae00554062c',
        'title' => 'Homepage Custom Fields',
        'fields' => array(
            array(
                'key' => 'field_5b1090e6f87f3',
                'label' => 'Headshot Image',
                'name' => 'headshot',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'return_format' => 'id',
                'min_width' => 0,
                'min_height' => 0,
                'min_size' => 0,
                'max_width' => 0,
                'max_height' => 0,
                'max_size' => 0,
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5b10912cf87f4',
                'label' => 'Blogpost Background',
                'name' => 'blogpost_bg',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'return_format' => 'id',
                'min_width' => 0,
                'min_height' => 0,
                'min_size' => 0,
                'max_width' => 0,
                'max_height' => 0,
                'max_size' => 0,
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5b1d7912dc63f',
                'label' => 'Latest Blogposts',
                'name' => 'latest_blogposts_img',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'return_format' => 'id',
                'min_width' => 0,
                'min_height' => 0,
                'min_size' => 0,
                'max_width' => 0,
                'max_height' => 0,
                'max_size' => 0,
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5b1d7947dc640',
                'label' => 'Newsletter',
                'name' => 'emailform_text_img',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'return_format' => 'id',
                'min_width' => 0,
                'min_height' => 0,
                'min_size' => 0,
                'max_width' => 0,
                'max_height' => 0,
                'max_size' => 0,
                'mime_types' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_type',
                    'operator' => '==',
                    'value' => 'front_page',
                ),
            ),
            array(
                array(
                    'param' => 'page',
                    'operator' => '==',
                    'value' => '70',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'side',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
        ),
        'active' => true,
        'description' => '',
    ));
}

add_image_size( 'card-thumbnail', 300);

if ( ! function_exists( 'nico_be_awesome_setup' ) ) {
    function nico_be_awesome_setup() {
        add_theme_support( 'post-thumbnails' );
        add_action('init','ac_nav_menus' );
        add_action('widgets_init','ac_header_widgets');
        add_action('wp_footer','vendor_scripts');
        add_action('wp_footer','vendor_styles');
        add_action('wp_footer','my_scripts');
        add_action('wp_footer','my_styles');
        add_theme_support( 'custom-logo' );
    }
}

add_action( 'after_setup_theme', 'nico_be_awesome_setup' );
?>