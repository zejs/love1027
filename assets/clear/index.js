const fs = require('fs')
const path = require('path')

function readdir(prefix) {
    const dirs = fs.readdirSync(prefix)

    if (dirs.length) {
        dirs.forEach(dir => {
            let p = path.join(prefix, dir)
            if (fs.statSync(p).isDirectory()) {
                readdir(p)
            } else {
                console.log(p);
                if (p.startsWith('._')) {
                    console.log('[ 文件 ] >', p)
                }
            }
        })
    }
}

readdir(path.join(__dirname, '..'))