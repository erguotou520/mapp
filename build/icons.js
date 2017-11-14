var svg2png = require('svg2png')
var fs = require('fs')
var path = require('path')
var toIco = require('to-ico')

var sizeList = [
  {
    width: 512,
    name: 'android-chrome-512x512.png'
  }, {
    width: 270,
    name: 'mstile-150x150.png'
  }, {
    width: 192,
    name: 'android-chrome-192x192.png'
  }, {
    width: 144,
    name: 'msapplication-icon-144x144.png'
  }, {
    width: 32,
    name: 'favicon-32x32.png'
  }, {
    width: 16,
    name: 'favicon-16x16.png'
  }
]
var iosList = [
  {
    width: 180,
    name: 'apple-touch-icon-180x180.png'
  }, {
    width: 180,
    name: 'apple-touch-icon.png'
  }, {
    width: 152,
    name: 'apple-touch-icon-152x152.png'
  }, {
    width: 120,
    name: 'apple-touch-icon-120x120.png'
  }, {
    width: 76,
    name: 'apple-touch-icon-76x76.png'
  }, {
    width: 60,
    name: 'apple-touch-icon-60x60.png'
  }
]
var finished = 0

function getPath (imagePath) {
  return path.join(__dirname, '../static/img/icons/' + imagePath)
}

function generateIcons (svgString, list) {
  list.forEach(function (task) {
    svg2png(svgString, { width: task.width, height: task.width }).then(function (pngBuff) {
      fs.writeFile(getPath(task.name), pngBuff, { encode: 'utf8' }, function (error) {
        if (error) {
          console.error('file:' + task.name + ' save failed: ' + error)
        } else {
          console.log('file:' + task.name + ' converted. ')
          finished++
          if (finished === sizeList.length + iosList.length) {
            toIco([
              fs.readFileSync(getPath('favicon-16x16.png')),
              fs.readFileSync(getPath('favicon-32x32.png'))
            ]).then(function(icoBuff) {
              fs.writeFile(getPath('favicon.ico'), icoBuff, function (ibe) {
                if (ibe) {
                  console.error('save favicon.ico failed: ' + ibe)
                } else {
                  console.log('favicon.ico saved.\ntask done.')
                }
              })
            }).catch(function (ie) {
              console.error('convert favicon.ico failed: ' + ie)
            })
          }
        }
      })
    }).catch(function (e) {
      console.error('file:' + task.name + ' convert failed: ' + e)
    })
  })
}


fs.readFile(getPath('safari-pinned-tab.svg'), 'utf8', function (err, svg) {
  if (err) {
    throw err
  }
  var whiteBGSvg = svg.replace(/<svg(.*?)>/,'<svg$1 style="background-color:#ffffff;">')
  generateIcons(svg, sizeList)
  generateIcons(whiteBGSvg, iosList)
})
