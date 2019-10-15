<?php 
// Register JS and CSS scripts
if ( ! function_exists( 'my_scripts' ) ) {
    function my_scripts() {
        wp_enqueue_script( 'bundle', get_template_directory_uri() . '/js/bundle.js', $in_footer=true);
    }
}

if ( ! function_exists( 'my_styles' ) ) {
    function my_styles() {
        wp_enqueue_style( 'bundle', get_template_directory_uri() . '/css/bundle.css');
        if ( is_front_page() or is_page('home') ) {
            wp_enqueue_style( 'video-reel', get_template_directory_uri() . '/css/video-reel.css' );
            wp_enqueue_style( 'home', get_template_directory_uri() . '/css/home.css' );
        };
        if ( is_singular() ) {
            wp_enqueue_style( 'single', get_template_directory_uri() . '/css/single.css');
        }
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
                'header-menu' => 'Header Menu',
                'footer-menu' => 'Footer Menu'
	    	)
        );
}}

// Register Sidebars

if (function_exists('register_sidebar') ) {
    function ac_widgets() {
        register_sidebar(array(
            'name' => 'Newsletter Header',
            'id' => 'newsletter-header',
            'description' => 'Newsletter block in header of homepage',
            'before_widget' => '<div class="newsletter-widget">',
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

        register_sidebar(array(
            'name' => 'Newsletter Footer',
            'id' => 'newsletter-footer',
            'description' => 'Newsletter block in footer of homepage',
            'before_widget' => '<div class="newsletter-widget">',
            'after_widget' => '</div>',
            'before_title' => '<h1>',
            'after_title' => '</h1>',
        ));

        register_sidebar(array(
            'name' => 'Footer Instagram Image',
            'id' => 'footer-instagram-image',
            'description' => 'Instagram Header in Footer',
            'before_widget' => '<div class="container-header-img">',
            'after_widget' => '</div>',
        ));

}}

// Add ACF fields
if( function_exists('acf_add_local_field_group') ) {

    acf_add_local_field_group(array(
        'key' => 'group_5bae00553c5ad',
        'title' => 'Blogpost Fields',
        'fields' => array(
            array(
                'key' => 'field_5b2a050458049',
                'label' => 'Horizontal Featured Image',
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
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'min_width' => '',
                'min_height' => '',
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
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
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));

    acf_add_local_field_group(array(
        'key' => 'group_5bae00554062c',
        'title' => 'Homepage Custom Fields',
        'fields' => array(
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
				'key' => 'field_5d9776030f0e5',
				'label' => 'Latest Blogposts Background',
				'name' => 'latest_blogposts_bg_img',
				'type' => 'image',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'id',
				'preview_size' => 'thumbnail',
				'library' => 'all',
				'min_width' => '',
				'min_height' => '',
				'min_size' => '',
				'max_width' => '',
				'max_height' => '',
				'max_size' => '',
				'mime_types' => '',
			),
            array(
                'key' => 'field_5d8a4576ac2b2',
                'label' => 'Video Reel',
                'name' => 'video_reel',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'min_width' => '',
                'min_height' => '',
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5d8ace26362a8',
                'label' => 'Newsletter Image',
                'name' => 'newsletter_img',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'min_width' => '',
                'min_height' => '',
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5d8abd0516fce',
                'label' => 'Shop Icon',
                'name' => 'shop_icon',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'min_width' => 50,
                'min_height' => 50,
                'min_size' => '',
                'max_width' => 200,
                'max_height' => 200,
                'max_size' => '',
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5d8abd5d16fd0',
                'label' => 'Blog Icon',
                'name' => 'blog_icon',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'min_width' => 50,
                'min_height' => 50,
                'min_size' => '',
                'max_width' => 200,
                'max_height' => 200,
                'max_size' => '',
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5d8abd6a16fd1',
                'label' => 'Courses Icon',
                'name' => 'courses_icon',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'min_width' => 50,
                'min_height' => 50,
                'min_size' => '',
                'max_width' => 200,
                'max_height' => 200,
                'max_size' => '',
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
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));

    acf_add_local_field_group(array(
        'key' => 'group_5d8a493311a08',
        'title' => 'Video Blogposts',
        'fields' => array(
            array(
                'key' => 'field_5d8a4941ae076',
                'label' => 'Video Embed',
                'name' => 'video_embed',
                'type' => 'url',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => 'Video to embed',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'post',
                ),
                array(
                    'param' => 'post_taxonomy',
                    'operator' => '==',
                    'value' => 'post_tag:video',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));
};

function ac_custom_styling( $atts, $content = null ) {
	if ( isset ( $atts['style'] ) ) {
		return "<div class='{$atts['style']}'><span>$content</span></div>";
	}
};

function shapeSpace_oembed_html($html, $url, $attr, $post_id) {
    $embed = str_replace("</div>", "", str_replace('<div>', "", $html));
	return '<div class="oembed">'. $embed .'</div>';
};

function filter_ptags_on_images($content) {
	return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
};

update_option('siteurl', '192.168.1.9:8080');
update_option('home', '192.168.1.9:8080');

if ( ! function_exists( 'nico_be_awesome_setup' ) ) {
    function nico_be_awesome_setup() {
        add_filter('the_content', 'filter_ptags_on_images');
        add_filter('embed_oembed_html', 'shapeSpace_oembed_html', 99, 4);
        add_image_size( 'card-thumbnail', 500);
        add_shortcode('ac_tag', 'ac_custom_styling');
        add_theme_support( 'post-thumbnails' );
        add_action('init','ac_nav_menus' );
        add_action('widgets_init','ac_widgets');
        add_action('wp_footer','vendor_styles');
        add_action('wp_footer','my_scripts');
        add_action('wp_footer','my_styles');
        add_theme_support( 'custom-logo' );
    }
}

add_action( 'after_setup_theme', 'nico_be_awesome_setup' );
?>