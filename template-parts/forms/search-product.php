<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
    <input type="text" name="s" id="search-text" placeholder="I'm looking for..." value="<?php the_search_query(); ?>"/>
    <input type="hidden" value="product" name="post_type" id="post_type" />
</form>