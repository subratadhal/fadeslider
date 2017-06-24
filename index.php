<?php $pageID = "jquery" ?>
<!doctype html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>fadeSlider</title>
        <meta name="author" content="Subrata Dhal">
        <meta name="desription" content="fadeSlider created with jquery and working with smooth effects">
        <meta name="keyword" content="jquery,jquery plugins,javascript plugins,jquery slider,slider">
        <meta name="robots" content="index,follow">
        <link rel="canonical" href="http://subratadhal.com/jquery/fadeslider/" />
        <?php include("../../portfoliostyle.php"); ?>
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/prism.css" rel="stylesheet" type="text/css"/>
    </head>
    <body> 
        <?php include("../../portfolioheader.php"); ?>    
        <main>
            <section class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <header class="page-heading mb20">
                            <h1>fadeSlider</h1>
                            <p>A simple svg line drawing and opacity animation demo.</p>
                        </header>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                       <div id="slider-div">
                    <div id="slider">
                        <ul>
                            <li><img src="images/image1.jpg" alt="The earth has music for those who listen. - George Santayana" data-content="The earth has music for those who listen. <span>- George Santayana</span>"/></li>
                            <li><img src="images/image2.jpg" alt="Every flower is a soul blossoming in nature. - Gerard de Nerval" data-content="Every <u>flower</u> is a soul blossoming in nature. <span>- Gerard de Nerval</span>"/></li>
                            <li><img src="images/image3.jpg" alt="When fortune calls, offer her a chair. - Yiddish Proverb"  data-content="When fortune calls, offer her a chair. <span>- Yiddish Proverb</span>"/></li>
                            <li><img src="images/image4.jpg" alt="Animals don't hate, and we're supposed to be better than them. - Elvis Presley"  data-content="<strong>Animals</strong> don't hate, and we're supposed to be better than them. <span>- Elvis Presley</span>"/></li>
                        </ul>
                    </div>
                </div>
                    </div>
                </div>
            </section>    
            <section class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <header class=" mt70">
                            <h2>Description</h2>
                        </header>
                        <article>
                            <p class="pad0">
                                fadeSlider.js is a jQuery plugin that creates a responsive slider. It supports all major browse. Multiple effects make the slider popular and eye cache. Only dependency is jQuery and all images with same size. Major difference to other slider is the size 7kb minified. Thumbs popup is the very effective feature for fadeSlider. Support options to make it fully customizable. Its caption support all types of html tag element and customizable by CSS. 
                            </p>
                        </article>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <header class=" mt70">
                            <h2>Features</h2>
                        </header>
                    </div>
                    <div class="col-xs-12 col-sm-6"> 
                    <article class="">
                            <ul class="feature fleft">
                                <li>Fully responsive <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>6 Effexts supported <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Random effects implemented <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Selection any single or all effets  <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Works in all major browsers for desktop and mobile  <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>7kb minified <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>included JavaScript animation <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Settings timeout durations <span class="glyphicon glyphicon-ok col-grn"></span></li>
                            </ul>
                        </article>
                    </div>
                    <div class="col-xs-12 col-sm-6"> 
                    <article class="">
                            <ul class="feature fleft">
                                <li>Multiple slideshows supported <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Manual and automatic start <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Other html-elements supported inside captions <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Visibility settings of next/prev controls <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Can be paused while hovering slideshow <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Supporte link with images wrapped <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Simple markup using unordered list <span class="glyphicon glyphicon-ok col-grn"></span></li>
                                <li>Bullets with thumb popup <span class="glyphicon glyphicon-ok col-grn"></span></li>
                            </ul>
                        </article>
                    </div>

                    <div class="col-xs-12">
                        <header class="mt70">
                            <h2>Usage</h2>
                        </header>
                    </div>
                    <div class="col-xs-12">
                        <header class="mt20">
                            <h3>1. Link files</h3>
                        </header>
                    </div>
                    <div class="col-xs-12"> 
                    <article class=" ">
                        <pre class="line-numbers">
                            <code class="language-html">
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt; &lt;/script&gt;
&lt;script src="fadeslider.min.js"&gt; &lt;/script&gt;
                            </code>
                        </pre> 
                    </article>
                    </div>
                    
                    <div class="col-xs-12">
                        <header class="mt20">
                            <h3>2. Add Markup</h3>
                        </header>
                    </div>
                    <div class="col-xs-12"> 
                    <article class="">
                        <pre class="line-numbers">
                            <code class="language-html">
