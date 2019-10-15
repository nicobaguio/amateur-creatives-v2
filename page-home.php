<?php get_header(); ?>
<div id="desktop">
    <?php get_template_part( 'template-parts/home/blogposts', 'carousel' ); ?>
</div>
<div id="mobile">
<?php get_template_part( 'template-parts/home/blogposts', 'carousel' ); ?>
</div>
<div class="white-bg">
    <?php get_template_part( 'template-parts/home/video', 'reel' ); ?>
</div>
<?php
    $shop_icon = get_field('shop_icon');
    $blog_icon = get_field('blog_icon');
    $courses_icon = get_field('courses_icon');
?>
<div id="card-link-container">
    <div id="shop-card-link" class="card-link">
        <a href="#">
                <?php echo wp_get_attachment_image( $shop_icon, 'thumbnail')?>
            <p class="card-link title">shop.</p>
            <p class="card-link subtitle"><i>coming soon!</i></p>
        </a>
    </div>
    <div id="blogs-card-link" class="card-link">
        <a href="#">
                <?php echo wp_get_attachment_image( $blog_icon, 'thumbnail')?>
            <p class="card-link title">courses.</p>
            <p class="card-link subtitle"><i>coming soon!</i></p>
        </a>
    </div>
    <div id="courses-card-link" class="card-link">
        <a href="https://patreon.com/amateurcreatives" target="blank">
                <?php echo wp_get_attachment_image( $courses_icon, 'thumbnail')?>
            <p class="card-link title">patreon.</p>
            <p class="card-link subtitle"><i>currently paused due to #paperconph convention prep!</i></p>
        </a>
    </div>
</div>
<div class="white-bg">
    <?php get_template_part( 'template-parts/home/home', 'newsletter' ); ?>
</div>

<?php get_footer(); ?>