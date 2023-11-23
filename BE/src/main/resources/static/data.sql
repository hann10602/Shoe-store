CREATE SCHEMA `vmo-project` ;

INSERT INTO `vmo-project`.`role` (`code`, `name`) VALUES ('ROLE_USER', 'User');
INSERT INTO `vmo-project`.`role` (`code`, `name`) VALUES ('ROLE_ADMIN', 'Admin');

INSERT INTO `vmo-project`.`category` (`code`, `name`) VALUES ('SNEAKER', 'Sneaker');
INSERT INTO `vmo-project`.`category` (`code`, `name`) VALUES ('SPORT', 'Sport');
INSERT INTO `vmo-project`.`category` (`code`, `name`) VALUES ('LEATHER', 'Leather Shoe');
INSERT INTO `vmo-project`.`category` (`code`, `name`) VALUES ('BOOT', 'Boot');

INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('35', '35');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('36', '36');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('37', '37');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('38', '38');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('39', '39');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('40', '40');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('41', '41');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('42', '42');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('43', '43');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('44', '44');
INSERT INTO `vmo-project`.`size` (`code`, `name`) VALUES ('45', '45');

INSERT INTO `vmo-project`.`shoe` (`description`, `name`, `price`, `category_id`) VALUES ('Vans Authentic Classic Black/White: A symbol of timeless skate style. The sleek black canvas upper meets an iconic white sole, creating a low-top silhouette for ultimate comfort. Simple, yet distinctive, these shoes redefine casual cool.', 'VANS AUTHENTIC CLASSIC BLACK/WHITE', 75, 1);

INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317', 1);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-2.png?v=1625925620597', 1);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-3.png?v=1625925623543', 1);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-4.png?v=1625925626347', 1);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-5.png?v=1625925629497', 1);

INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 1, 3);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 1, 4);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 1, 6);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 1, 7);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 1, 8);

INSERT INTO `vmo-project`.`shoe` (`description`, `name`, `price`, `category_id`) VALUES ('Vans Checkerboard Slip-On Classic Black/Off White: Effortlessly stylish with an iconic checkerboard pattern. The slip-on design, sturdy canvas, and signature waffle outsole combine comfort with a bold, timeless look.', 'VANS CHECKERBOARD SLIP-ON CLASSIC BLACK/OFF WHITE', 59, 1);

INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-1.png?v=1625923436960', 2);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-2.png?v=1625923440187', 2);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-3.png?v=1625923334863', 2);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-4.png?v=1625923337587', 2);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-5.png?v=1625923340347', 2);

INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 2, 3);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 2, 4);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 2, 5);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 2, 7);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 2, 8);

INSERT INTO `vmo-project`.`shoe` (`description`, `name`, `price`, `category_id`) VALUES ('Vans Classic Black sneakers epitomize casual coolness. The sleek black canvas upper exudes timeless style, complemented by a durable white rubber sole. With the signature waffle outsole for traction, these classics feature distinctive white stitching and the iconic Vans logo on the heel, creating an effortlessly stylish and versatile footwear option.', 'VANS SK8-HI CLASSIC NAVY/WHITE', 63, 1);

INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/van-sk8-hi-classic-navywhite-vn000d5invy-1.jpg?v=1625937187163', 3);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/van-sk8-hi-classic-navywhite-vn000d5invy-2.jpg?v=1625937190500', 3);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/van-sk8-hi-classic-navywhite-vn000d5invy-3.jpg?v=1625937194193', 3);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/van-sk8-hi-classic-navywhite-vn000d5invy-4.jpg?v=1625937197617', 3);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://vansvietnam.com.vn/vans-sk8-hi-classic-navy-white-vn000d5invy', 3);

INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 3, 3);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 3, 4);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 3, 6);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 3, 7);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 3, 9);

INSERT INTO `vmo-project`.`shoe` (`description`, `name`, `price`, `category_id`) VALUES ('Vans Old Skool Classic Navy/White: An urban icon with navy canvas, white sidestripes, and a low-top silhouette. Comfort meets timeless style in these street-ready sneakers, perfect for versatile, everyday wear.', 'VANS OLD SKOOL CLASSIC NAVY/WHITE', 82, 1);

INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-old-skool-classic-navy-white-vn000d3hnvy-1.jpg?v=1625922070377', 4);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-old-skool-classic-navy-white-vn000d3hnvy-2.jpg?v=1625922077960', 4);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-old-skool-classic-navy-white-vn000d3hnvy-3.jpg?v=1625922080743', 4);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-old-skool-classic-navy-white-vn000d3hnvy-4.jpg?v=1625922083807', 4);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-old-skool-classic-navy-white-vn000d3hnvy-5.jpg?v=1625922086300', 4);

INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 4, 3);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 4, 5);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 4, 6);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 4, 7);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 4, 8);

INSERT INTO `vmo-project`.`shoe` (`description`, `name`, `price`, `category_id`) VALUES ('Vans Classic SK8-Hi Black/White: Elevate your street style with these iconic high-top sneakers. The black canvas, white leather sidestripe, and padded collars merge comfort and bold design seamlessly. A timeless choice for urban fashion.', 'VANS CLASSIC SK8-HI BLACK/WHITE', 68, 1);

INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-1.jpg?v=1625938546987', 5);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-2.jpg?v=1625938551507', 5);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-3.jpg?v=1625938555997', 5);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-4.jpg?v=1625938566527', 5);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-5.jpg?v=1625938572327', 5);

INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 5, 2);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 5, 4);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 5, 5);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 5, 7);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 5, 8);

INSERT INTO `vmo-project`.`shoe` (`description`, `name`, `price`, `category_id`) VALUES ('Vans Slip-On Mule Classic Checkerboard: Redefining casual comfort with a slip-on design and the iconic checkerboard pattern. These shoes seamlessly blend urban style with laid-back ease, making them a distinctive choice for everyday wear.', 'VANS SLIP-ON MULE CLASSIC CHECKERBOARD', 55, 1);

INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/giay-vans-slip-on-mule-classic-checkerboard-vn0004kteo1-1.jpg?v=1658238387200', 6);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-slip-on-mule-classic-checkerboard-vn0004kteo1-2.jpg?v=1658238378350', 6);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-slip-on-mule-classic-checkerboard-vn0004kteo1-3.jpg?v=1658238378350', 6);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-slip-on-mule-classic-checkerboard-vn0004kteo1-4.jpg?v=1658238378350', 6);
INSERT INTO `vmo-project`.`image` (`url`, `shoe_id`) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-slip-on-mule-classic-checkerboard-vn0004kteo1-5.jpg?v=1658238378350', 6);

INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 6, 3);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 6, 4);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 6, 6);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 6, 8);
INSERT INTO `vmo-project`.`shoe_size` (`quantity`, `shoe_id`, `size_id`) VALUES (50, 6, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Vans Era Mitchell Camo Multicolour shoes blend urban style with a touch of military flair. Featuring a distinctive camouflage pattern in vibrant colors, these iconic skate shoes boast a comfortable canvas upper, padded collar, and signature waffle outsole. Perfect for streetwear enthusiasts, they effortlessly combine fashion and functionality.', 'VANS ERA MITCHELL CAMO MULTICOLOUR', 76, 1);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/giay-vans-era-mitchell-camo-multicolour-vn0007nu448-1.jpg?v=1699340736980', 7);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-mitchell-camo-multicolour-vn0007nu448-2.jpg?v=1699340729130', 7);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-mitchell-camo-multicolour-vn0007nu448-3.jpg?v=1699340729130', 7);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-mitchell-camo-multicolour-vn0007nu448-5.jpg?v=1699340729130', 7);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-mitchell-camo-multicolour-vn0007nu448-6.jpg?v=1699340729130', 7);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 7, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 7, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 7, 5);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 7, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 7, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Vans Old Skool Club White shoes epitomize timeless skate culture. With a classic white canvas upper, iconic side stripe, and durable suede overlays, these sneakers exude retro-cool vibes. The Vans Off the Wall logo on the heel and a sturdy rubber waffle outsole complete the iconic look, making them a must-have for streetwear aficionados.', '
VANS OLD SKOOL VANS CLUB WHITE', 185, 1);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/giay-vans-old-skool-vans-club-white-vn0005ufyy2-1.jpg?v=1687284667910', 8);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-old-skool-vans-club-white-vn0005ufyy2-2.jpg?v=1687284669543', 8);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-old-skool-vans-club-white-vn0005ufyy2-3.jpg?v=1687284671747', 8);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-old-skool-vans-club-white-vn0005ufyy2-5.jpg?v=1687284673977', 8);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-old-skool-vans-club-white-vn0005ufyy2-6.jpg?v=1687284675237', 8);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 8, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 8, 5);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 8, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 8, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 8, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Vans Era Check Block Tango Red shoes showcase a bold and playful design. With a vibrant tango red color and a distinctive checkered pattern, these sneakers exude a lively and eye-catching aesthetic. The classic Era silhouette, durable canvas upper, and signature waffle outsole ensure both style and comfort, making them a standout choice for casual and streetwear fashion.', '
VANS ERA CHECK BLOCK TANGO RED', 74, 1);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/giay-vans-era-check-block-tango-red-vn0a38frvor-1.jpg?v=1697623024660', 9);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-check-block-tango-red-vn0a38frvor-2.jpg?v=1697623016833', 9);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-check-block-tango-red-vn0a38frvor-3.jpg?v=1697623016833', 9);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-check-block-tango-red-vn0a38frvor-4.jpg?v=1697623016833', 9);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-check-block-tango-red-vn0a38frvor-5.jpg?v=1697623016833', 9);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 9, 5);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 9, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 9, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 9, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 9, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Vans Era Patchwork Trippy Cord Multi shoes are a psychedelic blend of style and comfort. Featuring a patchwork design in vibrant, trippy colors, these sneakers offer a unique and eclectic look. The corduroy material adds texture, while the classic Era silhouette and grippy waffle outsole maintain the brand skate heritage. Step into a world of funky fashion with these distinctive and playful kicks.',
                                                                                 'VANS ERA PATCHWORK TRIPPY CORD MULTI', 97, 1);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/giay-vans-era-patchwork-trippy-cord-multi-vn0a4bvu448-1.jpg?v=1697623303383', '10');
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-patchwork-trippy-cord-multi-vn0a4bvu448-2.jpg?v=1697623285957', 10);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-patchwork-trippy-cord-multi-vn0a4bvu448-3.jpg?v=1697623285957', 10);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-patchwork-trippy-cord-multi-vn0a4bvu448-4.jpg?v=1697623285957', 10);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-patchwork-trippy-cord-multi-vn0a4bvu448-5.jpg?v=1697623285957', 10);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 10, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 10, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 10, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 10, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 10, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Vans Era Lady Green shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
VANS ERA LADY GREEN', 76, 1);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/giay-vans-era-lady-green-vn0a4bv4vxs-1.jpg?v=1666016682897', 11);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-lady-green-vn0a4bv4vxs-2.jpg?v=1666016685410', 11);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-lady-green-vn0a4bv4vxs-4.jpg?v=1666016686483', 11);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-lady-green-vn0a4bv4vxs-6.jpg?v=1666016687680', 11);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://bizweb.dktcdn.net/100/140/774/products/giay-vans-era-lady-green-vn0a4bv4vxs-4.jpg?v=1666016686483', 11);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 11, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 11, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 11, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 11, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 11, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike Structure 25 combines cutting-edge technology with timeless style. Featuring a breathable mesh upper for comfort and stability, these running shoes deliver exceptional support with a responsive cushioning system. The sleek design, complemented by vibrant color accents, makes them a perfect fusion of performance and aesthetics for the modern runner.', '
Nike Structure 25', 94, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7587f702-83cb-4dbc-8355-35f07adcb057/structure-25-road-running-shoes-Vnp1d0.png', 12);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9f0482f5-7ccf-41fc-a1a7-ea21c6e1b6be/structure-25-road-running-shoes-Vnp1d0.png', 12);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b2a87b29-2d23-435e-b2af-7f7d702b85f5/structure-25-road-running-shoes-Vnp1d0.png', 12);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c071310-1e87-4dd5-bcca-c75d6ff16ba6/structure-25-road-running-shoes-Vnp1d0.png', 12);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/78788153-44ca-4b06-b2b0-9c1e2b14cfab/structure-25-road-running-shoes-Vnp1d0.png', 12);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 12, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 12, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 12, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 12, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 12, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike Vaporfly 3 redefines speed with its innovative design. Crafted for elite runners, these racing shoes boast a lightweight, aerodynamic construction and responsive ZoomX foam for unparalleled energy return. The sleek, futuristic aesthetics and precision engineering make them a symbol of ultimate performance on the track or road.', '
Nike Vaporfly 3', 363, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19c57c63-7bfd-47b5-af2f-9a4238f5749e/vaporfly-3-road-racing-shoes-xsDgvM.png', 13);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fd1b61a1-ee63-4325-b95f-5cad0555bfe8/vaporfly-3-road-racing-shoes-xsDgvM.png', 13);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8a8e156a-cbb0-4546-962f-b8231ffd7ebe/vaporfly-3-road-racing-shoes-xsDgvM.png', 13);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bfc68532-d8f6-464a-9e24-8fc317ece8d7/vaporfly-3-road-racing-shoes-xsDgvM.png', 13);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8dae6975-64bf-4460-a9c4-8180760d986e/vaporfly-3-road-racing-shoes-xsDgvM.png', 13);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 13, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 13, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 13, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 13, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 13, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike Downshifter 12 offers a perfect blend of comfort and versatility. With a breathable mesh upper and cushioned Phylon midsole, these running shoes provide reliable support for everyday workouts. The sleek design, coupled with the iconic Nike Swoosh, adds a touch of style to your athletic endeavors, making them ideal for both training and casual wear.', '
Nike Downshifter 12', 99, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e53419df-8536-4c14-8f0d-2e481b1fad2f/downshifter-12-road-running-shoes-kQLnZn.png', 14);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/251341bc-2862-4f1d-8c8d-ec86e68363a7/downshifter-12-road-running-shoes-kQLnZn.png', 14);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5c2a7cb-82e5-4871-bcbf-b5f5c88754f7/downshifter-12-road-running-shoes-kQLnZn.png', 14);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3a58103d-7cae-495f-a0df-cdbf3944af2f/downshifter-12-road-running-shoes-kQLnZn.png', 14);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/354a7fb3-28fb-4462-94b7-60ca9a812480/downshifter-12-road-running-shoes-kQLnZn.png', 14);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 14, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 14, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 14, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 14, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 14, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike Revolution 6 brings a revolution in comfort and style. These running shoes feature a lightweight mesh upper for breathability and a plush foam midsole for responsive cushioning. With a streamlined design and the iconic Nike Swoosh, they strike the perfect balance between performance and street-ready fashion, making every stride a statement.', '
Nike Revolution 6', 71, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/acc13136-6d36-44e8-838d-1ff16d84d4ae/revolution-6-road-running-shoes-NC0P7k.png', 15);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a11becba-5ab2-4b68-a414-a53d3769c6ba/revolution-6-road-running-shoes-NC0P7k.png', 15);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b02e5a8a-329b-48c1-a3b6-eb574f8a1d64/revolution-6-road-running-shoes-NC0P7k.png', 15);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f16f009b-8843-4a7b-98c0-b4a13e383582/revolution-6-road-running-shoes-NC0P7k.png', 15);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/97970f99-58e8-4d55-8f6c-d36d3989ebba/revolution-6-road-running-shoes-NC0P7k.png', 15);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 15, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 15, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 15, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 15, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 15, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike Pegasus Turbo is a highly regarded running shoe known for its combination of comfort and performance. The Turbo series, including models like the Pegasus Turbo and Pegasus Turbo 2, is designed for runners seeking a responsive and lightweight experience. Key features often include Nikes ZoomX foam in the midsole, offering excellent energy return, and a lightweight mesh upper for breathability.', '
Nike Pegasus Turbo', 249, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/672f902d-944a-4c13-897a-58e8e9c0d2cd/pegasus-turbo-road-running-shoes-MSSVMK.png', 16);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19ce9e8b-0e8f-4d4d-996b-84ea02d87612/pegasus-turbo-road-running-shoes-MSSVMK.png', 16);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e4056f30-032e-4e06-bb7f-8ed0cddcf558/pegasus-turbo-road-running-shoes-MSSVMK.png', 16);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ac0ce63-65ac-4c0c-943e-23ec14532b75/pegasus-turbo-road-running-shoes-MSSVMK.png', 16);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4e7c71a-2c08-4a44-9b87-2716dac83031/pegasus-turbo-road-running-shoes-MSSVMK.png', 16);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 16, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 16, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 16, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 16, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 16, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike Invincible 3 shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Nike Invincible 3', 265, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4c41bcec-f8e9-4eaf-913d-e5fef6438749/invincible-3-road-running-shoes-Wwmmlp.png', 17);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/602fa2ec-04cc-41e1-adcf-357a64cc2864/invincible-3-road-running-shoes-Wwmmlp.png', 17);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f656a59e-78e5-46fb-b231-ee14db9e6a8d/invincible-3-road-running-shoes-Wwmmlp.png', 17);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/04d6f586-0a6f-4029-83a8-bdb23b3d55c6/invincible-3-road-running-shoes-Wwmmlp.png', 17);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b744f780-d44c-4be6-b36e-960548db8919/invincible-3-road-running-shoes-Wwmmlp.png', 17);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 17, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 17, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 17, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 17, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 17, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike Pegasus 40 shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Nike Pegasus 40', 187, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ae209260-d1a2-41d1-bb9e-4ae639b914a6/pegasus-40-road-running-shoes-0Z9lqN.png', 18);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/346d9b34-28d8-4ba6-8c3c-5bc83329c907/pegasus-40-road-running-shoes-0Z9lqN.png', 18);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/24bc51b5-9e5e-46ef-b80c-e71e5926c7ca/pegasus-40-road-running-shoes-0Z9lqN.png', 18);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/35ff5008-b76e-4976-b7b3-6594fecf028c/pegasus-40-road-running-shoes-0Z9lqN.png', 18);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d94a578f-9c87-4b05-aa5e-e9d54a57f416/pegasus-40-road-running-shoes-0Z9lqN.png', 18);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 18, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 18, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 18, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 18, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 18, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike Free RN NN shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Nike Free RN NN', 149, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9d19ad97-8e79-4627-ab0a-a53b69474f03/free-rn-nn-road-running-shoes-D64TzS.png', 19);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/25d432b1-772d-437c-b591-97326fb3a464/free-rn-nn-road-running-shoes-D64TzS.png', 19);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/393a43e1-779e-4f83-94ae-0126ed0f9273/free-rn-nn-road-running-shoes-D64TzS.png', 19);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c5cf5359-cf38-4f59-af87-0531e9e504db/free-rn-nn-road-running-shoes-D64TzS.png', 19);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3e8274be-4991-4f23-ba23-e34e4650340a/free-rn-nn-road-running-shoes-D64TzS.png', 19);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 19, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 19, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 19, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 19, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 19, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Nike InfinityRN 4 shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Nike InfinityRN 4', 236, 2);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e01eb9e0-ddc1-48bf-a516-bcbd40c78e39/infinityrn-4-road-running-shoes-mLRjcz.png', 20);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/14959e3c-421c-4d3c-a5ac-52464858803a/infinityrn-4-road-running-shoes-mLRjcz.png', 20);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bd0c40da-c010-4ff3-b0b5-1e2e33eadf42/infinityrn-4-road-running-shoes-mLRjcz.png', 20);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f3c28b3b-665e-45c2-86e9-2d86cd7120e2/infinityrn-4-road-running-shoes-mLRjcz.png', 20);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/96926c59-2cf9-4312-a6f0-96a68c884907/infinityrn-4-road-running-shoes-mLRjcz.png', 20);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 20, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 20, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 20, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 20, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 20, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Franky Metal Toe bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Franky Metal Toe', 187, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/767688c7-6759-4db7-b7d5-c947a13e71fb_bdf4e815f37b49c0a04e50dfc9d470ed_master.jpeg', 21);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/e6ea0016-b592-4bfd-84c7-3b7ee27743a5_45caab021a7f4c3087ea293f8e4ffe1d_master.jpeg', 21);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/9ff900ce-84e3-45dc-95e2-d80d45c25c77_dfd2c468a9704cbb999cc0317846bbf3_master.jpeg', 21);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/46796d71-1e9b-415a-9d8e-c4939e807f3a_0d47b8485a484f5b872363a00bd415ef_master.jpeg', 21);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/31afaef2-df6f-4431-95ca-b48d493d1f3c_e25592d7a01d4b2cb55678a012accbcd_master.jpeg', 21);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 21, 5);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 21, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 21, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 21, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 21, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Franky Blanky Velvet bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Franky Blanky Velvet', 142, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/nhung1_cdc81293c3644a8daa977bd1d7255284_master.jpg', 22);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/nhung2_44f29b18ab0f4e09bc3b767c6a4c4974_master.jpg', 22);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/nhung4_18773d9dee584dbbadcc0430aa86d257_master.jpg', 22);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/sao3_60531c49143148d683e492aadcc89b3a_master.jpg', 22);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/nhung3_b1b3fe85e72340339e80b3671f9bbeb7_master.jpg', 22);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 22, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 22, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 22, 5);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 22, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 22, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Franky Tuxedo Brocade bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Franky Tuxedo Brocade', 225, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/thocam1_0ce938df86594f15a9e5e2b1cb555743_master.jpg', 23);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/thocam2_b7cc044adcef44dcab99122ec518bdf6_master.jpg', 23);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/thocam3_8513739c972541889d7ac310d57eed85_master.jpg', 23);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/thocam4_dd5dfbda0fda49caa59dc8da6df7030f_master.jpg', 23);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/thocam5_7ae032f0171343e59ef5f04e03cab6bc_master.jpg', 23);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 23, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 23, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 23, 5);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 23, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 23, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The JOHNY PENNY 202778 offers a perfect blend of comfort and versatility. With a breathable mesh upper and cushioned Phylon midsole, these running shoes provide reliable support for everyday workouts. The sleek design, coupled with the iconic Nike Swoosh, adds a touch of style to your athletic endeavors, making them ideal for both training and casual wear.', '
JOHNY PENNY 202778', 143, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/f147faeb-3467-4452-a15b-438ccdb54661_62feca7607a340a38c73d0da0c07cec2_master.jpeg', 24);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/d8f7d795-ebbb-4460-ad98-918d5f457219_69b21923eb8844ba9f4ff90d7fadfc6c_master.jpeg', 24);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/07510ea7-75cd-425b-92ad-3c5306efa909_610449f94d0e46d9975ff9478d84ccf7_master.jpeg', 24);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/63c8929e-901c-4594-9562-4a90880c5185_03b09db5f57148958441597ff661bcb6_master.jpeg', 24);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/327e4a5c-0d41-4391-8b57-ddf758baa12d_fee176ed071c4a92870caeee9dd3ebc8_master.jpeg', 24);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 24, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 24, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 24, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 24, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 24, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The JOHNY SUEDE TASSELS brings a revolution in comfort and style. These running shoes feature a lightweight mesh upper for breathability and a plush foam midsole for responsive cushioning. With a streamlined design and the iconic Nike Swoosh, they strike the perfect balance between performance and street-ready fashion, making every stride a statement.', '
JOHNY SUEDE TASSELS', 123, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1688-4-1_d9d8950e8b7e43e8a6d91d14532d1037_master.jpg', 25);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1688-4-3_80c3c1d3da5846249be52edb13c1a049_master.jpg', 25);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1688-4-2_01e7c392f5cf444bbb8b4911a853b554_master.jpg', 25);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1688-4-7_7301a4849c754fa18bee54edca2514c5_master.jpg', 25);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1688-4-4_bedde46edab84a38bab5eb6808a40a14_master.jpg', 25);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 25, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 25, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 25, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 25, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 25, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The JOHNY TASSELS PH1229-1 is a highly regarded running shoe known for its combination of comfort and performance. The Turbo series, including models like the Pegasus Turbo and Pegasus Turbo 2, is designed for runners seeking a responsive and lightweight experience. Key features often include Nikes ZoomX foam in the midsole, offering excellent energy return, and a lightweight mesh upper for breathability.', '
JOHNY TASSELS PH1229-1', 245, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1229-1-1_8a3a340bedc6411d8a9965b5e9a7c66a_master.jpg', 26);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1229-1-5_e7001406d9f34f84aa4ba840cff8d7d0_master.jpg', 26);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1229-1-4_f8a17406c83a4e93a483c4c69641161e_master.jpg', 26);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1229-1-6_c54868d3b28546c08ed553d3788d2ae3_master.jpg', 26);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1229-1-3_f28b837f89cb4fd9b9730fd712a07257_master.jpg', 26);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 26, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 26, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 26, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 26, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 26, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Johny Oxford Loafers shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Oxford Loafers', 265, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph677-611-1_8172d435226f43eb856b01f8dcc06a08_master.jpg', 27);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph677-611-3_314d9c29fe84421882268fcc68943e6a_master.jpg', 27);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph677-611-2_d01dac7a45374e17b1969e89daf8a8cf_master.jpg', 27);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph677-611-4_fa8a66a9b0834c9a8c5591443040bde0_master.jpg', 27);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph677-611-5_683b6e5e772a405981ad131f06741405_master.jpg', 27);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 27, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 27, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 27, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 27, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 27, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Johny Loafers 315603 shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Loafers 315603', 222, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/84f89fe4-8efc-4dc2-83a7-c38a30c49f12_e2fb6db34ed94ba3a50b41ae88c3ba6e_master.jpeg', 28);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/5763fba1-987e-4419-bfc4-71f8bef15bcd_b8e086705c8841cb9548e2d03d097cc2_master.jpeg', 28);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ad3c54aa-5bd5-49aa-a8ca-93ae69bf72c7_97dd595210cf4464b87c63826ebd5627_master.jpeg', 28);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/f629e566-a2ec-483b-aad0-6a2151385ae5_068bd6bcbd2e443b9eef8462217db8f7_master.jpeg', 28);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ea380a34-8e2d-4618-8b34-e9e95eaee2c4_13d6dc3a14404d289ed55527b1b58deb_master.jpeg', 28);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 28, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 28, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 28, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 28, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 28, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Johny Weaving Loafers shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Weaving Loafers', 214, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/1688-1-1_2554819fed694226b2ea4fcb98da9658_master.jpg', 29);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/1688-1-3_53b69736eee241b28b3ed43db98cc6f5_master.jpg', 29);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/1688-1-2_1aaf132d641a4cb18d277d077df73087_master.jpg', 29);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/1688-1-4_aa36ea1fc73844d594a74de02faae4d7_master.jpg', 29);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/1688-1-5_dce054c6b4e840b59325f0611a0c21c3_master.jpg', 29);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 29, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 29, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 29, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 29, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 29, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('The Johny Penny 01 shoes bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Penny 01', 236, 3);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph666-2_brwn1_1e07cc31752f4a91b20059d9c9df8c9b_large.jpg', 30);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph666-2_brwn5_1f4f0b4eb38f4b919bfcaa795df8297a_large.jpg', 30);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph666-2_brwn2_e49840f249e24a8db0d8f1bd84d9642d_large.jpg', 30);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph666-2_brwn6_682c7a4abf594cb6b1e28fd3293ef3d4_large.jpg', 30);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph666-2_brwn4_f7b8c46ff7f24f5e8f1faece86a684de_large.jpg', 30);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 30, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 30, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 30, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 30, 8);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 30, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Yanny Lace Boots bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Yanny Lace Boots', 165, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-silver1_559b0560b899461d974eacf2af0befc5_master.jpg', 31);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-silver3_6d0a2707c72e436eaf926375cd9ba5d0_master.jpg', 31);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-silver6_2003e9bad1ed4e398a378f6089571492_master.jpg', 31);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-silver4_fb23929e00dc4b1f8c0e5e1c425498af_master.jpg', 31);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-silver7_f44df56b1b4449d7a90b7a34afb586f1_master.jpg', 31);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 31, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 31, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 31, 5);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 31, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 31, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Yanny Lace Boots 2 bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Yanny Lace Boots 2', 121, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-blk6_6e6ed6a7dc9d416fa57450c1466bb3f0_master.jpg', 32);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-blk4_8f74c3737809408391309eb730013a10_master.jpg', 32);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-blk5_ad191114faa74fd6a6943e007c260adc_master.jpg', 32);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-blk2_e6dd83bcfd1e405b87a99ce60dbaf143_master.jpg', 32);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/css3001-blk1_98146577d8864356818c20eca38882ad_master.jpg', 32);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 32, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 32, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 32, 5);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 32, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 32, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Johny Classique Chelsea bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Classique Chelsea', 151, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1437-901-1_b91393bab56548d296892a08f08e523f_master.jpg', 33);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1437-901-3_c87026f5ee0c4bfab594f98e8bef7a72_master.jpg', 33);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1437-901-6_8d08d286e89f4c24b8025f46cdc5ad32_master.jpg', 33);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1437-901-7_fd594154ab324ff3950720878c33d77d_master.jpg', 33);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph1437-901-5_da206362d55347e68d4b1edb6b6de032_master.jpg', 33);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 33, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 33, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 33, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 33, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 33, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Johny Pointed Brogue Chelsea bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Pointed Brogue Chelsea', 168, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202737-2_f6270d7294404e01a94e1e5ca751615b_master.jpg', 34);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202737-1_1dc50b3dfab84392a5e18d078ee5691c_master.jpg', 34);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202737-5_19b33bdb627d4ce296a2661ba92e761e_master.jpg', 34);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202737-6_a020f5d727284987a33acd92a51bf873_master.jpg', 34);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202737-4_bd24e51443de46c190a506189cb9aba0_master.jpg', 34);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 34, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 34, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 34, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 34, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 34, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Johny Pointed Chelsea bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Pointed Chelsea', 159, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph333-2-1_f6921b8f8bd543f7bec68cf44cf4cdf1_master.jpg', 35);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph333-2-2_bd8a2d2553744214a07daf66faa89be7_master.jpg', 35);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph333-2-5_3729685f939a41038e5b77a8876d265f_master.jpg', 35);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph333-2-6_64f40b698cba48b9a6e311ccffe89635_master.jpg', 35);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph333-2-4_20156254fbd74762a503804c6b810dde_master.jpg', 35);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 35, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 35, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 35, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 35, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 35, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Johny Pointed Patent Chelsea bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Pointed Patent Chelsea', 143, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202733-2_e49f5ab6241c40e2b1a4da50af0af79e_master.jpg', 36);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202733-1_ab090e092fd748ef934b3b6625ee4b4b_master.jpg', 36);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202733-6_2d75bfcd5ccd4a4d803cb2a9fda14c8b_master.jpg', 36);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202733-4_97db2684307d4865a6758121d52ab866_master.jpg', 36);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph202733-5_ec4fee8a04164632b1576817692f6129_master.jpg', 36);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 36, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 36, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 36, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 36, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 36, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Johny Trendy High-Neck bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Trendy High-Neck', 165, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph042-3_16f52940aa39465498e49558213e3c90_master.jpg', 37);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph042-1_0f5b645d77d443999150d2e555effef5_master.jpg', 37);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph042-9_3eca06d255704440a49d56e518dc593a_master.jpg', 37);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph042-8_a86f2917a45b4bf18891dbf520b27faf_master.jpg', 37);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph042-2_160401f0b3af4997b709cdc94c22feb4_master.jpg', 37);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 37, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 37, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 37, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 37, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 37, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Johny Zipper Boots Pointed bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Zipper Boots Pointed', 187, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph6331-4_d2154cfaaeb443bfb8460a2c9d1c7959_master.jpg', 38);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph6331-7_6119c79453564f72838a3b1074d78c96_master.jpg', 38);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph6331-3_ae4d604cc6104ad39dde68129f93f490_master.jpg', 38);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph6331-5_88c347899c674208b4491a466dce1601_master.jpg', 38);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph6331-6_5bd4aa9c4a864870a176426ce76a6179_master.jpg', 38);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 38, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 38, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 38, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 38, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 38, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Johny Weaving Chelsea bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Johny Weaving Chelsea', 176, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph0287-blk3_9622e4251edf4551b1eb560879ea9d95_master.jpg', 39);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph0287-brwn5_881ec3b1d83f428dbed92e295ffa7200_master.jpg', 39);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph0287-brwn4_950a628edddf428faa12de11d7954b9e_master.jpg', 39);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph0287-blk2_4c902b9238b9413d85b0da2eaf711224_master.jpg', 39);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/ph0287-brwn2_92d57eb022db4f23ac82f47d191817f6_master.jpg', 39);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 39, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 39, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 39, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 39, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 39, 9);

