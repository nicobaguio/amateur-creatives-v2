<?php get_header(); ?>
<div id="desktop">
    <?php get_template_part( 'template-parts/home/blogposts', 'carousel' ); ?>
</div>
<div id="mobile">
<?php get_template_part( 'template-parts/home/blogposts', 'carousel' ); ?>
</div>
<?php get_template_part( 'template-parts/home/video', 'reel' ); ?>
<?php
    $shop_icon = get_field('shop_icon');
    $blog_icon = get_field('blog_icon');
    $courses_icon = get_field('courses_icon');
?>
<div id="card-link-container">
    <div id="shop-card-link" class="card-link">
        <a href="/shop">
                <?php echo wp_get_attachment_image( $shop_icon, 'thumbnail')?>
            <p class="card-link title">Shop</p>
            <p class="card-link subtitle">Visit the shop and take home fun paper goods like stickers and zines!</p>
        </a>
    </div>
    <div id="blogs-card-link" class="card-link">
        <a href="/blogs">
                <?php echo wp_get_attachment_image( $blog_icon, 'thumbnail')?>
            <p class="card-link title">Blogs</p>
            <p class="card-link subtitle">Visit the shop and take home fun paper goods like stickers and zines!</p>
        </a>
    </div>
    <div id="courses-card-link" class="card-link">
        <a href="/courses">
                <?php echo wp_get_attachment_image( $courses_icon, 'thumbnail')?>
            <p class="card-link title">Courses</p>
            <p class="card-link subtitle">Visit the shop and take home fun paper goods like stickers and zines!</p>
        </a>
    </div>
</div>
<?php get_template_part( 'template-parts/home/home', 'newsletter' ); ?>
<?php get_footer(); ?>