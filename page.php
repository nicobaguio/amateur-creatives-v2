<?php get_header(); ?>
<?php
    $categories = get_the_category();
    $is_video = has_tag('video');
?>
<?php
    while ( have_posts() ):
        the_post();
?>
    <div id="singular-container">
        <div id="post-header">
            <div class="category-container">
                    <?php
                            if ( is_array( $categories ) ):
                                foreach ($categories as $category):
                        ?>
                                <p class="category"><?php echo $category->name ?></p>
                                <?php endforeach; ?>
                            <?php else: ?>
                                <p class="category"><?php echo $categories->name ?></p>
                    <?php endif; ?>
            </div>
            <div class="title-container">
                <h1 class="title"><?php the_title(); ?></h1>
            </div>
            <div class="blog-graphic-container">
                <?php
                    if ( $is_video ):
                        $graphic = get_field('video_embed');
                        $graphic_str = 'https://www.youtube.com/embed/' . end(explode('=', $graphic));
                ?>
                    <div id="video-frame-wrapper">
                        <iframe
                            id="video-frame"
                            src="<?php echo $graphic_str; ?>"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                <?php
                    else:
                        $horizontal_img = get_field('horizontal_featured_img');
                ?>
                    <?php echo wp_get_attachment_image($horizontal_img, null, false, array('class'=>'blog-header-img')) ?>
                <?php endif; ?>
            </div>
        </div>
        <?php get_template_part('template-parts/content/content', 'singular'); ?>
    </div>
<?php endwhile; ?>
<?php get_footer(); ?>