INSERT INTO `vmo-project`.`shoe` (description, name, price, category_id) VALUES ('Yanny Higher Men Boots bring a fresh and chic touch to classic skate style. With a clean and sleek design, these sneakers feature a beautiful shade of green that adds a feminine flair. The durable canvas upper, padded collar, and signature waffle outsole ensure both comfort and iconic Vans appeal. Elevate your casual look with these stylish and versatile kicks.', '
Yanny Higher Men Boots', 181, 4);

INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/yannyboot-5_657dfb5725114153b5d84c32095d4db6_master.jpg', 40);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/yannyboot-3_19003b35985d4cdc84339b91268c3548_master.jpg', 40);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/yannyboot-2_7a53e886398b4af491b99874dfe08ddd_master.jpg', 40);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/yannyboot-8_126940e103c04d48804e284b48bb0de5_master.jpg', 40);
INSERT INTO `vmo-project`.`image` (url, shoe_id) VALUES ('https://product.hstatic.net/1000338484/product/yannyboot-1_6f59062b4ef945ca97d488f28ce4caba_master.jpg', 40);

INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 40, 3);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 40, 4);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 40, 6);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 40, 7);
INSERT INTO `vmo-project`.`shoe_size` (quantity, shoe_id, size_id) VALUES (50, 40, 9);
