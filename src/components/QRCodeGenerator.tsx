// client/src/QRCodeGenerator.js

import * as React from 'react';
import axios from 'axios';
import {useState} from 'react';
import {useParams} from "react-router-dom";

interface QRCodeGeneratorProps {

}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = (props) => {
    const [text, setText] = useState('');
    const [qrCode, setQRCode] = useState();
    const {qrId} = useParams();

    const generateQRCode = async () => {
        // try {
        //     const response = await axios.get(`http://localhost:8080/generateQR/${text}`);
        //     // console.log('response',URL.createObjectURL(response.data))
        //     const blob = new Blob([response.data], { type: 'image/png' })
        //     const imageUrl = URL.createObjectURL(blob);
        //     setQRCode(imageUrl);
        // } catch (err) {
        //     console.error('Error generating QR code:', err);
        // }

        // await axios({
        //     method: 'get',
        //     url: `http://localhost:8080/generateQR/${text}`,
        //     responseType: 'arraybuffer', // Set the response type to arraybuffer
        // })
        //     .then((response) => {
        //         // Convert the received data to a Blob
        //         const blob = new Blob([response.data], { type: 'image/png' }); // Adjust 'type' based on your image type
        //
        //         // Generate a URL for the Blob object
        //         const imageUrl = URL.createObjectURL(blob);
        //         setQRCode(imageUrl);
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching image:', error);
        //     });


        const contact = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            phone: '1234567890',
            // Add more details as needed (address, organization, etc.)
        };

        await axios.post('http://localhost:8080/generateQR/', contact, {
            responseType: 'arraybuffer', // Specify the expected response type
        }).then((response) => {
                // console.log('QR Code Generated:', response.data.qrCode);
                // setQRCode(response.data.qrCode)
                // Here, you can handle the QR code response

                // Convert the received data to a Blob
                const blob = new Blob([response.data], { type: 'image/png' }); // Adjust 'type' based on your image type

                // Generate a URL for the Blob object
                const imageUrl = URL.createObjectURL(blob);
                // @ts-ignore
            setQRCode(imageUrl);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div>
            {/*{console.log(qrId)}*/}
            <h1>QR Code Generator</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qrCode && <img src={qrCode} alt="QR Code" />}
        </div>
    );
}

