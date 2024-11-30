


let array = [
    {
        heading: "My Heading 1",
        text: "This is some text 1"
    },
    {
        heading: "My Heading 2",
        text: "This is some text 2"
    },
    {
        heading: "My Heading 3",
        text: "This is some text 3"
    },
]



array.forEach((item , i) => {
    bodys.innerHTML +=
    `
     <div class="my-card">
        <h1> ${item.heading} </h1>
        <p> ${item.text} </p>
     </div>
    `
})