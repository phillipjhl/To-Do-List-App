// Creating date string

function getDate() {
    let d = new Date();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = d.getDate();

    let fullDate = `${months[d.getMonth()]} ${date}, ${d.getFullYear()}`

    return fullDate; // Returns string
}

export default getDate;