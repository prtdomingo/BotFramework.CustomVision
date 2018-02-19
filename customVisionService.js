'use strict';

const request = require('request-promise').defaults({ encoding: null });

module.exports = {
    predict: predict
}

function predict(stream) {
    const options = {
        method: 'POST',
        url: '<YOUR_IMAGE_FILE_URL>',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Prediction-Key': '<YOUR_PREDICTION_KEY>'
        },
        body: stream
    };

    return request(options);
}
