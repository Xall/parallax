window.addEvent('domready', function() {

    var one = $$('.parallax .one');
    var two = $$('.parallax .two');
    var parallax = $$('.parallax');

    var parallaxWidth = parallax.getProperty('width');
    var parallaxHeight = parallax.getProperty('height');

    var ref = parallax.getProperty('ref');
    if (ref == "window") {
        refWidth = window.getSize().x;
        refHeight = window.getSize().y;
    }else{
        refWidth = parallaxWidth;
        refHeight = parallaxHeight;
    };

    var parallaxPos = parallax.getPosition()[0];

    //item, width, height, dx, dy
    var workingArray = [[0],[0]];

    var imgQueryArray = $$('.parallax img');
    imgQueryArray.each(function(item,i){
        workingArray[i][0] = item;
        workingArray[i][1] = item.getProperty('width');
        workingArray[i][2] = item.getProperty('height');
        workingArray[i][3] = (parallaxWidth - workingArray[i][1]) / refWidth;
        workingArray[i][4] = (parallaxHeight - workingArray[i][2]) / refHeight;
    })

    window.addEvent('mousemove',function(event){
        var mouseX = event.page.x - parallaxPos.x;
        var mouseY = event.page.y - parallaxPos.y;

        if (mouseX > refWidth)
            mouseX = refWidth;
        if (mouseX < 0)
            mouseX = 0;
        if (mouseY > refHeight)
            mouseY = refHeight;
        if (mouseY < 0)
            mouseY = 0;

        for (var i = 0; i < workingArray.length; i++) {
                workingArray[i][0].setStyle('margin-left', workingArray[i][3] * mouseX);
                workingArray[i][0].setStyle('margin-top', workingArray[i][4] * mouseY);
            };
        });
});