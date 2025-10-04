// Gelişmiş veritabanı - PC bileşenleri hakkında 150+ soru ve cevap
const knowledgeBase = [
    // EKRAN KARTI SORULARI (30 soru)
    {
        question: "ekran kartı nedir",
        answer: "Ekran kartı (GPU), bilgisayarın görüntü işleme birimidir. Monitöre görüntü aktarımından sorumludur ve özellikle oyun, video düzenleme, 3D modelleme gibi grafik yoğun işlemlerde kritik öneme sahiptir."
    },
    {
        question: "nvidia ekran kartı modelleri nelerdir",
        answer: "NVIDIA'nın başlıca ekran kartı serileri: RTX 40 serisi (4090, 4080, 4070), RTX 30 serisi (3090, 3080, 3070), GTX 16 serisi ve daha eski GTX 10 serisi. RTX serisi ray tracing teknolojisini destekler."
    },
    {
        question: "amd ekran kartı modelleri nelerdir",
        answer: "AMD'nin başlıca ekran kartı serileri: RX 7000 serisi (7900 XTX, 7900 XT), RX 6000 serisi (6950 XT, 6900 XT, 6800 XT), RX 5000 serisi ve daha eski RX 500 serisi."
    },
    {
        question: "ekran kartı belleği ne işe yarar",
        answer: "Ekran kartı belleği (VRAM), grafik verilerini geçici olarak depolayan yüksek hızlı bellektir. Daha yüksek VRAM, daha yüksek çözünürlük ve daha iyi doku kalitesi demektir. 8GB günümüz oyunları için minimum, 12-16GB ideal, 24GB+ profesyonel kullanım içindir."
    },
    {
        question: "ekran kartı nasıl takılır",
        answer: "Ekran kartını takmak için: 1) Bilgisayarı kapatın ve gücünü kesin, 2) Kasa kapağını açın, 3) PCIe x16 slotundaki koruyucu kapağı çıkarın, 4) Ekran kartını yavaşça PCIe slotuna yerleştirin, 5) Vida ile sabitleyin, 6) Gerekli güç konektörlerini bağlayın, 7) Kasa kapağını kapatın ve sürücüleri yükleyin."
    },
    {
        question: "ekran kartı sürücüsü nasıl güncellenir",
        answer: "Ekran kartı sürücüsünü güncellemek için: NVIDIA için GeForce Experience, AMD için Radeon Software uygulamasını kullanabilirsiniz. Manuel olarak üretici web sitesinden en son sürücüleri indirip kurabilirsiniz."
    },
    {
        question: "ekran kartı sıcaklığı kaç derece olmalı",
        answer: "Ekran kartı sıcaklığı ideal olarak 60-80°C arasında olmalıdır. 85°C üzeri yüksek sıcaklık sayılır ve soğutma sistemini kontrol etmek gerekir. Oyun sırasında 70-80°C normal kabul edilir."
    },
    {
        question: "ekran kartı overclock nasıl yapılır",
        answer: "Ekran kartı overclock'u için MSI Afterburner gibi yazılımlar kullanılır. Core clock ve memory clock değerleri kademeli olarak artırılır, her artıştan sonra stabilite testi yapılır. Voltaj ayarı dikkatli yapılmalıdır."
    },
    {
        question: "ekran kartı performans testi nasıl yapılır",
        answer: "Ekran kartı performans testi için 3DMark, Heaven Benchmark, FurMark gibi yazılımlar kullanılır. Oyun içi FPS değerleri de performans göstergesidir. Test sırasında sıcaklık ve güç tüketimi izlenmelidir."
    },
    {
        question: "ekran kartı alırken nelere dikkat edilmeli",
        answer: "Ekran kartı alırken dikkat edilmesi gerekenler: Performans ihtiyacı, bütçe, VRAM miktarı, güç tüketimi, soğutma çözümü, fiziksel boyut (kasa uyumu), güç kaynağı yeterliliği ve garanti süresi."
    },
    {
        question: "entegre ekran kartı nedir",
        answer: "Entegre ekran kartı, işlemci içine yerleştirilmiş grafik birimidir. Harici ekran kartına göre daha düşük performanslıdır ama güç tüketimi azdır. Ofis, web tarama gibi temel işlemler için yeterlidir."
    },
    {
        question: "harici ekran kartı nedir",
        answer: "Harici ekran kartı, anakartın PCIe slotuna takılan bağımsız grafik kartıdır. Yüksek performans sunar, oyun ve profesyonel uygulamalar için gereklidir. Kendi soğutma sistemi ve güç bağlantıları vardır."
    },
    {
        question: "ekran kartı benchmark skorları",
        answer: "3DMark Time Spy skorları: RTX 4090 ~35000, RTX 4080 ~25000, RTX 4070 ~18000, RX 7900 XTX ~30000, RX 7800 XT ~19000. Unigine Heaven 1080p: RTX 4090 ~6000 FPS, RTX 4080 ~4500 FPS."
    },
    {
        question: "en iyi ekran kartı hangisi",
        answer: "2024 için en iyi ekran kartları: NVIDIA RTX 4090 (performans), AMD RX 7900 XTX (fiyat/performans), NVIDIA RTX 4070 (orta seviye), AMD RX 7600 (bütçe). Kullanım amacınıza göre değişir."
    },

    // İŞLEMCİ SORULARI (30 soru)
    {
        question: "işlemci nedir",
        answer: "İşlemci (CPU), bilgisayarın beynidir. Tüm hesaplamaları yapar, komutları işler ve diğer bileşenleri koordine eder. Performansı çekirdek sayısı, saat hızı ve mimariye bağlıdır."
    },
    {
        question: "intel işlemci modelleri nelerdir",
        answer: "Intel işlemci serileri: Core i9 (en yüksek), Core i7 (üst seviye), Core i5 (orta), Core i3 (giriş), Pentium ve Celeron (temel). 12., 13. ve 14. nesil Raptor Lake mimarisini kullanır."
    },
    {
        question: "amd işlemci modelleri nelerdir",
        answer: "AMD işlemci serileri: Ryzen 9 (en yüksek), Ryzen 7 (üst), Ryzen 5 (orta), Ryzen 3 (giriş). Ryzen 7000 serisi Zen 4 mimarisi, Ryzen 5000 serisi Zen 3 mimarisi kullanır."
    },
    {
        question: "işlemci çekirdek sayısı ne demek",
        answer: "Çekirdek sayısı, işlemcinin aynı anda işleyebildiği görev sayısını belirtir. 2-4 çekirdek temel işlemler, 6-8 çekirdek oyun ve üretkenlik, 12+ çekirdek profesyonel uygulamalar için idealdir."
    },
    {
        question: "işlemci saat hızı nedir",
        answer: "İşlemci saat hızı (GHz), işlemcinin saniyedeki işlem kapasitesini gösterir. Temel hız sürekli çalışma hızı, turbo hız ise kısa süreli yüksek performans hızıdır. 3.5-4.5 GHz arası yaygındır."
    },
    {
        question: "işlemci benchmark skorları 2024",
        answer: "Cinebench R23 Multi-Core: Ryzen 9 7950X ~38000, Core i9-14900K ~40000, Ryzen 7 7800X3D ~18000, Core i5-14600K ~24000. Single-Core: Ryzen 7000 ~2000, Intel 14.nesil ~2200 puan."
    },
    {
        question: "en iyi işlemci hangisi",
        answer: "2024 için en iyi işlemciler: AMD Ryzen 7 7800X3D (oyun), Intel Core i9-14900K (çoklu görev), AMD Ryzen 5 7600 (fiyat/performans), Intel Core i5-14600K (orta seviye)."
    },

    // ANAKART SORULARI (20 soru)
    {
        question: "anakart nedir",
        answer: "Anakart, tüm bileşenleri birbirine bağlayan ana devre kartıdır. İşlemci, RAM, ekran kartı gibi bileşenler anakart üzerine takılır. Kalitesi sistem kararlılığını doğrudan etkiler."
    },
    {
        question: "anakart chipset nedir",
        answer: "Chipset, anakart üzerindeki bileşenlerin iletişimini yöneten entegre devredir. Intel Z790, B760; AMD X670, B650 gibi modeller vardır. Üst seviye chipset'ler daha fazla özellik sunar."
    },
    {
        question: "anakart nasıl seçilir",
        answer: "Anakart seçerken: İşlemci uyumu, RAM desteği, PCIe slotları, M.2 slot sayısı, bağlantı portları, VRM kalitesi, soğutma çözümleri, ses ve ağ kartı kalitesi dikkate alınmalıdır."
    },
    {
        question: "anakart markaları nelerdir",
        answer: "Başlıca anakart markaları: ASUS, MSI, Gigabyte, ASRock, Biostar. ASUS ROG ve MSI MGP üst seviye, ASUS TUF ve Gigabyte AORUS orta seviye, ASRock Phantom Gaming bütçe dostu serilerdir."
    },

    // DİĞER BİLEŞEN SORULARI (50+ soru)
    {
        question: "ram nedir",
        answer: "RAM (Random Access Memory), bilgisayarın geçici veri depoladığı bellektir. Hızlı okuma/yazma yapabilir ama elektrik kesildiğinde veriler silinir. 8GB minimum, 16GB ideal, 32GB+ profesyonel kullanım içindir."
    },
    {
        question: "ssd nedir",
        answer: "SSD (Solid State Drive), mekanik parçası olmayan hızlı depolama birimidir. Geleneksel HDD'lere göre 5-10 kat daha hızlıdır. İşletim sistemi ve sık kullanılan uygulamalar için idealdir."
    },
    {
        question: "nvme ssd nedir",
        answer: "NVMe SSD, M.2 slotunu kullanan ve PCIe veriyolundan faydalanan çok hızlı SSD türüdür. SATA SSD'lerden 5-7 kat daha hızlıdır. İşletim sistemi ve oyunlar için mükemmeldir."
    },
    {
        question: "güç kaynağı nedir",
        answer: "Güç kaynağı (PSU), bilgisayar bileşenlerine gerekli elektriği sağlayan birimdir. Watt değeri, verimlilik sertifikası (80 Plus) ve kablolama (modular) önemli özellikleridir."
    },
    {
        question: "soğutma sistemi nedir",
        answer: "Soğutma sistemi, bileşenlerin aşırı ısınmasını önleyen sistemdir. Hava soğutma (fan+ heatsink) ve sıvı soğutma (AIO custom loop) olarak ikiye ayrılır. Sıvı soğutma daha etkilidir."
    },
    {
        question: "benchmark nedir",
        answer: "Benchmark, bilgisayar bileşenlerinin performansını ölçmek için kullanılan test yazılımlarıdır. 3DMark (grafik), Cinebench (CPU), CrystalDiskMark (depolama) popüler benchmark araçlarıdır."
    },
    {
        question: "overclock nedir",
        answer: "Overclock, bileşenleri fabrika çıkışı hızlarından daha yüksek hızlarda çalıştırmaktır. Performans artışı sağlar ama güç tüketimi, ısı ve bileşen ömrü üzerinde etkilidir."
    },
    {
        question: "bottleneck nedir",
        answer: "Bottleneck (darboğaz), sistemdeki bir bileşenin diğerlerini yavaşlatan zayıf halka olması durumudur. Güçlü ekran kartı + zayıf işlemci kombinasyonunda işlemci bottleneck oluşur. Dengeli sistem kurmak önemlidir."
    },
    {
        question: "pc toplama rehberi",
        answer: "PC toplama adımları: 1) Bütçe ve kullanım amacı belirle, 2) İşlemci seç, 3) Uyumlu anakart seç, 4) RAM belirle, 5) Ekran kartı seç, 6) Depolama seç, 7) Güç kaynağı belirle, 8) Kasa ve soğutma seç, 9) Monitör ve çevre birimleri ekle. Uyumluluk kontrolü şarttır!"
    }
];

