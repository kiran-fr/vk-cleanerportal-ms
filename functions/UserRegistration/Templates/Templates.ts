// import './Email.css'

export const Templates = (event:any) => {
    return `
   
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .border {
            border: 10px solid red;
            padding: 20px;
        }

        .border1 {
            border: 10px solid greenyellow;
            padding: 20px;
        }
    </style>
</head>

<body>
    <h1>Welcome to Vrishkar Services,</h1>
    <p>Your registration completed successfully</p>
    <div class="border">
        <h1>This is red colour boxbox ${event.email}</h1>
    </div>
    <div class="border1">
        <h1>This is green colour box</h1>
    </div>
</body>
  `
}

