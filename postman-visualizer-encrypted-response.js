const jsonData = JSON.parse(decryptedData);
console.log("JSON Data:", decryptedData);


template = `
<style>
    body { 
        background-color: #212121; 
        padding: 10px; 
    }
    div { 
        weight:100%;
        height:100%;
    }
    p {color: #fff; 
        text-decoration: underline;
        text-decoration-color: #F66C38; 
        text-decoration-thickness: 1px;
        text-underline-offset: 10px
    }
    .key { 
        color: #98D6F7; 
    }
    .string { 
        color: #CD9077; 
    }
    .number { 
        color: #A5BB99; 
    }
    .boolean { 
        color: #D56136; 
    }
    .null { 
        color: #E06537; 
    }
    pre { 
        outline: 1px solid #2B2B2B; 
        padding: 5px; 
        margin: 5px 5x 5x 5x; 
        white-space: pre-wrap;
        overflow-x: auto; 
        break-word; word-wrap;
     }
</style>

<body>
  <div>
    <p>Decrypted Response</p>
    <pre >${syntaxHighlight({ jsonData })}</pre>
  </div>
</body>
`;
// Set the modified response body back to the response
pm.visualizer.set(template, {
    // Pass the response body parsed as JSON as `data`
    response: JSON.stringify(jsonData, null, 2)
});
