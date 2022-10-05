import twilio from 'twilio'

const accountSid = 'AC3b9a32e49b8cfb4e34366dxxxxxxxxxx';
const authToken = 'a12b10aedd46a986066493xxxxxxx';

const client = twilio(accountSid, authToken)

const numero = process.argv[ 2 ]
const mensaje = process.argv[ 3 ]

try {
    const message = await client.messages.create({
        body: mensaje,
        from: 'whatsapp:+141552xxxxx',
        to: `whatsapp:${numero}`
    })
    console.log(message)
} catch (error) {
    console.log(error)
}
