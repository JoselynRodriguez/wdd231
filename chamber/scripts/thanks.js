const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);



document.querySelector('#results').innerHTML =`
    <div class="thankyou-box">
        <h2>Thank you for joining, ${myInfo.get('first')} ${myInfo.get('last')}!</h2>
        <p><strong>Organizational Title:</strong> ${myInfo.get('orgTitle')}</p>
        <p><strong>Email Address:</strong> ${myInfo.get('email')}</p>
        <p><strong>Mobile Phone Number:</strong> ${myInfo.get('mobile')}</p>
        <p><strong>Business Name:</strong> ${myInfo.get('organization')}</p>
        <p><strong>Membership Level:</strong> ${myInfo.get('membership')}</p>
        <p><strong>Description:</strong> ${myInfo.get('description')}</p>
    </div>
`;