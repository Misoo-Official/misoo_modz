document.addEventListener('DOMContentLoaded', () => {
    // Data Aplikasi Lengkap
    const apps = [
        // Aplikasi Populer
                      { 
            name: 'Twitter Mod', 
            image: 'images/Twitter.png', 
            category: 'sosial-media', 
            description: 'Enhance your Twitter experience with additional features.', 
            is_popular: true, 
            rating: 4.8, 
            size: '133 MB', 
            version: 'V 11.3.5',
            os: 'Android 7+', 
            update: '12-05-2025',
            download_link: 'https://sfl.gl/7KaK4K3o'
        },
        { 
            name: 'TikTok Mod Private', 
            image: 'images/TikTokPrivate.png', 
            category: 'sosial-media', 
            description: 'No watermark, HD video download, and no annoying ads.', 
            is_popular: true, 
            rating: 4.9, 
            size: '312 MB', 
            version: 'V 41.3.5 ARM7', 
            os: 'Android 8+', 
            update: '20-08-2025',
            download_link: 'https://sfl.gl/qM825Q'
        },
        { 
            name: 'TikTok Mod Platinum', 
            image: 'images/TikTokPlatinum.png', 
            category: 'sosial-media', 
            description: 'No watermark, HD video download, and no annoying ads.', 
            is_popular: true, 
            rating: 4.9, 
            size: '204 MB', 
            version: 'V 41.3.5 ARM7', 
            os: 'Android 8+', 
            update: '20-08-2025',
            download_link: 'https://sfl.gl/a7PF8NNY'
        },

        { 
            name: 'CapCut Mod', 
            image: 'images/CapCut.png', 
            category: 'tools', 
            description: 'Video editor with premium features without watermark and locked effects.', 
            is_popular: true, 
            rating: 4.7, 
            size: '267 MB', 
            version: 'V 15.1.0', 
            os: 'Android 9+', 
            update: '04-08-2025',
            download_link: 'https://sfl.gl/C8lK'
        },
        { 
            name: 'Spotify Premium', 
            image: 'images/Spotify.png', 
            category: 'sosial-media', 
            description: 'Listen to music without ads, skip unlimited songs.', 
            is_popular: true, 
            rating: 4.6, 
            size: '108 MB', 
            version: 'V 9.0.72', 
            os: 'Android 6+', 
            update: '08-08-2025',
            download_link: 'https://sfl.gl/OoM7lTQp'
        },

        // Aplikasi Lainnya
                        { 
            name: 'Instagram Clone Mod', 
            image: 'images/Instagram.png', 
            category: 'sosial-media', 
            description: 'Complete privacy features, no ads, and can download photos/videos.', 
            rating: 4.5, 
            size: '132 MB', 
            version: 'v 12.77', 
            os: 'Android 7+', 
            update: '07-08-2025',
            download_link: 'https://sfl.gl/fVbJk65'
        },
        { 
            name: 'WhatsApp Plus', 
            image: 'images/Wa.png', 
            category: 'sosial-media', 
            description: 'Latest WhatsApp Mod with free premium features: send large files, change themes, hide blue ticks, anti-delete messages, and new stickers. Updated weekly!', 
            rating: 4.3, 
            size: '103 MB', 
            version: 'V 22.35', 
            os: 'Android 5+', 
            update: '01-08-2025',
            download_link: 'https://sfl.gl/4HE9I'
        },
        { 
            name: 'Clash of Clans Mod', 
            image: 'images/COC.png', 
            category: 'game', 
            description: 'Unlock unlimited resources, troops, and premium features for an enhanced Clash of Clans gameplay.', 
            rating: 4.6, 
            size: '353 MB', 
            version: 'V 17.360.20', 
            os: 'Android 8+', 
            update: '07-08-2025',
            download_link: 'https://sfl.gl/TwgVne7'
        },

{ 
    name: 'Beach Buggy Racing Mod', 
    image: 'images/BB.png', 
    category: 'game', 
    description: 'Race across fun tracks with unlimited coins, unlocked cars, and enhanced performance in Beach Buggy Racing.', 
    rating: 4.5, 
    size: '102 MB', 
    version: 'V 2025.07.23', 
    os: 'Android 5+', 
    update: '23-07-2025',
    download_link: 'https://sfl.gl/7IhJ'
},
        { 
            name: 'YouTube Vanced', 
            image: 'images/YouTubeVanced.png', 
            category: 'tools', 
            description: 'Watch YouTube Vanched + micro G without ads, background play, and more.', 
            rating: 4.8, 
            size: '182 MB', 
            version: 'V 19.16.39', 
            os: 'Android 6+', 
            update: '16-07-2025',
            download_link: 'https://sfl.gl/rkgw7'
        },
        { 
            name: 'Minecraft Mod', 
            image: 'images/Minecraft.png', 
            category: 'game', 
            description: 'Unlimited materials and all premium items unlocked.', 
            rating: 4.6, 
            size: '336 MB', 
            version: 'v1.21.81', 
            os: 'Android 8+', 
            update: '08-07-2025',
            download_link: 'https://sfl.gl/JLTu'
        },
        { 
            name: 'KineMaster Pro', 
            image: 'images/KineMaster.png', 
            category: 'tools', 
            description: 'Video editor with premium features without watermark.', 
            rating: 4.7, 
            size: '129 MB', 
            version: 'V 7.7.6.35288', 
            os: 'Android 9+', 
            update: '02-08-2025',
            download_link: 'https://sfl.gl/gxrbQ'
        },

    ];

    // Elemen DOM
    const appGrid = document.getElementById('app-grid');
    const appIconsContainer = document.getElementById('app-icons-container');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const searchBar = document.getElementById('search-bar');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebar-close');
    const overlay = document.getElementById('overlay');
    const headerSearchIcon = document.getElementById('header-search-icon');
    const searchBarContainer = document.getElementById('search-bar-container');
    const searchCloseIcon = document.getElementById('search-close-icon');

    // Fungsi untuk membuat bintang
    function createStarRating(rating) {
        const starContainer = document.createElement('div');
        starContainer.className = 'rating-stars';
        
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        let starHTML = '';
        for (let i = 0; i < fullStars; i++) starHTML += '<i class="fas fa-star full"></i>';
        if (halfStar) starHTML += '<i class="fas fa-star-half-alt half"></i>';
        for (let i = 0; i < emptyStars; i++) starHTML += '<i class="far fa-star empty"></i>';

        starContainer.innerHTML = starHTML;
        return starContainer.outerHTML;
    }

    // Fungsi untuk merender card aplikasi
    function renderApps(filteredApps) {
        if (!appGrid) return;
        appGrid.innerHTML = '';
        filteredApps.forEach(app => {
            const appCard = document.createElement('div');
            appCard.className = 'app-card';
            appCard.dataset.appName = app.name; // Simpan nama aplikasi di dataset
            appCard.innerHTML = `
                <img src="${app.image}" alt="Logo ${app.name}" class="app-card-image">
                <div class="app-card-content">
                    <h4>${app.name}</h4>
                    <div class="rating-container">
                        ${createStarRating(app.rating)}
                        <span class="rating-number">${app.rating}</span>
                    </div>
                    <p>${app.description}</p>
                    <a href="app-detail.html?app=${encodeURIComponent(app.name)}" class="download-btn">Download</a>
                </div>
            `;
            appGrid.appendChild(appCard);
        });
    }

    // Fungsi untuk merender ikon aplikasi
    function renderAppIcons(apps) {
        if (!appIconsContainer) return;
        appIconsContainer.innerHTML = '';
        apps.forEach(app => {
            const appIconWrapper = document.createElement('a'); // Bungkus ikon dengan <a>
            appIconWrapper.href = `app-detail.html?app=${encodeURIComponent(app.name)}`; // Tambahkan tautan
            appIconWrapper.innerHTML = `
                <img class="app-icon" src="${app.image}" alt="Ikon ${app.name}">
                <span class="app-icon-label">${app.name}</span>
            `;
            appIconsContainer.appendChild(appIconWrapper);
        });
    }

    // Fungsi untuk menggulir ke aplikasi yang ditemukan
    function scrollToApp(appName) {
        const appCard = document.querySelector(`.app-card[data-app-name="${appName}"]`);
        if (appCard) {
            appCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            appCard.style.boxShadow = '0 0 15px 5px rgba(0, 123, 255, 0.5)';
            setTimeout(() => {
                appCard.style.boxShadow = 'var(--box-shadow)';
            }, 1500);
        }
    }

    // Render semua aplikasi saat halaman dimuat
    if (appGrid) {
        renderApps(apps);
    }
    if (appIconsContainer) {
        renderAppIcons(apps);
    }
    
    // Fungsionalitas Halaman Detail
    if (document.body.classList.contains('app-detail-page')) {
        const params = new URLSearchParams(window.location.search);
        const appName = params.get('app');
        const app = apps.find(a => a.name === appName);

        if (app) {
            document.getElementById('page-title').innerText = `${app.name} - Misoo Modz`;
            document.getElementById('app-logo').src = app.image;
            document.getElementById('app-logo').alt = app.name;
            document.getElementById('app-name').innerText = app.name;
            document.getElementById('app-description').innerText = app.description;
            document.getElementById('app-size').innerText = app.size;
            document.getElementById('app-version').innerText = app.version;
            document.getElementById('app-os').innerText = app.os;
            document.getElementById('app-update').innerText = app.update;
            
            const starContainer = document.getElementById('app-rating');
            starContainer.innerHTML = createStarRating(app.rating);
            
            const downloadBtn = document.getElementById('download-button');
            downloadBtn.href = app.download_link; 
        } else {
            document.querySelector('main').innerHTML = '<div class="container"><h2 style="text-align:center; padding: 50px;">Aplikasi tidak ditemukan!</h2></div>';
        }
    }
    
    // Event listener untuk tombol kategori
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                let filteredApps;
                if (category === 'all') {
                    filteredApps = apps;
                } else if (category === 'populer') {
                    filteredApps = apps.filter(app => app.is_popular);
                } else {
                    filteredApps = apps.filter(app => app.category === category);
                }
                
                renderApps(filteredApps);
            });
        });
    }

    // Event listener untuk search bar
    if (searchBar) {
        searchBar.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredApps = apps.filter(app => 
                app.name.toLowerCase().includes(searchTerm) ||
                app.description.toLowerCase().includes(searchTerm)
            );
            
            if (searchTerm === '') {
                renderApps(apps);
            } else {
                renderApps(filteredApps);
            }

            if (filteredApps.length === 1) {
                scrollToApp(filteredApps[0].name);
            }
        });
    }
    
    // Fungsionalitas Sidebar
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.style.display = 'block';
            document.body.classList.add('no-scroll');
        });

        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.style.display = 'none';
            document.body.classList.remove('no-scroll');
        });
        
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.style.display = 'none';
            document.body.classList.remove('no-scroll');
        });
    }
    
    // Fungsionalitas Search Header
    if (headerSearchIcon) {
        headerSearchIcon.addEventListener('click', () => {
            searchBarContainer.classList.add('active');
            searchBar.focus();
            document.body.classList.add('no-scroll');
        });
        
        searchCloseIcon.addEventListener('click', () => {
            searchBarContainer.classList.remove('active');
            searchBar.value = '';
            // Hanya render ulang jika berada di halaman utama
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                renderApps(apps); 
                renderAppIcons(apps); // Panggil lagi render ikon
            }
            document.body.classList.remove('no-scroll');
        });
    }
});
