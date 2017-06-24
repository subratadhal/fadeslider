<h1>fadeSlider</h1>
<p>fadeSlider.js is a jQuery plugin that creates a responsive slider. It supports all major browse. Multiple effects make the slider popular and eye cache. Only dependency is jQuery and all images with same size. Major difference to other slider is the size 7kb minified. Thumbs popup is the very effective feature for fadeSlider. Support options to make it fully customizable. Its caption support all types of html tag element and customizable by CSS. 
</p>
</br>
</br>
<h2>Features</h2><br />
<ul class="feature">
    <li>Fully responsive <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>6 Effexts supported <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Random effects implemented <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Selection any single or all effets  <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Works in all major browsers for desktop and mobile  <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>7kb minified <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>included JavaScript animation <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Settings timeout durations <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Multiple slideshows supported <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Manual and automatic start <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Other html-elements supported inside captions <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Visibility settings of next/prev controls <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Can be paused while hovering slideshow <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Supporte link with images wrapped <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Simple markup using unordered list <span class="glyphicon glyphicon-ok col-grn"></span></li>
    <li>Bullets with thumb popup <span class="glyphicon glyphicon-ok col-grn"></span></li>
</ul>
<br />
<br />
<h2>Usage</h2><br />
<br />
<br />
<h3>Link files</h3>
<pre class="line-numbers">
<code class="language-html">
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt; &lt;/script&gt;
&lt;script src="fadeslider.min.js"&gt; &lt;/script&gt;
</code>
</pre> 
<br />
<br />
<h3>Add Markup</h3>
<pre class="line-numbers">
<code class="language-html">
&lt;ul id="slider"&gt;
    &lt;li&gt;&lt;img src="1.jpg" alt="" data-content=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="2.jpg" alt="" data-content=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="3.jpg" alt="" data-content=""&gt;&lt;/li&gt;
&lt;/ul&gt;
</code>
</pre>
<br />
<h3>Add CSS</h3>
<pre class="line-numbers">
<code class="language-css">
&lt;link href="css/style.css" rel="stylesheet" type="text/css" /&gt;
</code>
</pre>
<br />
<h3>Hook up the slideshow</h3>
<pre class="line-numbers">
<code class="language-html">
&lt;script&gt;
  $(document).ready(function() {
        $('#slider').fadeslider();
  });
&lt;/script&gt;
</code>
</pre>
<br />
<h3>Options you can customize</h3>
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
<br />
<br />
<h2>Following are supported browser of fadeslider.js</h2>
<br />
<br />
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
<br />
<br />
<p> Find the <a href="http://subratadhal.com/jquery/fadeslider/" target="_blank">Live Demo</a> url on <a href="http://subratadhal.com/" target="_blank">subratadhal.com</a></p>

