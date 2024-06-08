document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const attendance = document.getElementById('attendance').value;
    const message = document.getElementById('message').value;

    console.log('Nama:', name);
    console.log('Alamat:', address);
    console.log('Kehadiran:', attendance);
    console.log('Pesan:', message);

    alert('Terima kasih atas konfirmasi Anda!');
    
    this.reset();
});
