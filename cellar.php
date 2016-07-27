<!DOCTYPE HTML>
<html>
<head>
     <?php include 'templates/header.php'; ?>
</head>
<body>
    <!-- HEADER -->
    <?php include "templates/navigation.php" ?>
    <!-- BANNER -->
    <div class="banner-header banner-cellar">
        <div class="container">
            <div class="banner-content">
                <h2 class="page-title">THE CELLAR AT T330</h2>
            </div>
        </div>
    </div>
    <!-- ./BANNER -->

    <!-- NUMBERS -->
    <div class="venue-numbers">
        <div class="number-wrapper">
            <div class="fact">
                <span class="number" data-number="5400">3,000</span>
                <h4 class="title">Square Feet</h4>
            </div>
            <div class="fact">
                <span class="number" data-number="275">150</span>
                <h4 class="title">Cockatil Style</h4>
            </div>
            <div class="fact">
                <span class="number" data-number="170">90</span>
                <h4 class="title">Seated Dinner</h4>
            </div>
            <div class="fact">
                <span class="number" data-number="220">60</span>
                <h4 class="title">Theater Style</h4>
            </div>
        </div>
    </div>
    <!-- /NUMBERS -->

	<div class="section-details">
		<div class="container">
			<!-- Product tab -->
            <div class="product-tabs">
                <div class="bz-verticalTab bz-tab bz-tab-style4">
                    <ul class="resp-tabs-list">
                        <li>Description</li>
                        <li>Included</li>
                        <li>Rates</li>
                    </ul>
                    <div class="resp-tabs-container">
                        <!-- DESC -->
                        <div>
                            <h4>The Cellar: Our Speakeasy Event Space</h4>
                            <p>This hidden gem, located below the main floor, features vintage lounge furniture, stone walls and whimsical lighting throughout. All levels are handicap accessible, guests can access the Cellar by stair and elevator.</p> 
                        </div>
                        <!-- ./DESC -->
                        <!-- INCLUDED -->
                        <div>
                            <h4>What's Included With Your Rental</h4>
                            <ul>
                                <li>Exclusive use of venue space for 8 hours (including all setup and cleanup time)</li>
                                <li>Professional kitchenette and room for caterer needs</li>
                                <li>Event attendant</li>
                                <li>Use of four, 6-foot, rectangular tables</li>
                                <li>Up to 15 60" round tables</li>
                                <li>In-house chairs for up to 150 guests</li>
                                <li>Use of six, 30” round highboy tables</li>
                                <li>Use of four, whiskey barrel highboy tables</li>
                                <li>1-hour pre-event walkthrough (subject to availability)</li>
                                <li>Facility clean up fee</li>
                                <li>Private entrance with elevator access</li>
                            </ul>
                        </div>
                        <!-- ./INCLUDED -->
                        <!-- RATES -->
                        <div>
                            RATES
                        </div>
                        <!-- REVIEW -->
                    </div>
                </div>
            </div>
		</div>
	</div>



	<div class="section-work">
		<!-- PORTFOLIO -->
	    <div class="bz-portfolio">
            <div class="portfolio-grid portfolio-style2 pf-hover1" data-cols="4" data-layoutMode="fitRows">
                <div class="item-portfolio photo motion">
                    <div class="pf-caption">
                        <div class="pf-image">
                            <img src="images/cellar/gallery1_480x400.jpg" alt="">
                        </div>
                        <div class="pf-info text-center">
                            <div class="pf-content-info">    
                                <a href="#" class="pf-icon"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-portfolio motion">
                    <div class="pf-caption">
                        <div class="pf-image">
                            <img src="images/cellar/gallery2_480x400.jpg" alt="">
                        </div>
                        <div class="pf-info text-center">
                            <div class="pf-content-info">    
                                <a href="#" class="pf-icon"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-portfolio motion photo">
                    <div class="pf-caption">
                        <div class="pf-image">
                            <img src="images/cellar/gallery3_480x400.jpg" alt="">
                        </div>
                        <div class="pf-info text-center">
                            <div class="pf-content-info">    
                                <a href="#" class="pf-icon"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-portfolio print-art">
                    <div class="pf-caption">
                        <div class="pf-image">
                            <img src="images/cellar/gallery4_480x400.jpg" alt="">
                        </div>
                        <div class="pf-info text-center">
                            <div class="pf-content-info">    
                                <a href="#" class="pf-icon"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	    <!-- ./PORTFOLIO -->
	</div>
	<div class="section-our-service">
		<div class="container">
			<div class="section-title text-center">
                <h3 class="title">Explore the space</h3>
            </div>
            <div class="row">
                <!--BOURBON TASTING BANNER -->
                <?php include 'banners/bourbontasting.php'; ?>

                <!--FLOORPLAN BANNER -->
                <?php include 'banners/floorplans.php'; ?>

                <!--COKE COOLER BANNER -->
                <?php include 'banners/cokecooler.php'; ?>
            </div>
		</div>
	</div>
	
    <div class="section-promo">
        <div class="container">
            <div class="promo promo2">
                <div class="promo-left">
                    <h3>Book T330's Cellar For Your Next Event</h3>
                </div>
                <div class="promo-right">
                    <a id="eventButton" data-border_width="2px" data-boder_color="#fff" data-border_hover_color="#08b6a0" data-bg="" data-bghover="" data-text_color="#fff" data-text_color_hover="#08b6a0" href="" class="button-custom medium">CONTACT US</a>
                </div>
            </div>
        </div>
    </div>
    <!-- FOOTER -->
    <footer class="footer">
        <?php include 'templates/footer.php'; ?>
    </footer>
    <a href="#" class="scroll_top" title="Scroll to Top"><i class="fa fa-arrow-up"></i></a>
    <!-- ./FOOTER -->
<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/owl.carousel.min.js"></script>
<script type="text/javascript" src="js/chosen.jquery.min.js"></script>
<script type="text/javascript" src="js/Modernizr.js"></script>
<script type="text/javascript" src="js/jquery.countTo.js"></script>
<script type="text/javascript" src="js/jquery.parallax-1.1.3.js"></script>
<script type="text/javascript" src="js/jquery.easing.min.js"></script>
<script type="text/javascript" src="js/jquery.easypiechart.min.js"></script>
<script type="text/javascript" src="js/jquery.debouncedresize.js"></script>
<script type="text/javascript" src="js/easyResponsiveTabs.js"></script>
<script type="text/javascript" src="js/lightbox.min.js"></script>
<script type="text/javascript" src="js/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="js/jquery.mb.YTPlayer.js"></script>
<script type="text/javascript" src="js/jquery.countdown.min.js"></script>
<script type="text/javascript" src="js/isotope.pkgd.min.js"></script>
<script type="text/javascript" src="js/masonry.pkgd.min.js"></script>
<script type="text/javascript" src="js/imagesloaded.pkgd.min.js"></script>
<script type="text/javascript" src="js/portfolio.js"></script>
<script type="text/javascript" src="js/blog-masonry.js"></script>
<script type="text/javascript" src="js/masonry.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
</body>
</html>