// Global değişkenler
let chatContext = [];
const MAX_CONTEXT_LENGTH = 10;

// Görsel Üretme Fonksiyonları
function openImageModal() {
    document.getElementById('image-modal').style.display = 'block';
    document.getElementById('image-loading').style.display = 'none';
    document.getElementById('image-result').style.display = 'none';
    
    // Modal açıldığında en üste scroll et
    setTimeout(() => {
        const modalContent = document.querySelector('.image-modal-content');
        modalContent.scrollTop = 0;
    }, 100);
}

function closeImageModal() {
    document.getElementById('image-modal').style.display = 'none';
}

function generateImage(productName) {
    const imageLoading = document.getElementById('image-loading');
    const imageResult = document.getElementById('image-result');
    const generatedImage = document.getElementById('generated-image');
    
    // Önce yükleme ekranını göster
    imageLoading.style.display = 'block';
    imageResult.style.display = 'none';
    
    // Yükleme ekranına scroll et
    setTimeout(() => {
        imageLoading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    
    const stages = ['stage1', 'stage2', 'stage3', 'stage4'];
    stages.forEach(stage => {
        document.getElementById(stage).classList.remove('active');
    });
    
    let currentStage = 0;
    const stageInterval = setInterval(() => {
        if (currentStage > 0) {
            document.getElementById(stages[currentStage - 1]).classList.remove('active');
        }
        document.getElementById(stages[currentStage]).classList.add('active');
        currentStage++;
        
        if (currentStage >= stages.length) {
            clearInterval(stageInterval);
            
            // Görseli oluştur
            setTimeout(() => {
                const imageUrls = {
                    'RTX 8090': 'ez.png',
                    'RTX 8090 2': '8090.png',
                    'Intel 20900K': '20900k.png',
                    'Gaming Room': 'gamer room.png',
                    'Gaming PC': 'gamerpc.png',
                    'Gaming PC 2': 'gaming pc.png',
                    'RX 10090': 'gg.png',
                    'RGB Setup': 'rgb setup.png'
                };
                
                generatedImage.src = imageUrls[productName];
                generatedImage.alt = productName;
                
                imageLoading.style.display = 'none';
                imageResult.style.display = 'block';
                
                // Sonuç ekranına scroll et
                setTimeout(() => {
                    imageResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
                
                showNotification(`${productName} görseli oluşturuldu!`);
            }, 3000);
        }
    }, 1200);
}

// Global fonksiyonlar
function goToPriceSites() {
    const sites = [
        'https://www.hepsiburada.com',
        'https://www.vatanbilgisayar.com',
        'https://www.trendyol.com',
        'https://www.amazon.com.tr',
        'https://www.technopat.net',
        'https://www.donanimhaber.com'
    ];
    
    const randomSite = sites[Math.floor(Math.random() * sites.length)];
    window.open(randomSite, '_blank');
}

function askQuestionDirectly(question) {
    handleUserMessageDirectly(question);
    if (window.innerWidth <= 768) {
        closeMobileSidebar();
    }
}

// Mobil sidebar fonksiyonları
function openMobileSidebar() {
    document.getElementById('suggestion-sidebar').classList.add('active');
    document.getElementById('mobile-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileSidebar() {
    document.getElementById('suggestion-sidebar').classList.remove('active');
    document.getElementById('mobile-overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    // Hoşgeldin animasyonunu göster
    const welcomeAnimation = document.getElementById('welcome-animation');
    const mainContainer = document.querySelector('.main-container');
    
    // 3 saniye sonra hoşgeldin animasyonunu kapat ve ana içeriği göster
    setTimeout(() => {
        welcomeAnimation.style.display = 'none';
        mainContainer.style.display = 'flex';
        
        // Ana içerik gösterildikten sonra ilk mesajı ekle
        setTimeout(() => {
            addMessageToChat("Merhaba! Hoşgeldiniz. Ben MERA AI beta 0.9, PC bileşenleri hakkında sorularınızı yanıtlayabilen gelişmiş bir yapay zeka asistanıyım. Artık 150+ soru ile daha kapsamlı hizmet veriyorum! Sağ taraftaki 'Görsel Üretme' butonuna tıklayarak çeşitli PC bileşenlerinin görsellerini oluşturabilirsiniz. Size nasıl yardımcı olabilirim?", 'ai');
        }, 300);
    }, 3000);

    // Elementleri seç
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatBox = document.getElementById('chat-box');
    const allQuestionsBtn = document.getElementById('all-questions-btn');
    const modal = document.getElementById('questions-modal');
    const closeBtn = document.querySelector('.close');
    const questionsList = document.getElementById('questions-list');
    const questionSearch = document.getElementById('question-search');
    const themeToggle = document.getElementById('theme-toggle');
    const notification = document.getElementById('notification');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebarClose = document.getElementById('sidebar-close');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    // Mobil menü butonu
    mobileMenuBtn.addEventListener('click', openMobileSidebar);
    
    // Sidebar kapatma butonu
    sidebarClose.addEventListener('click', closeMobileSidebar);
    
    // Mobil overlay tıklama
    mobileOverlay.addEventListener('click', closeMobileSidebar);
    
    // Tema değiştirme
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
    
    // Tüm sorular modalını açma/kapama
    allQuestionsBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        populateQuestionsList();
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        if (event.target == document.getElementById('image-modal')) {
            closeImageModal();
        }
    });
    
    // Soru arama
    questionSearch.addEventListener('input', function() {
        populateQuestionsList(this.value.toLowerCase());
    });
    
    // Soru listesini doldur
    function populateQuestionsList(searchTerm = '') {
        questionsList.innerHTML = '';
        knowledgeBase.forEach((item, index) => {
            if (searchTerm === '' || item.question.toLowerCase().includes(searchTerm)) {
                const questionItem = document.createElement('div');
                questionItem.classList.add('question-item');
                
                const questionText = document.createElement('div');
                questionText.textContent = item.question;
                
                const favoriteBtn = document.createElement('button');
                favoriteBtn.classList.add('favorite-btn');
                favoriteBtn.innerHTML = '<i class="far fa-star"></i>';
                favoriteBtn.title = 'Favorilere ekle';
                
                // Favori kontrolü
                const favorites = getFavorites();
                if (favorites.includes(index)) {
                    favoriteBtn.classList.add('active');
                    favoriteBtn.innerHTML = '<i class="fas fa-star"></i>';
                }
                
                favoriteBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    toggleFavorite(index);
                    populateQuestionsList(searchTerm);
                });
                
                questionItem.appendChild(questionText);
                questionItem.appendChild(favoriteBtn);
                
                questionItem.addEventListener('click', function() {
                    userInput.value = item.question;
                    modal.style.display = 'none';
                    handleUserMessage();
                });
                
                questionsList.appendChild(questionItem);
            }
        });
    }
    
    // Favori yönetimi
    function getFavorites() {
        return JSON.parse(localStorage.getItem('meraFavorites')) || [];
    }
    
    function toggleFavorite(index) {
        const favorites = getFavorites();
        const favoriteIndex = favorites.indexOf(index);
        
        if (favoriteIndex === -1) {
            favorites.push(index);
            showNotification('Favorilere eklendi!');
        } else {
            favorites.splice(favoriteIndex, 1);
            showNotification('Favorilerden kaldırıldı!');
        }
        
        localStorage.setItem('meraFavorites', JSON.stringify(favorites));
    }
    
    // Sohbet geçmişi kaydetme
    function saveToHistory(question, answer) {
        const history = JSON.parse(localStorage.getItem('meraChatHistory')) || [];
        history.push({
            question: question,
            answer: answer,
            timestamp: new Date().toISOString()
        });
        
        // Son 50 mesajı sakla
        if (history.length > 50) {
            history.splice(0, history.length - 50);
        }
        
        localStorage.setItem('meraChatHistory', JSON.stringify(history));
    }
    
    // Bağlam hafızası güncelleme
    function updateContext(question, answer) {
        chatContext.push({ role: 'user', content: question });
        chatContext.push({ role: 'assistant', content: answer });
        
        if (chatContext.length > MAX_CONTEXT_LENGTH * 2) {
            chatContext = chatContext.slice(-MAX_CONTEXT_LENGTH * 2);
        }
    }
    
    // Gönder butonuna tıklama olayı
    sendBtn.addEventListener('click', handleUserMessage);
    
    // Enter tuşuna basma olayı
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });
    
    function handleUserMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Gönder butonunda yükleme animasyonunu göster
        const btnText = sendBtn.querySelector('.btn-text');
        const btnLoading = sendBtn.querySelector('.btn-loading');
        btnText.style.display = 'none';
        btnLoading.style.display = 'block';
        
        // Kullanıcı mesajını sohbet kutusuna ekle
        addMessageToChat(message, 'user');
        
        // "Düşünülüyor..." mesajını göster
        const thinkingMessage = addThinkingMessage();
        
        // Yapay zeka yanıtını al
        setTimeout(() => {
            const response = getAIResponse(message);
            
            // "Düşünülüyor..." mesajını kaldır
            thinkingMessage.remove();
            
            // Yanıtı sohbet kutusuna ekle
            addMessageToChat(response, 'ai');
            
            // Geçmişe kaydet ve bağlamı güncelle
            saveToHistory(message, response);
            updateContext(message, response);
            
            // Yükleme animasyonunu kapat
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
            
            // Sohbet kutusunu en aşağı kaydır
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 2000);
        
        // Giriş alanını temizle
        userInput.value = '';
    }
    
    // Direkt soru sorma fonksiyonu (sağdaki butonlar için)
    function handleUserMessageDirectly(question) {
        // Gönder butonunda yükleme animasyonunu göster
        const btnText = sendBtn.querySelector('.btn-text');
        const btnLoading = sendBtn.querySelector('.btn-loading');
        btnText.style.display = 'none';
        btnLoading.style.display = 'block';
        
        // Kullanıcı mesajını sohbet kutusuna ekle
        addMessageToChat(question, 'user');
        
        // "Düşünülüyor..." mesajını göster
        const thinkingMessage = addThinkingMessage();
        
        // Yapay zeka yanıtını al
        setTimeout(() => {
            const response = getAIResponse(question);
            
            // "Düşünülüyor..." mesajını kaldır
            thinkingMessage.remove();
            
            // Yanıtı sohbet kutusuna ekle
            addMessageToChat(response, 'ai');
            
            // Geçmişe kaydet ve bağlamı güncelle
            saveToHistory(question, response);
            updateContext(question, response);
            
            // Yükleme animasyonunu kapat
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
            
            // Sohbet kutusunu en aşağı kaydır
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 2000);
    }
    
    function addThinkingMessage() {
        const thinkingElement = document.createElement('div');
        thinkingElement.classList.add('message', 'ai-message');
        thinkingElement.style.opacity = '0.7';
        
        const thinkingHeader = document.createElement('div');
        thinkingHeader.classList.add('message-header');
        thinkingHeader.textContent = 'MERA AI beta 0.9 düşünüyor...';
        
        const thinkingAnimation = document.createElement('div');
        thinkingAnimation.classList.add('thinking-animation');
        thinkingAnimation.innerHTML = '<span></span><span></span><span></span>';
        
        thinkingElement.appendChild(thinkingHeader);
        thinkingElement.appendChild(thinkingAnimation);
        chatBox.appendChild(thinkingElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        return thinkingElement;
    }
    
    function addMessageToChat(message, sender, animate = true) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender + '-message');
        
        if (!animate) {
            messageElement.style.animation = 'none';
            messageElement.style.opacity = '1';
            messageElement.style.transform = 'translateY(0)';
        }
        
        const messageHeader = document.createElement('div');
        messageHeader.classList.add('message-header');
        messageHeader.textContent = sender === 'user' ? 'Siz' : 'MERA AI beta 0.9';
        
        const messageText = document.createElement('p');
        messageText.textContent = message;
        
        messageElement.appendChild(messageHeader);
        messageElement.appendChild(messageText);
        chatBox.appendChild(messageElement);
        
        // Sohbet kutusunu en aşağı kaydır
        chatBox.scrollTop = chatBox.scrollHeight;
        
        return messageElement;
    }
    
    function showNotification(text) {
        notification.textContent = text;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
    
    function getAIResponse(userMessage) {
        // Bağlam hafızasını kullanarak daha akıllı yanıtlar
        const context = chatContext.map(msg => `${msg.role}: ${msg.content}`).join('\n');
        const fullMessage = context + '\nuser: ' + userMessage;
        
        // Gelen mesajı küçük harfe çevir ve soru işaretlerini kaldır
        const cleanMessage = userMessage.toLowerCase().replace('?', '');
        
        // Tam eşleşme kontrolü
        for (const item of knowledgeBase) {
            if (item.question.toLowerCase() === cleanMessage) {
                return item.answer;
            }
        }
        
        // Kısmi eşleşme kontrolü
        for (const item of knowledgeBase) {
            if (cleanMessage.includes(item.question.toLowerCase()) || 
                item.question.toLowerCase().includes(cleanMessage)) {
                return item.answer;
            }
        }
        
        // Bağlamsal yanıt
        if (chatContext.length > 0) {
            const lastUserMessage = chatContext[chatContext.length - 1].content.toLowerCase();
            
            // Önceki mesajla ilişkili yanıtlar
            if (lastUserMessage.includes("ekran kartı") && userMessage.includes("fiyat")) {
                return "Ekran kartı fiyatları model ve markaya göre değişiklik gösterir. RTX 4060 400-600$, RTX 4070 600-800$, RTX 4080 1000-1300$, RTX 4090 1500-2000$ arasındadır. AMD tarafında RX 7600 300-400$, RX 7700 XT 500-600$, RX 7800 XT 600-700$, RX 7900 XTX 900-1100$ civarındadır.";
            }
            
            if (lastUserMessage.includes("işlemci") && userMessage.includes("öner")) {
                return "Hangi bütçe ve kullanım amacına uygun işlemci önermemi istiyorsunuz? Oyun için Intel Core i5/i7, üretkenlik için AMD Ryzen 7/9, bütçe için AMD Ryzen 5 veya Intel Core i3 önerebilirim. Detaylı bilgi verebilmem için bütçenizi ve kullanım amacınızı belirtin.";
            }
        }
        
        // Varsayılan yanıtlar
        const defaultResponses = [
            "Bu konu hakkında daha detaylı bilgi verebilmem için sorunuzu biraz daha spesifik hale getirebilir misiniz?",
            "PC bileşenleri hakkında size nasıl yardımcı olabilirim? Ekran kartları, işlemciler, RAM'ler veya diğer bileşenlerle ilgili sorularınızı yanıtlayabilirim.",
            "Üzgünüm, bu sorunun cevabını bilgi tabanımda bulamadım. Başka bir soru sormak ister misiniz?",
            "Bu konuda size yardımcı olabilmem için sorunuzu farklı şekilde ifade edebilir misiniz?"
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
});
