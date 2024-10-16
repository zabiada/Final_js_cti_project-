document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        if (!nameInput.value.trim()) {
            showError(nameInput, 'Please enter your name.');
            isValid = false;
        } else {
            showSuccess(nameInput);
        }

        if (!emailInput.value.trim()) {
            showError(emailInput, 'Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        if (phoneInput.value.trim() && !isValidPhone(phoneInput.value)) {
            showError(phoneInput, 'Please enter a valid phone number.');
            isValid = false;
        } else {
            showSuccess(phoneInput);
        }

        if (!messageInput.value.trim()) {
            showError(messageInput, 'Please enter your message.');
            isValid = false;
        } else {
            showSuccess(messageInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.classList.add('was-validated');
        const feedback = formControl.querySelector('.invalid-feedback');
        feedback.textContent = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('was-validated');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhone(phone) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(String(phone));
    }

    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌓';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.fontSize = '20px';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
//listing part code 
 // Sample property data
 const properties = [
    {
        id: 1,
        title: "Luxurious Beachfront Villa",
        price: 1500000,
        location: "Malibu, CA",
        type: "house",
        bedrooms: 5,
        bathrooms: 4,
        area: 4500,
        image: "https://picsum.photos/seed/prop1/400/300",
        amenities: ["pool", "gym", "parking"],
        date: "2023-05-01",
        lat: 34.0259,
        lng: -118.7798
    },
    {
        id: 2,
        title: "Modern Downtown Apartment",
        price: 750000,
        location: "New York, NY",
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        image: "https://picsum.photos/seed/prop2/400/300",
        amenities: ["gym", "parking"],
        date: "2023-04-15",
        lat: 40.7128,
        lng: -74.0060
    },
    {
        id: 3,
        title: "Spacious Family Home",
        price: 950000,
        location: "Austin, TX",
        type: "house",
        bedrooms: 4,
        bathrooms: 3,
        area: 3000,
        image: "https://picsum.photos/seed/prop3/400/300",
        amenities: ["pool", "parking"],
        date: "2023-04-28",
        lat: 30.2672,
        lng: -97.7431
    },
    {
        id: 4,
        title: "Charming Studio in Historic District",
        price: 350000,
        location: "Boston, MA",
        type: "apartment",
        bedrooms: 1,
        bathrooms: 1,
        area: 600,
        image: "https://picsum.photos/seed/prop4/400/300",
        amenities: [],
        date: "2023-05-05",
        lat: 42.3601,
        lng: -71.0589
    },
    {
        id: 5,
        title: "Elegant Penthouse with City Views",
        price: 2000000,
        location: "Chicago, IL",
        type: "apartment",
        bedrooms: 3,
        bathrooms: 3,
        area: 2800,
        image: "https://picsum.photos/seed/prop5/400/300",
        amenities: ["gym", "parking"],
        date: "2023-04-20",
        lat: 41.8781,
        lng: -87.6298
    },
    {
        id: 6,
        title: "Cozy Mountain Retreat",
        price: 600000,
        location: "Aspen, CO",
        type: "house",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        image: "https://picsum.photos/seed/prop6/400/300",
        amenities: ["parking"],
        date: "2023-05-10",
        lat: 39.1911,
        lng: -106.8175
    }
];

function renderProperties(propertiesArray) {
    const listingsContainer = document.getElementById('propertyListings');
    listingsContainer.innerHTML = '';

    propertiesArray.forEach(property => {
        const propertyCard = `
            <div class="col">
                <div class="card h-100">
                    <img src="${property.image}" class="card-img-top property-image" alt="${property.title}">
                    <div class="card-body">
                        <h5 class="card-title">${property.title}</h5>
                        <p class="card-text">
                            <strong>$${property.price.toLocaleString()}</strong><br>
                            ${property.location}<br>
                            ${property.bedrooms} bed | ${property.bathrooms} bath | ${property.area} sq ft
                        </p>
                        <div class="d-flex flex-wrap gap-1 mb-2">
                            ${property.amenities.map(amenity => `<span class="badge bg-secondary badge-custom">${amenity}</span>`).join('')}
                        </div>
                        <a href="property-details.html" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;
        listingsContainer.innerHTML += propertyCard;
    });
}

function initMap() {
    const map = L.map('map').setView([39.8283, -98.5795], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    properties.forEach(property => {
        L.marker([property.lat, property.lng])
            .addTo(map)
            .bindPopup(`<b>${property.title}</b><br>$${property.price.toLocaleString()}`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProperties(properties);
    initMap();

    const gridViewBtn = document.getElementById('gridView');
    const listViewBtn = document.getElementById('listView');
    const propertyListings = document.getElementById('propertyListings');
    const sortOption = document.getElementById('sortOption');
    const filterForm = document.getElementById('filterForm');

    gridViewBtn.addEventListener('click', () => {
        propertyListings.classList.remove('row-cols-1');
        propertyListings.classList.add('row-cols-md-2', 'row-cols-lg-3');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
        propertyListings.classList.remove('row-cols-md-2', 'row-cols-lg-3');
        propertyListings.classList.add('row-cols-1');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });

    sortOption.addEventListener('change', () => {
        const sortedProperties = [...properties].sort((a, b) => {
            switch (sortOption.value) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'date-desc':
                    return new Date(b.date) - new Date(a.date);
                case 'date-asc':
                    return new Date(a.date) - new Date(b.date);
                default:
                    return 0;
            }
        });
        renderProperties(sortedProperties);
    });

    filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value.toLowerCase();
        const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
        const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
        const propertyType = document.getElementById('propertyType').value;
        const bedrooms = parseInt(document.getElementById('bedrooms').value) || 0;
        const amenities = ['pool', 'gym', 'parking'].filter(amenity => 
            document.getElementById(`${amenity}Check`).checked
        );

        const filteredProperties = properties.filter(property => 
            property.location.toLowerCase().includes(location) &&
            property.price >= minPrice &&
            property.price <= maxPrice &&
            (propertyType === '' || property.type === propertyType) &&
            property.bedrooms >= bedrooms &&
            amenities.every(amenity => property.amenities.includes(amenity))
        );

        renderProperties(filteredProperties);
    });

    // Add animation to property cards
    function animatePropertyCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
        });
    }

    // Call the animation function after rendering properties
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                animatePropertyCards();
            }
        });
    });

    observer.observe(propertyListings, { childList: true });

    // Add smooth scrolling to pagination links
    document.querySelectorAll('.pagination a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add a hover effect to the map markers
    function addMapMarkerHoverEffect() {
        const markers = document.querySelectorAll('.leaflet-marker-icon');
        markers.forEach(marker => {
            marker.addEventListener('mouseover', () => {
                marker.style.transform = 'scale(1.2)';
                marker.style.transition = 'transform 0.3s ease-in-out';
            });
            marker.addEventListener('mouseout', () => {
                marker.style.transform = 'scale(1)';
            });
        });
    }

    // Call the function after the map is initialized
    setTimeout(addMapMarkerHoverEffect, 1000);
});

// Add custom animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// property listting 
  // Sample property data (in a real scenario, this would be fetched from a server)
  const property = {
    id: 1,
    title: "Luxurious Beachfront Villa",
    price: 2500000,
    location: "Malibu, California",
    size: "5,000 sq ft",
    bedrooms: 5,
    bathrooms: 4,
    type: "Villa",
    description: "Experience the epitome of luxury living in this stunning beachfront villa. Boasting breathtaking ocean views, this property features an open-concept living area, gourmet kitchen, and a private infinity pool. The master suite offers a spa-like bathroom and a private balcony overlooking the Pacific. With direct beach access and top-of-the-line finishes throughout, this villa is the perfect retreat for those seeking the ultimate in coastal living.",
    images: [
        "https://picsum.photos/1200/800?random=1",
        "https://picsum.photos/1200/800?random=2",
        "https://picsum.photos/1200/800?random=3",
        "https://picsum.photos/1200/800?random=4"
    ],
    lat: 34.0259,
    lng: -118.7798
};

// Populate property details
document.getElementById('propertyTitle').textContent = property.title;
document.getElementById('propertyPrice').textContent = `$${property.price.toLocaleString()}`;
document.getElementById('propertyLocation').textContent = property.location;
document.getElementById('propertySize').textContent = property.size;
document.getElementById('propertyBedrooms').textContent = property.bedrooms;
document.getElementById('propertyBathrooms').textContent = property.bathrooms;
document.getElementById('propertyType').textContent = property.type;
document.getElementById('propertyDescription').textContent = property.description;

// Populate image gallery
const carouselInner = document.getElementById('carouselInner');
property.images.forEach((img, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item${index === 0 ? ' active' : ''}`;
    carouselItem.innerHTML = `<img src="${img}" class="d-block w-100 gallery-img" alt="Property Image ${index + 1}">`;
    carouselInner.appendChild(carouselItem);
});

// Initialize Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: property.lat, lng: property.lng },
        zoom: 15
    });
    new google.maps.Marker({
        position: { lat: property.lat, lng: property.lng },
        map: map,
        title: property.title
    });
}

// Call initMap when the Google Maps script is loaded
window.initMap = initMap;

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. An agent will contact you soon!');
    this.reset();
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.classList.add('btn', 'btn-outline-primary', 'position-fixed', 'bottom-0', 'end-0', 'm-3');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '☀️';
    } else {
        darkModeToggle.innerHTML = '🌙';
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
// Get property ID from URL
const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('id');

// Fetch property details (in a real scenario, this would be an API call)
function fetchPropertyDetails(id) {
// Simulating an API call with setTimeout
return new Promise((resolve) => {
setTimeout(() => {
    resolve(property); // Using the sample property data for now
}, 500);
});
}

// // Populate property details
// fetchPropertyDetails(propertyId).then(property => {
//     document.getElementById('propertyTitle').textContent = property.title;
//     document.getElementById('propertyPrice').textContent = `$${property.price.toLocaleString()}`;
//     document.getElementById('propertyLocation').textContent = property.location;
//     document.getElementById('propertySize').textContent = property.size;
//     document.getElementById('propertyBedrooms').textContent = property.bedrooms;
//     document.getElementById('propertyBathrooms').textContent = property.bathrooms;
//     document.getElementById('propertyType').textContent = property.type;
//     document.getElementById('propertyDescription').textContent = property.description;

