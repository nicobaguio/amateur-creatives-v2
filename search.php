<?php get_header(); ?>
<?php 
    $search_query = get_search_query();
    $args = array(
        'post_type' => 'post',
        's' => $search_query
    );

    $the_query = new WP_Query($args);
?>
<div id="index-container">
    <h1 class="index-title">Here are the posts related to "<?php echo $search_query ?>"</h1>
    <?php
        if ( $the_query -> have_posts() ) :
            while ( $the_query -> have_posts()  ) : $the_query->the_post();
                get_template_part( 'template-parts/widgets/widgets', 'card' );
            endwhile;
            wp_reset_postdata();
    ?>
    <?php else : ?>
        <p>No posts!</p>
    <?php endif; ?>
</div>
<?php get_footer(); ?>