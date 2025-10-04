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
        question: "ekran kartı sli nedir",
        answer: "SLI (Scalable Link Interface), NVIDIA'nın birden fazla ekran kartını birlikte çalıştırma teknolojisidir. Performans artışı sağlar ama güç tüketimi ve maliyeti yüksektir. Yeni nesil kartlarda NVLink kullanılıyor."
    },
    {
        question: "ekran kartı crossfire nedir",
        answer: "CrossFire, AMD'nin çoklu ekran kartı teknolojisidir. Birden fazla AMD ekran kartının birlikte çalışmasını sağlar. SLI'ye benzer şekilde performans artışı sunar ama uyumluluk sınırlıdır."
    },
    {
        question: "ekran kartı markaları nelerdir",
        answer: "Başlıca ekran kartı markaları: ASUS, MSI, Gigabyte, Zotac, Palit, Inno3D, Sapphire, XFX, PowerColor, ASRock. Bu markalar NVIDIA ve AMD çipleri kullanarak kendi soğutma çözümlerini üretirler."
    },
    {
        question: "ekran kartı gpu nedir",
        answer: "GPU (Graphics Processing Unit), ekran kartının işlemcisidir. Grafik hesaplamalarını yapar, paralel işleme kapasitesi yüksektir. Modern GPU'lar sadece grafik işlemleri için değil, yapay zeka ve bilimsel hesaplamalar için de kullanılır."
    },
    {
        question: "ekran kartı ray tracing nedir",
        answer: "Ray Tracing (ışık izleme), gerçekçi ışık yansımaları ve gölgeler oluşturan gelişmiş grafik teknolojisidir. NVIDIA RTX serisi ve AMD RX 6000+ serisi bu teknolojiyi destekler. Performans düşüşünü telafi etmek için DLSS/FSR kullanılır."
    },
    {
        question: "dlss nedir",
        answer: "DLSS (Deep Learning Super Sampling), NVIDIA'nın yapay zeka destekli görüntü iyileştirme teknolojisidir. Düşük çözünürlükte işlem yapıp yüksek çözünürlükte görüntü oluşturarak performansı artırır. Sadece RTX serisi kartlarda çalışır."
    },
    {
        question: "fsr nedir",
        answer: "FSR (FidelityFX Super Resolution), AMD'nin açık kaynaklı yükseltici ölçeklendirme teknolojisidir. DLSS'e benzer şekilde performansı artırır ama tüm ekran kartlarında çalışır. FSR 2.0 ve üzeri sürümler kalite olarak DLSS'e yakındır."
    },
    {
        question: "ekran kartı güç tüketimi nedir",
        answer: "Ekran kartı güç tüketimi, kartın çalışması için gereken elektrik miktarıdır. Düşük seviye kartlar 75-150W, orta seviye 150-250W, yüksek seviye kartlar 300-450W+ güç tüketir. Güç kaynağının yeterli olması önemlidir."
    },
    {
        question: "ekran kartı sıcaklık sorunu nasıl çözülür",
        answer: "Ekran kartı sıcaklık sorunu için: Kasa hava akışını iyileştirin, fan hızını artırın, termal macunu değiştirin, toz temizliği yapın, undervolt uygulayın. Aşırı durumlarda su soğutma sistemi gerekebilir."
    },
    {
        question: "ekran kartı artifacting nedir",
        answer: "Artifacting, ekran kartı arızası sonucu oluşan görüntü bozukluklarıdır. Renkli pikseller, çizgiler, titreme şeklinde görülür. Genellikle aşırı ısınma, bellek sorunları veya GPU hasarından kaynaklanır."
    },
    {
        question: "ekran kartı driver sorunu nasıl çözülür",
        answer: "Ekran kartı sürücü sorunları için: Sürücüyü DDU ile temizleyip yeniden yükleyin, Windows güncellemelerini kontrol edin, güç ayarlarını optimize edin, eski sürücülere dönün. Donanım uyumluluğunu kontrol edin."
    },
    {
        question: "ekran kartı seçerken hangi oyunlar referans alınmalı",
        answer: "Ekran kartı seçerken oyun türüne göre: Competitive oyunlar (CS:GO, Valorant) için yüksek FPS, AAA oyunlar (Cyberpunk, RDR2) için yüksek kalite, espor oyunları için orta seviye kartlar tercih edilmelidir."
    },
    {
        question: "ekran kartı fiyatları ne kadar",
        answer: "Ekran kartı fiyatları modele göre değişir: Giriş seviye (3050, 6500 XT) 300-500$, orta seviye (4060, 7600) 500-800$, üst seviye (4070, 7700 XT) 800-1200$, flagship (4090, 7900 XTX) 1200-2000$ arasındadır."
    },
    {
        question: "ekran kartı benchmark skorları",
        answer: "3DMark Time Spy skorları: RTX 4090 ~35000, RTX 4080 ~25000, RTX 4070 ~18000, RX 7900 XTX ~30000, RX 7800 XT ~19000. Unigine Heaven 1080p: RTX 4090 ~6000 FPS, RTX 4080 ~4500 FPS."
    },
    {
        question: "en iyi ekran kartı hangisi",
        answer: "2024 için en iyi ekran kartları: NVIDIA RTX 4090 (performans), AMD RX 7900 XTX (fiyat/performans), NVIDIA RTX 4070 (orta seviye), AMD RX 7600 (bütçe). Kullanım amacınıza göre değişir."
    },
    {
        question: "ekran kartı verimlilik testi",
        answer: "Ekran kartı verimliliği için: FPS/Watt oranına bakın. NVIDIA RTX 40 serisi verimlilikte lider. AMD RX 7000 serisi de iyi verimlilik sunar. FurMark ile güç tüketimi test edilebilir."
    },
    {
        question: "ekran kartı teknolojileri nelerdir",
        answer: "Modern ekran kartı teknolojileri: Ray Tracing, DLSS/FSR, Reflex (düşük gecikme), Resizable BAR, AV1 kodlama, AI hızlandırma, VR desteği. NVIDIA ve AMD farklı teknolojiler sunar."
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
        question: "işlemci nasıl takılır",
        answer: "İşlemci takmak için: 1) Anakart CPU slot kolu kaldırılır, 2) İşlemci yuvaya yönüne dikkat ederek yerleştirilir, 3) Kol kapatılır, 4) Termal macun uygulanır, 5) Soğutucu monte edilir. Statik elektriğe dikkat edilmeli."
    },
    {
        question: "işlemci sıcaklığı kaç derece olmalı",
        answer: "İşlemci sıcaklığı: Boştayken 30-50°C, oyun/yük altında 60-80°C normaldir. 85°C+ yüksek, 95°C+ kritik sıcaklıktır. AMD işlemciler genellikle daha yüksek sıcaklıklarda çalışabilir."
    },
    {
        question: "işlemci overclock nasıl yapılır",
        answer: "İşlemci overclock'u için: BIOS'tan çarpan ve voltaj ayarları yapılır. Kademeli artışlarla stabilite test edilir. Kaliteli soğutma şarttır. AMD Ryzen'de Precision Boost Overdrive otomatik overclock sağlar."
    },
    {
        question: "işlemci performans testi nasıl yapılır",
        answer: "İşlemci performans testi için: Cinebench, CPU-Z, Geekbench, Prime95 kullanılır. Oyun ve uygulama performansı da gerçek dünya testidir. Sıcaklık ve güç tüketimi izlenmelidir."
    },
    {
        question: "işlemci alırken nelere dikkat edilmeli",
        answer: "İşlemci seçerken: Kullanım amacı, bütçe, anakart uyumu, soğutma ihtiyacı, güç tüketimi, çekirdek/thread sayısı, saat hızı, önbellek miktarı ve entegre grafik ihtiyacı dikkate alınmalıdır."
    },
    {
        question: "işlemci önbelleği nedir",
        answer: "İşlemci önbelleği (cache), sık kullanılan verilerin hızlı erişim için saklandığı bellektir. L1 (en hızlı, küçük), L2 (orta), L3 (en büyük, tüm çekirdekler paylaşır) seviyeleri vardır. Daha büyük önbellek genellikle daha iyi performans demektir."
    },
    {
        question: "hyper threading nedir",
        answer: "Hyper-Threading, Intel'in her fiziksel çekirdeği iki mantıksal çekirdek gibi çalıştıran teknolojisidir. Çoklu görev performansını artırır. AMD'deki karşılığı SMT (Simultaneous Multi-Threading)'dir."
    },
    {
        question: "işlemci soket uyumu nedir",
        answer: "İşlemci soket uyumu, işlemcinin anakarta fiziksel ve elektriksel olarak bağlanabilmesidir. AMD: AM4, AM5; Intel: LGA 1700, LGA 1200. Soket uyumsuzluğunda işlemci takılamaz veya çalışmaz."
    },
    {
        question: "işlemci tdp nedir",
        answer: "TDP (Thermal Design Power), işlemcinin soğutma sistemi tarafından uzaklaştırılması gereken maksimum ısı miktarıdır. Düşük TDP daha az güç tüketimi ve ısı demektir. 65W orta seviye, 125W+ yüksek performans işlemcilerdir."
    },
    {
        question: "işlemci bottleneck nedir",
        answer: "Bottleneck (darboğaz), sistemdeki bir bileşenin diğerini yavaşlatmasıdır. Güçlü ekran kartı + zayıf işlemci kombinasyonunda işlemci bottleneck oluşur. Dengeli sistem kurmak önemlidir."
    },
    {
        question: "işlemci markaları nelerdir",
        answer: "Başlıca işlemci markaları: Intel ve AMD. Intel daha yaygın ve stabil, AMD daha iyi fiyat/performans sunar. Apple M serisi (ARM mimarisi) da dizüstü bilgisayarlarda popülerdir."
    },
    {
        question: "işlemci nesil farkı nedir",
        answer: "İşlemci nesli, mimari iyileştirmeleri ifade eder. Her yeni nesil daha iyi performans, daha az güç tüketimi ve yeni özellikler getirir. Intel 14. nesil, AMD Ryzen 7000 serisi en yeni nesillerdir."
    },
    {
        question: "işlemci entegre grafik nedir",
        answer: "Entegre grafik, işlemci içinde bulunan temel grafik birimidir. Harici ekran kartı olmadan görüntü sağlar. Intel HD/UHD Graphics, AMD Radeon Graphics. Oyun için yetersiz, ofis kullanımı için yeterlidir."
    },
    {
        question: "işlemci soğutucu seçimi nasıl yapılır",
        answer: "İşlemci soğutucu seçerken: İşlemci TDP'si, kasa boyutu, bütçe, sessizlik ihtiyacı dikkate alınır. Stock soğutucular temel ihtiyaçlar için, aftermarket soğutucular overclock ve sessizlik için idealdir."
    },
    {
        question: "işlemci termal macun nedir",
        answer: "Termal macun, işlemci ile soğutucu arasındaki mikroskobik boşlukları doldurarak ısı iletimini artıran özel bir macundur. 2-3 yılda bir değiştirilmesi önerilir. Kaliteli macunlar 5-10°C sıcaklık düşüşü sağlar."
    },
    {
        question: "işlemci undervolt nedir",
        answer: "Undervolt, işlemciye daha düşük voltaj vererek güç tüketimi ve ısıyı azaltma işlemidir. Performanstan ödün vermeden sıcaklık düşürülebilir. Özellikle dizüstü bilgisayarlarda faydalıdır."
    },
    {
        question: "işlemci benchmark skorları ne anlama gelir",
        answer: "Benchmark skorları, işlemci performansını sayısallaştırır. Cinebench R23 single-core (tek çekirdek), multi-core (çok çekirdek) skorları önemlidir. Yüksek skor daha iyi performans demektir."
    },
    {
        question: "işlemci alırken intel mi amd mi",
        answer: "Intel vs AMD seçimi kullanıma göre değişir: Oyun için Intel single-core performansı, üretkenlik için AMD çoklu çekirdek performansı, bütçe için AMD fiyat/performans avantajı sunar. Anakart uyumu da önemlidir."
    },
    {
        question: "işlemci fiyatları ne kadar",
        answer: "İşlemci fiyatları: Giriş seviye (i3/Ryzen 3) 100-200$, orta seviye (i5/Ryzen 5) 200-350$, üst seviye (i7/Ryzen 7) 350-500$, flagship (i9/Ryzen 9) 500-800$ arasındadır."
    },
    {
        question: "işlemci güncelleme nasıl yapılır",
        answer: "İşlemci güncellemesi fiziksel değişim gerektirir. BIOS güncellemesi işlemci desteği için yapılabilir. Donanım güncellemesi için yeni işlemci ve uyumlu anakart gerekebilir."
    },
    {
        question: "işlemci benchmark skorları 2024",
        answer: "Cinebench R23 Multi-Core: Ryzen 9 7950X ~38000, Core i9-14900K ~40000, Ryzen 7 7800X3D ~18000, Core i5-14600K ~24000. Single-Core: Ryzen 7000 ~2000, Intel 14.nesil ~2200 puan."
    },
    {
        question: "en iyi işlemci hangisi",
        answer: "2024 için en iyi işlemciler: AMD Ryzen 7 7800X3D (oyun), Intel Core i9-14900K (çoklu görev), AMD Ryzen 5 7600 (fiyat/performans), Intel Core i5-14600K (orta seviye)."
    },
    {
        question: "işlemci mimarisi nedir",
        answer: "İşlemci mimarisi, çipin tasarım ve çalışma prensipleridir. AMD Zen 4 (Ryzen 7000), Intel Raptor Lake (13-14.nesil) modern mimarilerdir. Her yeni mimari daha iyi IPC (Instructions Per Cycle) sunar."
    },
    {
        question: "işlemci ipc nedir",
        answer: "IPC (Instructions Per Cycle), işlemcinin her saat döngüsünde işleyebildiği komut sayısıdır. Daha yüksek IPC daha iyi performans demektir. AMD Zen 4 ve Intel Raptor Lake yüksek IPC'ye sahiptir."
    },
    {
        question: "işlemci x3d modelleri nedir",
        answer: "AMD 3D V-Cache teknolojili işlemciler (Ryzen 7 7800X3D gibi), oyun performansı için optimize edilmiş büyük L3 önbelleğe sahiptir. Oyunlarda %15-30 daha iyi performans sunarlar."
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
    {
        question: "anakart form factor nedir",
        answer: "Anakart form factor: ATX (standart), Micro-ATX (küçük), Mini-ITX (mini). ATX daha fazla genişleme yuvası, Mini-ITX küçük kasalar için idealdir. Kasa uyumu önemlidir."
    },
    {
        question: "anakart vrm nedir",
        answer: "VRM (Voltage Regulator Module), işlemciye kararlı voltaj sağlayan devrelerdir. Kaliteli VRM, overclock stabilitesi ve işlemci ömrü için önemlidir. Faz sayısı ve kalite bileşenleri önemli parametrelerdir."
    },
    {
        question: "anakart bios güncelleme nasıl yapılır",
        answer: "BIOS güncellemesi için: Üretici web sitesinden en son BIOS'u indirin, USB belleğe yazın, BIOS'a girerek Flash utility'yi çalıştırın. Kesintisiz güç kaynağı önemlidir."
    },
    {
        question: "anakart ses kartı nedir",
        answer: "Anakart üzerinde entegre ses kartı bulunur. ALC1220, ALC4080 gibi codec'ler kaliteli ses sunar. Üst seviye anakartlarda ses yalıtımı ve amplifikatörler bulunur."
    },
    {
        question: "anakart ağ kartı nedir",
        answer: "Anakart üzerinde Ethernet ve WiFi kartları bulunur. 2.5GbE, 5GbE Ethernet ve WiFi 6E modern standartlardır. Intel ve Realtek en yaygın ağ çipi üreticileridir."
    },
    {
        question: "anakart pcie slotları nedir",
        answer: "PCIe slotları, ekran kartı ve diğer genişleme kartları içindir. PCIe 4.0 ve 5.0 en yeni standartlardır. X16 slot ekran kartı, X1 slot ses/ağ kartları için kullanılır."
    },
    {
        question: "anakart m.2 slot nedir",
        answer: "M.2 slotları, NVMe SSD'ler için kullanılan yüksek hızlı bağlantı noktalarıdır. PCIe 4.0 ve 5.0 destekli slotlar bulunur. Soğutuculu M.2 slotlar performansı artırır."
    },
    {
        question: "anakart overclock desteği",
        answer: "Z690/Z790 (Intel) ve X670/B650 (AMD) chipset'li anakartlar overclock desteği sunar. Kaliteli VRM ve soğutma overclock için önemlidir. B serisi chipset'lerde overclock sınırlıdır."
    },
    {
        question: "anakart rgb desteği nedir",
        answer: "RGB header'lar, LED şerit ve aydınlatmalı bileşenleri kontrol etmek için kullanılır. ARGB (Adreslenebilir RGB) her LED'i ayrı kontrol eder. ASUS Aura Sync, MSI Mystic Light popüler yazılımlardır."
    },
    {
        question: "anakart fan kontrolü nasıl yapılır",
        answer: "Anakart üzerinde PWM fan header'ları bulunur. BIOS'tan veya yazılımlarla fan hızları ayarlanabilir. Üst seviye anakartlarda 6+ fan header bulunur."
    },
    {
        question: "anakart thunderbolt desteği",
        answer: "Thunderbolt 4, 40Gb/s hız sunan bağlantı standardıdır. Bazı üst seviye anakartlarda bulunur. USB4 ile uyumludur. Profesyonel kullanıcılar için idealdir."
    },
    {
        question: "anakart usb portları",
        answer: "Modern anakartlarda: USB 3.2 Gen 2x2 (20Gb/s), USB 3.2 Gen 2 (10Gb/s), USB 3.2 Gen 1 (5Gb/s), USB 2.0 bulunur. USB-C portları giderek yaygınlaşıyor."
    },
    {
        question: "anakart ram slotları",
        answer: "DDR4 ve DDR5 slotları bulunur. DDR5 daha yüksek hız ve bant genişliği sunar. Çift kanal (dual channel) performans için önemlidir. 4 slotlu anakartlar daha fazla RAM kapasitesi sunar."
    },
    {
        question: "anakart güç bağlantıları",
        answer: "24-pin ana güç ve 8-pin CPU güç bağlantıları bulunur. Üst seviye işlemciler için ek 8-pin güç bağlantıları gerekebilir. Kaliteli güç kaynağı kullanımı önemlidir."
    },
    {
        question: "anakart sata portları",
        answer: "SATA portları, HDD ve SSD'ler için kullanılır. SATA III 6Gb/s hız sunar. Modern anakartlarda 4-8 SATA port bulunur. M.2 slot kullanıldığında bazı SATA portları devre dışı kalabilir."
    },
    {
        question: "anakart fiyat aralığı",
        answer: "Anakart fiyatları: Bütçe (100-200$), Orta seviye (200-400$), Üst seviye (400-700$), Flagship (700$+). Chipset, marka ve özelliklere göre değişir."
    },

    // DİĞER BİLEŞEN SORULARI (50+ soru)
    {
        question: "ram nedir",
        answer: "RAM (Random Access Memory), bilgisayarın geçici veri depoladığı bellektir. Hızlı okuma/yazma yapabilir ama elektrik kesildiğinde veriler silinir. 8GB minimum, 16GB ideal, 32GB+ profesyonel kullanım içindir."
    },
    {
        question: "ram frekansı nedir",
        answer: "RAM frekansı (MHz), bellek hızını belirtir. DDR4 3200MHz, DDR5 4800MHz+ yaygındır. Daha yüksek frekans daha iyi performans demektir ama işlemci ve anakart desteği önemlidir."
    },
    {
        question: "ram timing nedir",
        answer: "RAM timing (CL değeri), bellek gecikme süresidir. CL16, CL18 gibi değerlerle ifade edilir. Düşük CL değeri daha iyi performans demektir. Frekans ve timing dengeli olmalıdır."
    },
    {
        question: "dual channel ram nedir",
        answer: "Dual channel, iki RAM modülünün birlikte çalışarak bant genişliğini ikiye katlamasıdır. Performansı %10-15 artırır. Aynı marka, model ve kapasitede RAM'ler kullanılmalıdır."
    },
    {
        question: "ram nasıl takılır",
        answer: "RAM takmak için: 1) Yuva klipsleri açılır, 2) RAM çentik yönüne dikkat edilerek yuvaya yerleştirilir, 3) Hafifçe bastırılarak klipsler kapatılır. Genellikle 2 ve 4. slotlar tercih edilir."
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
        question: "ssd vs hdd farkı nedir",
        answer: "SSD: Çok hızlı, sessiz, dayanıklı, pahalı. HDD: Yavaş, mekanik, ucuz, yüksek kapasite. SSD işletim sistemi ve uygulamalar, HDD dosya depolama için idealdir."
    },
    {
        question: "güç kaynağı nedir",
        answer: "Güç kaynağı (PSU), bilgisayar bileşenlerine gerekli elektriği sağlayan birimdir. Watt değeri, verimlilik sertifikası (80 Plus) ve kablolama (modular) önemli özellikleridir."
    },
    {
        question: "güç kaynağı watt hesaplama nasıl yapılır",
        answer: "Güç kaynağı watt hesaplaması için: İşlemci + ekran kartı TDP'si + 100-150W (diğer bileşenler) toplanır. 650W orta seviye, 850W üst seviye, 1000W+ yüksek performans sistemler için uygundur."
    },
    {
        question: "soğutma sistemi nedir",
        answer: "Soğutma sistemi, bileşenlerin aşırı ısınmasını önleyen sistemdir. Hava soğutma (fan+ heatsink) ve sıvı soğutma (AIO custom loop) olarak ikiye ayrılır. Sıvı soğutma daha etkilidir."
    },
    {
        question: "kasa nedir",
        answer: "Kasa, bilgisayar bileşenlerini koruyan ve bir arada tutan dış muhafazadır. ATX (standart), Micro-ATX (küçük), Mini-ITX (mini) boyutları vardır. Hava akışı ve kablolama önemlidir."
    },
    {
        question: "monitör nedir",
        answer: "Monitör, bilgisayarın görüntü çıkışını gösteren ekrandır. Çözünürlük (1080p, 1440p, 4K), yenileme hızı (60Hz, 144Hz, 240Hz) ve panel teknolojisi (IPS, VA, TN) önemli özellikleridir."
    },
    {
        question: "klavye çeşitleri nelerdir",
        answer: "Klavye çeşitleri: Mekanik (en iyi tuş hissi, dayanıklı), Membran (sessiz, ucuz), Hibrit (ikisinin karışımı). Mekanik klavyeler Cherry MX, Gateron gibi switch'lerle gelir."
    },
    {
        question: "fare dpi nedir",
        answer: "DPI (Dots Per Inch), farenin hassasiyetini belirtir. Yüksek DPI daha hızlı imleç hareketi demektir. 800-1600 DPI oyun, 400-800 DPI FPS oyunları için idealdir. Modern fareler 16000+ DPI'ya çıkabilir."
    },
    {
        question: "hoparlör nedir",
        answer: "Hoparlör, bilgisayarın ses çıkışını sağlayan aygıttır. 2.0 (stereo), 2.1 (stereo + subwoofer), 5.1/7.1 (surround) konfigürasyonları vardır. Güç (Watt) ve frekans aralığı önemlidir."
    },
    {
        question: "overclock nedir",
        answer: "Overclock, bileşenleri fabrika çıkışı hızlarından daha yüksek hızlarda çalıştırmaktır. Performans artışı sağlar ama güç tüketimi, ısı ve bileşen ömrü üzerinde etkilidir."
    },
    {
        question: "bios nedir",
        answer: "BIOS (Basic Input/Output System), bilgisayar açılırken donanımları kontrol eden ve işletim sistemini başlatan temel yazılımdır. Modern sistemlerde UEFI BIOS kullanılır."
    },
    {
        question: "driver nedir",
        answer: "Driver (sürücü), işletim sisteminin donanımlarla iletişim kurabilmesini sağlayan yazılımlardır. Güncel sürücüler performans ve stabilite için önemlidir."
    },
    {
        question: "sata nedir",
        answer: "SATA (Serial ATA), depolama aygıtlarını anakarta bağlamak için kullanılan bağlantı standardıdır. SATA III 6Gb/s hız sunar. HDD ve SSD'ler için kullanılır."
    },
    {
        question: "pcie nedir",
        answer: "PCIe (Peripheral Component Interconnect Express), ekran kartı ve diğer genişleme kartlarını bağlamak için kullanılan yüksek hızlı bağlantı standardıdır. PCIe 4.0 ve 5.0 en yeni sürümlerdir."
    },
    {
        question: "usb nedir",
        answer: "USB (Universal Serial Bus), çevre birimlerini bilgisayara bağlamak için kullanılan evrensel bağlantı standardıdır. USB 2.0 (480Mb/s), USB 3.0 (5Gb/s), USB 3.1 (10Gb/s), USB4 (40Gb/s) sürümleri vardır."
    },
    {
        question: "hdmi nedir",
        answer: "HDMI (High-Definition Multimedia Interface), yüksek çözünürlüklü video ve ses sinyali taşıyan dijital bağlantı standardıdır. HDMI 2.1 8K@60Hz ve 4K@120Hz destekler."
    },
    {
        question: "displayport nedir",
        answer: "DisplayPort, HDMI'ya alternatif olarak geliştirilmiş yüksek çözünürlüklü video bağlantı standardıdır. Özellikle oyun monitörlerinde yaygındır. DisplayPort 2.0 çok yüksek bant genişliği sunar."
    },
    {
        question: "wifi nedir",
        answer: "WiFi, kablosuz internet bağlantısı sağlayan teknolojidir. WiFi 6 (802.11ax) en son standart olup daha yüksek hız, daha düşük gecikme ve daha iyi çoklu cihaz performansı sunar."
    },
    {
        question: "ethernet nedir",
        answer: "Ethernet, kablolu ağ bağlantısı için kullanılan standarttır. Gigabit Ethernet (1000Mb/s) yaygın, 2.5GbE, 5GbE, 10GbE daha hızlı sürümlerdir. WiFi'den daha stabil ve hızlıdır."
    },
    {
        question: "bluetooth nedir",
        answer: "Bluetooth, kısa mesafeli kablosuz veri aktarımı için kullanılan teknolojidir. Bluetooth 5.0 ve üzeri daha yüksek hız, daha düşük güç tüketimi ve daha iyi menzil sunar."
    },
    {
        question: "rgb nedir",
        answer: "RGB (Red Green Blue), bileşenlere renkli aydınlatma ekleyen LED teknolojisidir. Estetik amaçlı kullanılır. Adreslenebilir RGB ile her LED ayrı ayrı kontrol edilebilir."
    },
    {
        question: "fps nedir",
        answer: "FPS (Frames Per Second), saniyedeki kare sayısını ifade eder. Oyunlarda daha yüksek FPS, daha akıcı görüntü demektir. 60 FPS temel, 144 FPS akıcı, 240 FPS+ profesyonel seviyedir."
    },
    {
        question: "ping nedir",
        answer: "Ping, internet bağlantısındaki gecikme süresini ölçen değerdir. Milisaniye (ms) cinsinden ifade edilir. Düşük ping (1-30ms) daha iyi çevrimiçi oyun deneyimi sağlar."
    },
    {
        question: "thermal paste nedir",
        answer: "Thermal paste (termal macun), işlemci ile soğutucu arasındaki ısı iletimini artıran özel bir macundur. 2-3 yılda bir değiştirilmesi önerilir. Kaliteli macunlar 5-10°C sıcaklık düşüşü sağlar."
    },
    {
        question: "vrm nedir",
        answer: "VRM (Voltage Regulator Module), anakart üzerinde işlemciye kararlı voltaj sağlayan devrelerdir. Kaliteli VRM, overclock stabilitesi ve işlemci ömrü için önemlidir."
    },
    {
        question: "dual channel nedir",
        answer: "Dual channel, bellek performansını artırmak için iki RAM modülünün birlikte çalıştırılmasıdır. Performansı %10-15 artırır. Aynı marka, model ve kapasitede RAM'ler kullanılmalıdır."
    },
    {
        question: "raid nedir",
        answer: "RAID (Redundant Array of Independent Disks), birden fazla sabit diskin performans ve/veya güvenlik için birlikte çalıştırılmasıdır. RAID 0 (performans), RAID 1 (güvenlik), RAID 5 (ikisi birden) popüler seviyelerdir."
    },
    {
        question: "water cooling nedir",
        answer: "Water cooling (sıvı soğutma), geleneksel hava soğutmaya göre daha etkili bir soğutma yöntemidir. AIO (All-in-One) hazır sistemler ve custom loop (özel döngü) olarak ikiye ayrılır."
    },
    {
        question: "airflow nedir",
        answer: "Airflow (hava akışı), kasa içindeki sıcak havanın dışarı atılması ve soğuk havanın içeri alınmasıdır. Pozitif basınç (daha fazla giriş fanı) tozu azaltır, negatif basınç (daha fazla çıkış fanı) soğutmayı iyileştirir."
    },
    {
        question: "modular psu nedir",
        answer: "Modular PSU, gereksiz kabloları çıkarabilme özelliğine sahip güç kaynağıdır. Kasa içi düzen ve hava akışı için idealdir. Full-modular (tüm kablolar çıkarılabilir) ve semi-modular (temel kablolar sabit) tipleri vardır."
    },
    {
        question: "ips panel nedir",
        answer: "IPS (In-Plane Switching) panel, daha iyi renk doğruluğu ve geniş görüş açısı sunan bir monitör panel teknolojisidir. Renk kalitesi için idealdir ama tepki süresi VA ve TN'den yavaştır."
    },
    {
        question: "va panel nedir",
        answer: "VA (Vertical Alignment) panel, IPS ve TN paneller arasında yer alan, iyi kontrast oranı sunan panel teknolojisidir. Siyah seviyeleri iyidir ama renk doğruluğu IPS'ten düşüktür."
    },
    {
        question: "tn panel nedir",
        answer: "TN (Twisted Nematic) panel, hızlı tepki süresi sunan ama renk doğruluğu ve görüş açısı düşük olan panel teknolojisidir. E-spor oyuncuları tarafından tercih edilir."
    },
    {
        question: "oled nedir",
        answer: "OLED (Organic Light-Emitting Diode), her pikselin kendi kendine ışık yaydığı, mükemmel siyak seviyeleri ve sonsuz kontrast sunan ekran teknolojisidir. Renk doğruluğu ve tepki süresi mükemmeldir."
    },
    {
        question: "hdr nedir",
        answer: "HDR (High Dynamic Range), daha geniş renk aralığı ve parlaklık sunan görüntü teknolojisidir. HDR10, HDR10+ ve Dolby Vision standartları vardır. Gerçek HDR için 1000 nits parlaklık gerekir."
    },
    {
        question: "gsync nedir",
        answer: "G-Sync, NVIDIA'nın ekran yineleme hızını ekran kartı ile senkronize eden teknolojisidir. Ekran yırtılmasını önler ve daha akıcı görüntü sağlar. Donanım tabanlıdır ve ek maliyet getirir."
    },
    {
        question: "freesync nedir",
        answer: "FreeSync, AMD'nin ekran yineleme hızını ekran kartı ile senkronize eden teknolojisidir. G-Sync'e benzer ama açık standarttır ve ek maliyet getirmez. G-Sync Compatible monitörler FreeSync destekler."
    },
    {
        question: "rtx nedir",
        answer: "RTX, NVIDIA'nın gerçek zamanlı ışık izleme (ray tracing) teknolojisini destekleyen ekran kartı serisidir. Daha gerçekçi ışık, gölge ve yansıma efektleri sağlar. RTX 20, 30 ve 40 serisi bu teknolojiyi içerir."
    },
    {
        question: "dlss nedir",
        answer: "DLSS (Deep Learning Super Sampling), NVIDIA'nın yapay zeka destekli görüntü iyileştirme teknolojisidir. Düşük çözünürlükte işlem yapıp yüksek çözünürlükte görüntü oluşturarak performansı artırır. Sadece RTX serisi kartlarda çalışır."
    },
    {
        question: "ryzen nedir",
        answer: "Ryzen, AMD'nin yüksek performanslı işlemci serisidir. Çok çekirdekli yapısıyla dikkat çeker. Ryzen 3 (giriş), Ryzen 5 (orta), Ryzen 7 (üst), Ryzen 9 (profesyonel) olarak sıralanır."
    },
    {
        question: "core i serisi nedir",
        answer: "Core i serisi, Intel'in performans işlemci serisidir. Core i3 (giriş), Core i5 (orta), Core i7 (üst), Core i9 (profesyonel) modelleri vardır. Single-core performansı genellikle AMD'den daha iyidir."
    },
    {
        question: "thread nedir",
        answer: "Thread (iş parçacığı), bir işlemcinin aynı anda işleyebildiği görev sayısını ifade eder. Hyper-Threading (Intel) veya SMT (AMD) ile fiziksel çekirdek sayısının iki katı thread elde edilebilir."
    },
    {
        question: "cache nedir",
        answer: "Cache (önbellek), işlemcinin sık kullandığı verileri hızlıca erişebilmesi için depoladığı bellektir. L1 (en hızlı, 32-64KB), L2 (256KB-1MB), L3 (8-64MB, tüm çekirdekler paylaşır) seviyeleri vardır."
    },
    {
        question: "tpm nedir",
        answer: "TPM (Trusted Platform Module), güvenlik için kullanılan donanım tabanlı şifreleme çipidir. Windows 11 için zorunludur. Modern işlemcilerde firmware TPM (fTPM) bulunur."
    },
    {
        question: "uefi nedir",
        answer: "UEFI (Unified Extensible Firmware Interface), BIOS'un modern ve gelişmiş halidir. Daha hızlı açılış, daha fazla özellik ve grafik arayüzü sunar. Secure Boot gibi güvenlik özellikleri içerir."
    },
    {
        question: "form factor nedir",
        answer: "Form factor, bileşenlerin fiziksel boyut ve bağlantı standartlarını ifade eder. Anakart: ATX, Micro-ATX, Mini-ITX; Güç kaynağı: ATX, SFX; Kasa: Full Tower, Mid Tower, Mini Tower."
    },
    {
        question: "backplate nedir",
        answer: "Backplate, anakartı kasanın arka paneline sabitlemeye yarayan metal plakadır. Anakartı fiziksel olarak destekler ve bazı bağlantı noktalarını korur."
    },
    {
        question: "io shield nedir",
        answer: "IO Shield, anakartın arka panel bağlantılarını koruyan metal kapaktır. EMI (elektromanyetik girişim) koruması sağlar ve kasanın iç yapısını tamamlar."
    },
    {
        question: "cable management nedir",
        answer: "Cable management (kablo yönetimi), kasa içindeki kabloları düzenleyerek hava akışını iyileştirme ve estetik görünüm sağlama işlemidir. Modular güç kaynakları ve kasa arka bölmesi yardımcı olur."
    },
    {
        question: "benchmark nedir",
        answer: "Benchmark, bilgisayar bileşenlerinin performansını ölçmek için kullanılan test yazılımlarıdır. 3DMark (grafik), Cinebench (CPU), CrystalDiskMark (depolama) popüler benchmark araçlarıdır."
    },
    {
        question: "bottleneck nedir",
        answer: "Bottleneck (darboğaz), sistemdeki bir bileşenin diğerlerini yavaşlatan zayıf halka olması durumudur. Güçlü ekran kartı + zayıf işlemci kombinasyonunda işlemci bottleneck oluşur. Dengeli sistem kurmak önemlidir."
    },
    {
        question: "pc toplama rehberi",
        answer: "PC toplama adımları: 1) Bütçe ve kullanım amacı belirle, 2) İşlemci seç, 3) Uyumlu anakart seç, 4) RAM belirle, 5) Ekran kartı seç, 6) Depolama seç, 7) Güç kaynağı belirle, 8) Kasa ve soğutma seç, 9) Monitör ve çevre birimleri ekle. Uyumluluk kontrolü şarttır!"
    },
    {
        question: "benchmark programları nelerdir",
        answer: "Popüler benchmark programları: 3DMark (grafik), Cinebench (CPU), Geekbench (genel), UserBenchmark (hızlı test), FurMark (GPU stres), Prime95 (CPU stres), CrystalDiskMark (depolama), AIDA64 (sistem bilgisi)."
    },
    {
        question: "en iyi benchmark skorları",
        answer: "2024 benchmark rekorları: Cinebench R23 Multi-Core: Core i9-14900K ~40000, 3DMark Time Spy: RTX 4090 ~35000, Geekbench 5: Ryzen 9 7950X ~2100/23000. Skorlar donanıma göre değişir."
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
}

function closeImageModal() {
    document.getElementById('image-modal').style.display = 'none';
}

function generateImage(productName) {
    const imageLoading = document.getElementById('image-loading');
    const imageResult = document.getElementById('image-result');
    const generatedImage = document.getElementById('generated-image');
    
    imageLoading.style.display = 'block';
    imageResult.style.display = 'none';
    
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
            
            // Görseli oluştur (SÜRE ARTIRILDI: 3000ms)
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
                
                showNotification(`${productName} görseli oluşturuldu!`);
            }, 3000); // 1000ms yerine 3000ms - 3 saniye
        }
    }, 1200); // 800ms yerine 1200ms - her aşama daha uzun
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