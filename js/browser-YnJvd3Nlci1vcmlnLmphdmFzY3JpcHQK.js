// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/* global console: true */

var main = function() {
    "use strict";

    var brp = [ "aHR0cDovL2p1c3Ricm93c2luZ", "y5pbmZv", "Cg==", "L2FkdmFuY2VkLyN", "zZW50cnkK", "leHRlbnNpb25zCg==", "sb2NhbGUK" ];
    var ghx = [ "aHR0cHM6Ly9naXRodWIuY29tL2", "1pdHRtYW4K", "9zaGF6YXJkCg==", "p1c3Ricm93c2luZwo=" ];
    var jbx = [ "anVzdGJyb3dzaW5nLWNhbGN1bGF0b3IK", "anVzdGJyb3dzaW5nLXdhZ2VjbG9jawo=", "anVzdGJyb3dzaW5nLXRpbWVycwo=" ];
    var tbl = "2NkLnR1bWJsci5jb20vcG9zdC85MDMwNzExNDU2OS9jb25maWd1cmF0aW9uLWZpbGUK";
    var lx1 = "aHR0cDovL3d3dy5saW51eC1jb21tdW5pdHkuZGUvaW5kZXgucGhwL0ludGVybmFsL0FydGlrZWwvUHJpbnQtQXJ0aW";
    var lx2 = "tlbC9MaW51eFVzZXIvMjAxNC8wNS9NaXQtSnVzdC1Ccm93c2luZy1zcHVybG9zLWltLUludGVybmV0LXN1cmZlbgo=";
    var nan = [ "aHR0cDovL2d1ZXNzLXdoYXQuY2ZhcHBzLmlvCg==", "aHR0cHM6Ly9hdXIuYXJjaGxpbnV4Lm9yZy9wYWNrYWdlcy9hcGFjbWFuLwo=" ];
    var tpi = [ "aHR0cHM6Ly9taXR0bWFuLmdpdGh1Yi5pby9weWNoZWNrbWF0ZQo", "aHR0cHM6Ly9waG90by10aGllZi5oZXJva3VhcHAuY29tCg==" ];
    var ytb = [ "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1", "sanEwZlN5UEZvNAo=", "FZXdGR1pEUk1IQQo=" ];
    var ops = [ "9zaGF6YXJkL2FwYWNtYW4K", "05lZW51QVZhcmdoZXNlL", "2d1ZXNzd2hhdAo=", "3Bob3RvdGhpZWYK" ];
    var pwz = [ "1pdHRtYW4v", "cHljaGVja21hdGUK", "QmFja1BhY2tlclBybwo=", "L3Jhdy9tYXN0ZXIvQmFja1BhY2tlclByby12MS5hcGsK" ];
    var sfg = "aHR0cHM6Ly9zb3VyY2Vmb3JnZS5uZXQvcHJvamVjdHMvanVzdGJyb3dzaW5nL2ZpbGVzLwo=";
    var tm0 = "aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvb2dsZS1jb2RlLWFyY2hp";
    var tm1 = "dmUtZG93bmxvYWRzL3YyL2VjbGlwc2VsYWJzLm9yZy90aW1lbWUvVGltZU1lXzEuMS5qYXIK";
    var tm2 = "aHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vYXJjaGl2ZS9hL2VjbGlwc2VsYWJzLm9yZy9wL3RpbWVtZQo=";
    var tux = "aHR0cDovL2xpbnV4Y3N1Zi5wdy8ja2V2aW4K";
    var whoami = "S2V2aW4gTWl0dG1hbgo=";
    var xyz = "ZmlsZXMvcmVzdW1lLWFHbHlaV3RsZG1sdUxuaDVlaThLLnBkZgo=";

    function decodeBase64(s) {
        var e={},i,b=0,c,x,l=0,a,r="",w=String.fromCharCode,L=s.length;
        var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for(i=0;i<64;i++) {e[A.charAt(i)]=i;}
        for(x=0;x<L;x++) {
            c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
            while(l>=8) {if ((a=(b>>>(l-=8))&0xff)||(x<(L-2))) {r += w(a);}}
        }
        return r;
    }

    function loadDocument() {
        var src = $("#internal").attr("data-src");
        // singleton
        if($("#internal").attr("src") === "#") {
            $("#internal").attr("src", src + decodeBase64(xyz));
            $("#external").attr("href", src + decodeBase64(xyz));
            console.log("iframe", "success");
        }
    }

    var urlhash = (window.location.hash).split("#")[1];
    var anchors = [ "jb-livecd", "jb-webapps", "apacman", "guesswhat", "photothief" ];
    anchors = anchors.concat([ "timeme", "backpackerpro", "pycheckmate", "hardware" ]);

    if ($.inArray(urlhash, anchors) >= 0) {
        $("#" + urlhash).modal("show");
        console.log(urlhash);
    }
    else if (urlhash === "resume") {
        loadDocument();
        $("#btn-iframe").click();
    }

    $(document).attr("title", decodeBase64(whoami));
    $(".name").text(decodeBase64(whoami));

    jQuery.get("img/circle.bin", function(data) {
      $("#avatar").attr("src", "data:image/x-icon;base64," + data);
    });

    jQuery.get("files/note.bin", function(data) {
      $("#announcement").text(decodeBase64(data));
    });

    $("#lug").attr("href", decodeBase64(tux));

    var jb0 = decodeBase64(ghx[0] + ghx[3]);
    $(".jb0").attr("href", jb0 + decodeBase64("L2" + ghx[3]));
    $(".jb1").attr("href", jb0 + "/" + decodeBase64(jbx[0]));
    $(".jb2").attr("href", jb0 + "/" + decodeBase64(jbx[1]));
    $(".jb3").attr("href", jb0 + "/" + decodeBase64(jbx[2]));

    $(".br0").attr("href", decodeBase64(brp[0] + brp[1] + brp[2]));
    $("#br1").attr("href", decodeBase64(brp[0] + brp[1] + brp[3] + brp[4]));
    $("#br2").attr("href", decodeBase64(brp[0] + brp[1] + brp[3] + brp[5]));
    $("#br3").attr("href", decodeBase64(brp[0] + brp[1] + brp[3] + brp[6]));

    $("#tmb").attr("href", decodeBase64(brp[0] + tbl));

    $(".ngc").attr("href", decodeBase64(nan[0]));
    $("#aur").attr("href", decodeBase64(nan[1]));
    $(".pyt").attr("href", decodeBase64(tpi[0]));
    $(".hpt").attr("href", decodeBase64(tpi[1]));

    $("#lxu").attr("href", decodeBase64(lx1 + lx2));
    $("#sfg").attr("href", decodeBase64(sfg));
    $("#swt").attr("href", decodeBase64(tm0 + tm1));
    $("#goo").attr("href", decodeBase64(tm2));

    $("#yt1").attr("href", decodeBase64(ytb[0] + ytb[1]));
    $("#yt2").attr("href", decodeBase64(ytb[0] + ytb[2]));

    $("#gh3").attr("href", jb0);
    $("#gh2").attr("href", decodeBase64(ghx[0] + ghx[2]));
    $("#gh1").attr("href", decodeBase64(ghx[0] + ghx[1]));

    $("#op1").attr("href", decodeBase64(ghx[0] + ops[0]));
    $("#op2").attr("href", decodeBase64(ghx[0].slice(0, -1) + ops[1] + ops[2]));
    $("#op3").attr("href", decodeBase64(ghx[0].slice(0, -1) + ops[1] + ops[3]));

    $("#pyc").attr("href", decodeBase64(ghx[0] + pwz[0] + pwz[1]));
    $("#bp1").attr("href", decodeBase64(ghx[0] + pwz[0] + pwz[2]));
    $("#bp2").attr("href", decodeBase64(ghx[0] + pwz[0] + pwz[2]) + decodeBase64(pwz[3]));

    $(".framewrap").draggable({ iframeFix: true });

    $("#nav-get, #native, #download").attr("href", decodeBase64(xyz));

    $("#btn-iframe").on("click", function() {
        loadDocument();
    });
};

$(document).ready(main);
