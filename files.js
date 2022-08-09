const fs = require('fs').promises;

fs.readdir('./allUsers').then(dirs => {
    for (const dir of dirs) {
        fs.readdir(`./allUsers/${dir}`).then(files => {
                for (const file of files) {
                    fs.readFile(`./allUsers/${dir}/${file}`).then(data => {
                        if (data.includes('gender:\'female\'')) {
                            fs.rename(`./allUsers/${dir}/${file}`, `./allUsers/girls/${file}`).catch(e=>{
                                console.log(e)})
                        } else if (data.includes('gender:\'male\'')) {
                            fs.rename(`./allUsers/${dir}/${file}`, `./allUsers/boys/${file}`).catch(e=>{
                                console.log(e)})
                        } else {
                            console.log('gender is not defined')
                        }
                    })
                }
            }
        )
    }

})
