class Ajax  {
    static echo(data) {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error('No data has been recieved'))
                }
            }, 200)
        })
    }
}

module.exports = Ajax;