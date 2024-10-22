<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mushu_icu' );

/** Database username */
define( 'DB_USER', 'mushu_icu' );

/** Database password */
define( 'DB_PASSWORD', 'mushu' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_L]<^U#*-T[#C4?k8]q~#hR,)_gtdZaB:,zx1Rd~[)wto`/=2d#xTB Pip2BEO=B' );
define( 'SECURE_AUTH_KEY',  'yoj+88^8c1fgQ-hHhh`jG.iCGY!RN;FUW-q^f]5{`%Q7`VCy!G?dXiwi5ZK=6!9^' );
define( 'LOGGED_IN_KEY',    '?e::GZBv/gB8nBDFO1HIJxL:E@AFAC7a|4R0`]cY!Mvu@s]UvNOfy>g7N@pL_fJ^' );
define( 'NONCE_KEY',        '3543p.CUpZ@1;u2zj-$xn]{J]7&i`V@Pvm?%:WJHg>;[`)5!si>|F>v~WAZ66z&d' );
define( 'AUTH_SALT',        'NODGX9NCh *~{4BR2B M^oGl6!nmDT!Y1^b@lm<:U%}wDp5~Mq9]^`(snr)|IjC;' );
define( 'SECURE_AUTH_SALT', '=3Mt%jEOl`]yD{f]GWj3cF,k^}KqBcC^QxCp)*I)krqB$;xGplTD}PHt$x2f+*E`' );
define( 'LOGGED_IN_SALT',   'gPHvNoTg-HJ]l)=-V>k4Tu^7*5!Js8y3Ge)}fS5.Q?MzivsSF/sskL-FP+c.VQjw' );
define( 'NONCE_SALT',       '78rfJ  }tB2|V6W=E;?X2D{`O:7Uf%DbqzcEp=R,a)4<;}ILa56&wPqD3LH8#tX`' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
