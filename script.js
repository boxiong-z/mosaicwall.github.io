
window.addEventListener('DOMContentLoaded', (event) => {
    const uploadInput = document.getElementById('photoUpload');
    const photoWall = document.getElementById('photoWall');
    const maxFileSize = 5 * 1024 * 1024; // 5MB limit

    uploadInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file && file.size <= maxFileSize) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imgElement = document.createElement('img');
                imgElement.src = event.target.result;
                imgElement.alt = 'Uploaded Image';
                photoWall.appendChild(imgElement);
                alert('Photo uploaded successfully!');
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image smaller than 5MB.');
        }
    });

    photoWall.addEventListener('mouseover', function(event) {
        if (event.target.tagName === 'IMG') {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.style.display = 'block';
            imagePreview.style.left = event.pageX + 'px';
            imagePreview.style.top = event.pageY + 'px';
            imagePreview.innerHTML = '<img src="' + event.target.src + '" style="max-width: 300px; max-height: 300px;">';
        }
    });

    photoWall.addEventListener('mouseout', function(event) {
        if (event.target.tagName === 'IMG') {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.style.display = 'none';
        }
    });
});
