/****************************************************************
	Website: subratadhal.com
	Name: fadeSlider
	Author: Subrata Dhal
	version: 1.0
	Date: 12/06/2017
******************************************************************/
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($,undefined) {
    'use strict';
    var defaults = {
        autostart : false,
        duration : 6000,
        bullet: false,
        bulletthumb: false,
        buttons: false,
        description: false,
        effets: 'all',
        mousehoverpause: false
    };
    var global = {
        counter:0,
        list:0,
        hei:0
    };
    function fadeslider(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, global, options);
        var c=0,m = [],a = [],t =  0; 
        $(element).find("img").each(function(i,e){
            m.push($(e).attr('src'));
            a.push($(e).data('content')? $(e).data('content') : "" );
        });
        this.options.list = m.length;
        this.options.oldcounter = this.options.list;
        this.init($(element),m,a); 
        function cr(){
            $(element).find('ul').height('auto');
        }
        $(window).resize(cr);
     }
    fadeslider.prototype.init = function (that,m,a) {
        var _ = this;
        if(_.options.buttons){
            _.createbuttons(that);
        }
        if(_.options.bullet){
            _.createbullets(that);
        }
        if(_.options.description){
            _.createdescription(that,a);
        }
        _.control(that,m);  
        _.callCycle(that);
    };
    fadeslider.prototype.rb = function(that,v) {
        setTimeout(function(){
            if(v === 'dn' ){
                that.find('.next').removeClass('clicked');
            }else if(v === 'dp'){
                that.find('.prev').removeClass('clicked');
            }else if(v === 'db'){
                that.find('.sl-bullets').removeClass('clicked');
            }
        },1000);
    };
    fadeslider.prototype.control = function(that,m) {
        var _ = this;
        that.find('.next').on('click',function(){
            if(!$(this).hasClass('clicked')){
                _.next(that);
                $(this).addClass('clicked');
            }
            var v = 'dn';
            _.rb(that,v);
        });
        that.find('.prev').on('click',function(){
            if(!$(this).hasClass('clicked')){
                _.prev(that);
                $(this).addClass('clicked');
            }
            var v = 'dp';
            _.rb(that,v);
        });
        that.find('.sl-bullets a').on('click',function(){
             if(!$(this).parent().hasClass('clicked')){
                $(this).parent().addClass('clicked');
               _.options.counter = $(this).index(); 
               _.bulletsClick(that);
            }
            var v = 'db';
            _.rb(that,v);
        });
        if(_.options.mousehoverpause){
            that.on('mouseover',function(){
               window.clearTimeout(_.t); 
            }); 
            that.on('mouseout',function(){
                _.callCycle(that);
            });
        }
        if(_.options.bulletthumb){
            that.find('.sl-bullets a').on('mouseover',function(){
                if($(this).hasClass('bthumb')){
                    $(this).find('span').fadeIn();
                }else{
                    var i = $(this).index();
                    var src = m[i];
                    $(this).addClass('bthumb').append('<span><img src=" '+src+' "/></span>');
                }
            });
            that.find('.sl-bullets a').on('mouseout',function(){
                $(this).find('span').fadeOut();
            });
        }
    };
    fadeslider.prototype.prev = function(that) {
        var _ = this;
        var o = this.options.counter;
        o  =  o === 0 ? (o=this.options.list -1) : o-1;
        this.options.counter = o;
        _.call(that);
    };
    fadeslider.prototype.next = function(that) {
        var _ = this;
        var o = this.options.counter;
        o  =  o === (this.options.list -1) ? 0 : o+1;
        this.options.counter = o;
        _.call(that); 
    };
    fadeslider.prototype.cycle = function(that) {
        var _ = this;
        clearInterval(_.t);
        _.t = setInterval(function () {
            _.next(that);
            that.find('.sl-bullets a span').fadeOut();
        }, _.options.duration); 
    };
    fadeslider.prototype.call = function(that) {
       var _ = this; 
       _.effects(that);
       window.clearTimeout(_.t);
       _.callCycle(that);
       _.bulletsActive(that);
       if(_.options.description){_.applyDesc(that);}
    };  
    fadeslider.prototype.effects = function(that) {
        var _ = this; 
        if(this.options.effets === 'all'){
            switch(Math.floor(Math.random() * 6) + 1) {
            case 1:
                _.fade(that);
                break;
            case 2:
                _.slideFromLeft(that);
                break;
            case 3:
                _.slideFromRight(that);
                break;
            case 4:
                _.slideFromTop(that);
                break;
            case 5:
                _.slideFromBottom(that);
                break;    
            default:
                _.fade(that);
            }
        }else{
            if(this.options.effets === 'slideFromLeft'){
                _.slideFromLeft(that);
            }else if(this.options.effets === 'slideFromRight'){
                _.slideFromRight(that);
            }else if(this.options.effets === 'slideFromTop'){    
                _.slideFromTop(that);
            }else if(this.options.effets === 'slideFromBottom'){
                _.slideFromBottom(that);  
            }else{
                _.fade(that);
            }
        }
        
    }; 
    fadeslider.prototype.slideFromBottom = function(that) {
        var oc = this.options.counter;
        var h = that.innerHeight();
        that.find('li').each(function(){
            if($(this).is(':visible')){
                $(this).addClass('currentbl');
            }
        });
        $('.currentbl').parent().height(h);
        $('.currentbl').css({position:'absolute',top:0}).animate({top:-h+'px'},500);
        that.find('li').eq(oc).show().css({position:'relative',top:h}).animate({top:0+'px'},500);
        setTimeout(function(){
            $('.currentbl').hide().css({position:'relative',top:0});
            that.find('li').removeClass('currentbl');
        },550);
    };
    fadeslider.prototype.slideFromTop = function(that) {
        var oc = this.options.counter;
        var h = that.innerHeight();
        that.find('li').each(function(){
            if($(this).is(':visible')){
                $(this).addClass('currenttl');
            }
        });
        $('.currenttl').parent().height(h);
        $('.currenttl').css({position:'absolute',top:0}).animate({top:h+'px'},500);
        that.find('li').eq(oc).show().css({position:'relative',top:-h}).animate({top:0+'px'},500);
        setTimeout(function(){
            $('.currenttl').hide().css({position:'relative',top:0});
            that.find('li').removeClass('currenttl');
        },550);
    };
    fadeslider.prototype.slideFromRight = function(that) {
        var oc = this.options.counter;
        var w = that.innerWidth();
        var h = that.innerHeight();
        that.find('li').each(function(){
            if($(this).is(':visible')){
                $(this).addClass('currentrl');
            }
        });
        $('.currentrl').parent().height(h);
        $('.currentrl').css({position:'absolute',top:0}).animate({left:-w+'px'},500);
        that.find('li').eq(oc).show().css({position:'relative',top:0,left:w+'px'}).animate({left:0+'px'},500);
        setTimeout(function(){
         $('.currentrl').hide().css({position:'relative',top:0,left:0});
         that.find('li').removeClass('currentrl');
        },550);
    };
    fadeslider.prototype.slideFromLeft = function(that) {
        var oc = this.options.counter;
        var w = that.innerWidth();
        var h = that.innerHeight();
        that.find('li').each(function(){
            if($(this).is(':visible')){
                $(this).addClass('currentcl');
            }
        });
        $('.currentcl').parent().height(h);
        $('.currentcl').css({position:'absolute',top:0}).animate({right:-w+'px'},500);
        that.find('li').eq(oc).show().css({position:'relative',top:0,right:w+'px'}).animate({right:0+'px'},500);
        setTimeout(function(){
         $('.currentcl').hide().css({position:'relative',top:0,right:'auto'});
         that.find('li').removeClass('currentcl');
        },550);
    };
    fadeslider.prototype.fade = function(that) {
        var oc = this.options.counter;
        var h = that.innerHeight();
        that.find('ul').height(h);
        that.find('li').css({position:'absolute'}).fadeOut(500);
        that.find('li').eq(oc).css({position:'relative'}).fadeIn(400);
        setTimeout(function(){
         that.find('li').eq(oc).css({position:'relative'});
        },400);
        setTimeout(function(){
         that.find('li').css({position:'relative'});
        },550);
    };
    fadeslider.prototype.callCycle = function(that) { 
        var _ = this;
        if(_.options.autostart){
           _.cycle(that);
        }
    };
    fadeslider.prototype.createbuttons = function(that) { 
        var html = '<div class="sl-buttons"><div class="prev"></div><div class="next"></div></div>';
        that.append(html);
    };
    fadeslider.prototype.createbullets = function(that) {
        var w,p,d = '',oc = this.options.counter;
        for(var i = 0; i<this.options.list; i++){
            p  =  oc === i ? "class='active'" : '';
            d += '<a '+p+'></a>';
        };
        var html = '<div class="sl-bullets">' + d + '</div>';
        that.append(html);
        w=that.find('.sl-bullets').innerWidth();
        that.find('.sl-bullets').css({marginLeft:-(w/2)+'px'});
    };
    fadeslider.prototype.bulletsActive = function(that) {
        that.find('.sl-bullets').children().removeClass('active');
        that.find('.sl-bullets').children().eq(this.options.counter).addClass('active');
    };
    fadeslider.prototype.bulletsClick = function(that) {
        var _ = this;
        _.call(that);
    };
    fadeslider.prototype.createdescription = function(that,a) {
        var d='',_ = this;
        for(var i = 0; i<a.length; i++){
            d += '<p>'+a[i]+'</p>';
        };
        var html = '<div class="slider-desciption"><div class="slider-content">'+d+'</div></div>';
        that.append(html);
        _.applyDesc(that);
    };
    fadeslider.prototype.applyDesc = function(that) {
        that.find('.slider-content').children().hide();
        that.find('.slider-content').children().eq(this.options.counter).fadeIn();
    };
    $.fn.fadeslider = function (options) {
        return this.each(function () {   
            if (!$.data(this, "fadeslider")) {
                $.data(this, "fadeslider", new fadeslider(this, options));
            }
            
        });
    }
}));