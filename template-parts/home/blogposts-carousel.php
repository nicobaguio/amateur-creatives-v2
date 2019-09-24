<?php $latest_blogposts_img = get_field('latest_blogposts_img') ?>
<div id="latest-blogposts-container">
    <?php echo wp_get_attachment_image($latest_blogposts_img, null, false, array('id' => 'container-header-img')) ?>
    <div class="main-carousel">
        <?php $the_query = new WP_Query( array( 'posts_per_page' => 4 )) ?>
        <?php if ( $the_query->have_posts() ): ?>
            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
            <?php get_template_part('template-parts/widgets/widgets', 'card') ?>
            <?php endwhile ?>
            <?php wp_reset_postdata(); ?>
        <?php else : ?>
            <p><?php __('No News!'); ?></p>
        <?php endif; ?>	
    </div>
    <a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ) ?>">
        <h3>check out all the blogposts -></h3>
    </a>
</div>