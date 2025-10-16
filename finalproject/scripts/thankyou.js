const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);



document.querySelector('#results').innerHTML =`
    <div class="thankyou-box">
        <h2>Thank you for joining, ${myInfo.get('first')} ${myInfo.get('last')}!</h2>
        <p><strong>Age:</strong> ${myInfo.get('age')}</p>
        <p><strong>Email Address:</strong> ${myInfo.get('email')}</p>
        <p><strong>Mobile Phone Number:</strong> ${myInfo.get('mobile')}</p>
        <p><strong>Organization Name:</strong> ${myInfo.get('ogrname')}</p>
        <p><strong>Description:</strong> ${myInfo.get('description')}</p>
    </div>
`;