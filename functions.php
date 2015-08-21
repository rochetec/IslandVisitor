<?php 

function wpbootstrap_scripts_with_jquery()
{
	// Register the script like this for a theme:
	wp_register_script( 'custom-script-bootstrap', get_template_directory_uri() . '/bootstrap/js/bootstrap.js', array( 'jquery' ) );
	wp_register_script( 'custom-script-iln', get_template_directory_uri() . '/js/functionality.js', array( 'jquery' ) );
	wp_register_script( 'custom-script-easing', get_template_directory_uri() . '/js/easing.js', array( 'jquery' ) );
	wp_register_script( 'custom-script-fade', get_template_directory_uri() . '/js/fade.js', array( 'jquery' ) );
	
	// For either a plugin or a theme, you can then enqueue the script:
	wp_enqueue_script( 'custom-script-bootstrap' );
	wp_enqueue_script( 'custom-script-iln' );
	wp_enqueue_script( 'custom-script-easing' );
	wp_enqueue_script( 'custom-script-fade' );
	
}
add_action( 'wp_enqueue_scripts', 'wpbootstrap_scripts_with_jquery' );
// Our custom post type function
function create_posttype() {

	register_post_type( 'listings',
	// CPT Options
		array(
			'labels' => array(
				'name' => __( 'Listings' ),
				'singular_name' => __( 'Listing' )
			),
			'capability_type' =>  'page',
			'public' => true,
			'menu_icon'           => 'http://91.109.11.115/destinationisleofwight/images/listings-icon.png',
			'has_archive' => true,
			'show_ui' => true,
			'taxonomies' => array('category', 'post_tag'),	
			'rewrite' => array('slug' => 'listigs'),
			'supports' => array( 'title', 'revisions', 'thumbnail' )
		)
	);

	register_post_type( 'features',
	// CPT Options
		array(
			'labels' => array(
				'name' => __( 'Features' ),
				'singular_name' => __( 'Features' )
			),
			'capability_type' =>  'page',
			'public' => true,
			'menu_icon'           => 'http://91.109.11.115/destinationisleofwight/images/features-icon.png',
			'has_archive' => true,
			'show_ui' => true,
			'taxonomies' => array('category', 'post_tag'),	
			'rewrite' => array('slug' => 'features'),
			'supports' => array( 'title', 'editor', 'revisions', 'thumbnail' )
		)
	);
}
add_theme_support( 'post-thumbnails' );
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype' );
add_action( 'init', 'register_my_post_type', 0 );
?>