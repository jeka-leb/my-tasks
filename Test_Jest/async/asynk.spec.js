const Ajax = require('./asynk');

describe('Tes Ajax: echo method', () => {
    test('shall return data', async () => {
        const result = await Ajax.echo('Some data');
        expect(result).toBe('Some data')
    })

    test('shall return promise with value', () => {
        return Ajax.echo('Some data').then(data => {
            expect(data).toBe('Some data')
        })
    })

    test('shall catch error with promise', () => {
        return Ajax.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

    test('shall catch error with promise', async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('No data has been recieved')
        }
    })
})