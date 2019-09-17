<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
	<input type="text" name="s" id="search-text" placeholder="I'm looking for..."/>
	<button id="search-button">
		<img src="<?php bloginfo( 'stylesheet_directory' ) ?>/assets/search.svg">
	</button>
</form>