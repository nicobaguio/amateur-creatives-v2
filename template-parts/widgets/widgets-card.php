<?php $post_class = has_tag(array('patreon', 'Patreon')) ? "is-patreon" : "" ?>
<div class="post-container <?php echo $post_class?>">
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
        <div>
            <?php echo has_tag(array('patreon', 'Patreon')) ? '<h5><span class="patreon-tag">PATREON ONLY!</span></h5>' : null ?>
            <h1 class="card-title">
                <?php the_title(); ?>
            </h1>
        </div>

    </a>
</div>