&lt;ul id="slider"&gt;
    &lt;li&gt;&lt;img src="1.jpg" alt="" data-content=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="2.jpg" alt="" data-content=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="3.jpg" alt="" data-content=""&gt;&lt;/li&gt;
&lt;/ul&gt;
                            </code>
                        </pre>
                    </article>
                    </div>
                    
                    <div class="col-xs-12">
                        <header class="mt20">
                            <h3>3. Add CSS</h3>
                        </header>
                    </div>
                    <div class="col-xs-12"> 
                        <article class="">
                                <pre class="line-numbers">
                                    <code class="language-css">
&lt;link href="css/style.css" rel="stylesheet" type="text/css" /&gt;
                                    </code>
                                </pre>
                        </article>
                    </div>
                    
                    <div class="col-xs-12">
                        <header class="mt20">
                            <h3>4. Hook up the slideshow</h3>
                        </header>
                    </div>
                    <div class="col-xs-12"> 
                        <article class="">
                            <pre class="line-numbers">
                                <code class="language-html">
&lt;script&gt;
  $(document).ready(function() {
        $('#slider').fadeslider();
  });
&lt;/script&gt;
                                </code>
                            </pre>
                        </article>
                    </div>
                    <div class="col-xs-12">
                        <header class="mt20">
                            <h3>5. Options you can customize</h3>
                        </header>
                    </div>
                    <div class="col-xs-12"> 
                        <article class="">
                            <pre class="line-numbers">
                                <code class="language-html">
$('#slider').fadeslider({
        autostart : true,		//Start play slider automatically, true or false
        duration : 3000,		//Time between slider transitions(milliseconds)
        bullet: true,			//Show bullets true or false
        bulletthumb: true,		//Show bullet thumbs popup, true or false
        buttons: true,			//Show next and prevoius buttons, true or false
        description: true,		//Show caption of the image, true or false
        effets: 'all',			//Select effets single by name or all, default is all and others are slideFromLeft, slideFromRight, slideFromTop, slideFromBottom 
        mousehoverpause: false		//Pause when hovering slider, true or false
 });
                                </code>
                            </pre>
                        </article>
                    </div>
                    <div class="col-xs-12">
                        <header class="mt70">
                            <h2>Following are supported browser of fadeslider.js</h2>
                        </header>
                    </div>
                    <div class="col-xs-12"> 
                        <article class="">
                            <ul class="feature fleft">
                                <li>Firefox</li>
                                <li>Safari </li>
                                <li>Chrome</li>
                                <li>Opera</li>
                                <li>iOS Safari</li>
                                <li>iOS Chrome</li>
                                <li>Firefox Mobile</li>
                                <li>Android</li>
                            </ul>
                        </article>
                    </div>
                    
                    
                    
                    </div>
                </div>
            </section>
            <div class="github-link-container mt70">
                <a class="github-link" href="https://github.com/subratadhal/fadeslider" target="_blank">
                    Find in Github repo
                </a>
            </div>
        </main>
        <?php include("../../portfoliofooter.php"); ?>  
        <script src="js/fadeslider.js" type="text/javascript"></script>
        <script src="js/prism.js" type="text/javascript"></script>
        <script>
            $(document).ready(function() {
                 $('#slider').fadeslider({
                    autostart : true,
                    duration : 3000,
                    bullet: true,
                    bulletthumb: true,
                    buttons: true,
                    description: true,
                    effets: 'all',
                    mousehoverpause: false
                });
            });
        </script>
        <?php include('../../google-analytics.php') ?>
    </body>
</html>
