<div class="post-container">
    <?php
        $thumb = get_the_post_thumbnail_url(null, "card-thumbnail");
        $url = get_post_permalink();
        $category_id = get_the_category()[0]->term_id;
        $image_id = get_term_meta($category_id, 'image', true );
        $image_data = wp_get_attachment_image_src( $image_id, 'full' );
    ?>
    <a href="<?php echo $url ?>">
        <div>
            <img src="<?php echo $thumb ?>" class="card-thumbnail">
            <img class="category-icon" src="<?php echo $image_data[0] ?>">
        </div>
        <h1 class="card-title">
            <?php the_title(); ?>
        </h1>
    </a>
</div>