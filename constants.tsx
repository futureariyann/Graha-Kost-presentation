import { SlideData, SlideLayout } from './types';
import { 
  Building2, 
  Smartphone, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Users, 
  FileText, 
  TrendingUp,
  AlertTriangle, 
  Server,
  Code,
  Clock,
  CheckCircle2,
  Gift,
  Megaphone,
  Target,
  Wifi,
  ScanBarcode,
  Ban,
  UserPlus,
  LayoutGrid,
  Car,
  Shirt,
  Wrench,
  Bell,
  ArrowRight,
  Upload,
  Download,
  Palette,
  Database,
  Rocket,
  Lock,
  FolderCheck,
  HeartHandshake
} from 'lucide-react';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    layout: SlideLayout.TITLE,
    title: "GRAHA KOST v2.0: Transformasi Digital untuk 1000 Kamar",
    subtitle: "INTELLIGENT PROPERTY ECOSYSTEM",
    content: "Transition from manual complexity to a fully automated autopilot system. Maximize your occupancy and profit with zero operational friction.",
    footer: "Prepared by: Flowmind Creative Tech Agency | For: Bapak Agung Rizki Sanjaya | Date: February 2026"
  },
  {
    id: 2,
    layout: SlideLayout.SPLIT,
    title: "The Bottom Line: Efisiensi Total",
    subtitle: "Dari Chaos Manual Menuju Manajemen 1000 Kamar Terstruktur",
    content: `Current Reality:
Pengelolaan 300 kamar secara manual saat ini sudah mencapai batas kapasitas. Tanpa sistem, ekspansi ke 1000 kamar akan meningkatkan resiko human error secara eksponensial.

The Scale-Up Solution:
Sistem kami dirancang bukan hanya untuk mencatat, tapi untuk mengotomasi. Admin existing Anda akan mampu mengelola 3x lipat jumlah kamar dengan beban kerja yang sama atau lebih ringan.`,
    highlights: [
      "📊 VISIBILITY 100%: Pantau seluruh aset dalam satu dashboard.",
      "⚡ VELOCITY: Percepat siklus tagihan dan booking.",
      "🎯 SCALABILITY: Infrastruktur siap untuk 1000+ kamar.",
      "📈 OPTIMIZATION: Maksimalkan SDM yang ada."
    ],
    // Visual: Modern Apartment/Building
    visualPrompt: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    layout: SlideLayout.COLUMNS,
    title: "Menggarap Pasar 'Digital Native' Malang",
    subtitle: "Peluang First-Mover di Segmen Premium",
    extra: [
      {
        title: "The Market Size",
        desc: "Potensi 150.000+ Mahasiswa aktif (UB, UMM, UM). Segmen Gen-Z captive yang berputar tiap tahun.",
        icon: Users
      },
      {
        title: "Consumer Behavior",
        desc: "Menghindari proses manual. Menuntut Instant Booking, kepastian real-time, dan layanan digital tanpa ribet.",
        icon: Smartphone
      },
      {
        title: "The Gap",
        desc: "Belum ada pemain kost premium di Malang dengan ekosistem aplikasi mandiri yang kuat. Window opportunity: 6-12 bulan.",
        icon: TrendingUp
      }
    ]
  },
  {
    id: 4,
    layout: SlideLayout.PAIN_POINTS,
    title: "Tantangan Operasional Skala 1.000 Kamar",
    subtitle: "Biaya Tersembunyi yang Makan Profit",
    extra: [
      {
        title: "Revenue Leak",
        value: "Rp 180jt/thn",
        desc: "Kehilangan 10-15% omzet untuk komisi platform (Mamikos/Travelio).",
        icon: AlertTriangle,
        color: "text-red-500"
      },
      {
        title: "Admin Bottleneck",
        value: "High Risk",
        desc: "Manajemen manual 1.000 kamar rentan salah catat dan butuh banyak SDM.",
        icon: Users,
        color: "text-orange-500"
      },
      {
        title: "Lost Leads",
        value: "Slow Response",
        desc: "Gen-Z tidak menunggu. Respon lambat = calon penyewa lari ke kompetitor.",
        icon: Clock,
        color: "text-yellow-500"
      }
    ],
    footer: "TOTAL POTENSI HILANG: Rp 240.000.000 PER TAHUN"
  },
  {
    id: 5,
    layout: SlideLayout.COLUMNS,
    title: "Solusi: Flowmind Ecosystem",
    subtitle: "Aset Digital Terintegrasi, Bukan Sekedar Aplikasi",
    extra: [
      {
        title: "Web App (PWA)",
        desc: "The Acquisition Tool. Akses booking instan tanpa download. SEO-friendly.",
        icon: Building2
      },
      {
        title: "Mobile App (Hybrid)",
        desc: "The Retention Tool. Native (Android/iOS) untuk notifikasi tagihan & kontrak.",
        icon: Smartphone
      },
      {
        title: "Automation Engine",
        desc: "The Brain. Backend 24/7: auto-invoicing, verifikasi otomatis.",
        icon: Cpu
      }
    ],
    footer: "HASIL: 0% Komisi Platform + Operasional Auto-Pilot"
  },
  {
    id: 6,
    layout: SlideLayout.FEATURES,
    title: "Fitur Sistem yang Dikembangkan",
    subtitle: "Modul operasional untuk skala 1000 kamar dan 50 unit",
    extra: {
      features: [
        {
          title: "Manajemen Keuangan & Dashboard",
          icon: LayoutGrid,
          items: [
            "Visualisasi real-time status 1000 kamar (terisi/kosong/jatuh tempo)",
            "Auto-generasi invoice dan reminder via WhatsApp",
            "Pembukuan terpisah per 50 unit dengan konsolidasi pusat",
            "Prediksi cashflow 30 hari ke depan dan laporan otomatis"
          ]
        },
        {
          title: "Manajemen Penghuni",
          icon: Users,
          items: [
            "Database lengkap: profil, KTP, kontak darurat, nomor plat kendaraan",
            "Tracking kontrak dengan notifikasi perpanjangan otomatis",
            "Request Laundry via App & Monitoring Status Cucian",
            "Emergency contact dan catatan khusus penghuni"
          ]
        },
        {
          title: "Operasional Harian",
          icon: Wrench,
          items: [
            "Ticketing perbaikan kerusakan dengan foto dan prioritas (urgent/normal)",
            "Manajemen Laundry: Input timbangan, update status, auto-tagihan ke kamar",
            "Tracking status perbaikan dari masuk hingga selesai",
            "Inventaris aset kamar untuk maintenance preventif"
          ]
        },
        {
          title: "Pemasaran & Growth",
          icon: TrendingUp,
          items: [
            "Referral code system: penghuni dapat kode unik, tracking komisi otomatis",
            "Pipeline calon penyewa (inquiry → survey → booking → DP → check-in)",
            "Notifikasi otomatis tagihan, reminder, dan pengumuman broadcast",
            "Tracking sumber leads (Instagram/TikTok/referral)"
          ]
        }
      ]
    },
    footer: "Semua fitur diakses via HP Android dan laptop Windows. Tidak memerlukan hardware tambahan (scanner, IoT, maupun perangkat khusus)."
  },
  {
    id: 7,
    layout: SlideLayout.TECH_STACK,
    title: "Dibangun dengan Teknologi Modern & Scalable",
    subtitle: "Stack yang digunakan Startup Unicorn",
    extra: [
      {
        category: "Core Backend",
        tech: "HONO + PostgreSQL",
        badge: "High Performance",
        desc: "Performa tinggi untuk menangani ribuan request. Database relational aman.",
        icon: Server
      },
      {
        category: "Client Apps",
        tech: "Next.js + Expo",
        badge: "Cross-Platform",
        desc: "UX cepat, SEO friendly. Satu codebase untuk Android & iOS.",
        icon: Smartphone
      },
      {
        category: "Infrastructure",
        tech: "VPS + Cloudflare",
        badge: "Enterprise Security",
        desc: "Data 100% milik Anda (Private Server). Proteksi DDoS.",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: 8,
    layout: SlideLayout.ROI,
    title: "Scaling Strategy: 300 to 1000 Rooms",
    subtitle: "Mengapa Sistem Digital Wajib untuk Ekspansi",
    content: "Tanpa sistem, biaya operasional akan naik sebanding dengan jumlah kamar (Linear Cost). Dengan Flowmind, biaya operasional menjadi Flat (Fixed Cost) meskipun jumlah kamar naik 300%.",
    highlights: [
      "Current (300 Kamar): Admin mulai kewalahan, human error meningkat.",
      "Manual Scaling (1000 Kamar): Butuh 10 Admin (Rasio 1:100), Gaji membengkak.",
      "Digital Scaling (1000 Kamar): Tetap 3 Admin, Revenue naik 300%, Cost Flat."
    ],
    stats: [
      { label: "POTENSI REVENUE", value: "Rp 18 M / Thn", desc: "Estimasi @1000 Kamar" },
      { label: "HEMAT GAJI ADMIN", value: "Rp 300 Jt+", desc: "Efisiensi SDM per tahun" },
      { label: "BIAYA PLATFORM", value: "0 Rupiah", desc: "100% Direct Booking" }
    ],
    footer: "Rasio Industri Manual: 1 Admin max menangani 100 Kamar. Sistem memecahkan batasan ini."
  },
  {
    id: 9,
    layout: SlideLayout.CHECKLIST,
    title: "Lingkup Pengembangan (Scope of Work)",
    subtitle: "Paket Business Preferred",
    content: "Kami memberikan solusi *end-to-end*. Anda terima beres, sistem siap pakai.",
    extra: [
      { 
        title: "1. Visual & Experience", 
        items: ["Custom UI/UX Design", "Wireframing & Prototyping", "Sesuai Brand Identity Graha Kost"], 
        icon: Palette,
        color: "text-purple-400"
      },
      { 
        title: "2. Technical Development", 
        items: ["Web Admin Dashboard (PWA)", "Mobile App Penghuni (Hybrid)", "Backend API & Database"], 
        icon: Code,
        color: "text-blue-400"
      },
      { 
        title: "3. Quality Assurance", 
        items: ["Load Testing (1000 Users)", "Security Penetration Test", "User Acceptance Test (UAT)"], 
        icon: ShieldCheck,
        color: "text-green-400"
      },
      { 
        title: "4. Deployment & Launch", 
        items: ["Play Store / App Store Setup", "Domain & Server Configuration", "Staff Training"], 
        icon: Rocket,
        color: "text-orange-400"
      },
    ],
    footer: "🔒 JAMINAN: 100% SOURCE CODE OWNERSHIP & NO VENDOR LOCK-IN"
  },
  {
    id: 10,
    layout: SlideLayout.TIMELINE,
    title: "Timeline Pengerjaan: 16 Minggu",
    subtitle: "Target Launch: 1 Juni 2026",
    extra: [
      { week: "W 1-4", phase: "Foundation", desc: "UI/UX, DB Arch, API Core" },
      { week: "W 5-8", phase: "Web PWA", desc: "Frontend, Booking Flow" },
      { week: "W 9-12", phase: "Mobile App", desc: "React Native, Notifikasi" },
      { week: "W 13-16", phase: "Deployment", desc: "QA, UAT, Go-Live!" }
    ]
  },
  {
    id: 11,
    layout: SlideLayout.PRICING,
    title: "Pilihan Paket Investasi",
    subtitle: "Pilih Skema yang Sesuai Kebutuhan",
    extra: [
      {
        name: "STARTER",
        price: "Rp 22 Juta",
        features: ["Infrastruktur Thn 1: ❌", "Support: 1 Bulan", "Maintenance: Bayar bln ke-2"],
        rec: false
      },
      {
        name: "BUSINESS PREFERRED",
        price: "Rp 25 Juta",
        features: ["Infrastruktur Thn 1: ✅", "Support: 3 Bulan", "Maintenance: Bayar bln ke-4"],
        rec: true
      },
      {
        name: "ENTERPRISE",
        price: "Rp 35 Juta",
        features: ["Infrastruktur Thn 1: ✅", "Support: 1 Tahun VIP", "Maintenance: GRATIS 1 Tahun"],
        rec: false
      }
    ],
    footer: "Maintenance service mulai dari Rp 2.500.000/bulan untuk kontrak 1 tahun pertama."
  },
  {
    id: 12,
    layout: SlideLayout.SPLIT,
    title: "Infrastruktur & Keamanan Digital",
    subtitle: "Bonus Eksklusif Paket Business Preferred",
    content: "**Estimasi Biaya Normal: Rp 6.000.000 / Tahun**\nBiaya ini mencakup penyewaan infrastruktur cloud berstandar industri untuk menjamin keamanan data dan uptime 24/7:",
    highlights: [
      "🖥️ VPS Cloud Server (High Performance)",
      "🗄️ Managed Database & Daily Backup",
      "🔒 Domain .com & SSL Security",
      "🛡️ Cloudflare Enterprise Protection"
    ],
    extra: {
      specialBox: {
        title: "🎁 ANDA HEMAT 6 JUTA (TAHUN KE-1)",
        content: "Khusus untuk paket BUSINESS PREFERRED, kami menanggung biaya infrastruktur ini sepenuhnya di tahun pertama.",
        highlight: "Gratis Setup & Konfigurasi Awal",
        subtext: "Fokus pada operasional kost, biarkan kami menangani teknis server.",
        details: [
            "Monitoring Server 24 Jam",
            "Security Patching Rutin"
        ]
      }
    },
    // No visualPrompt needed, renderer will handle full width
  },
  {
    id: 13,
    layout: SlideLayout.SPLIT,
    title: "Partnership Lifecycle",
    subtitle: "Menjaga Keberlanjutan Sistem Jangka Panjang",
    content: "**Fase 1: Development & Warranty (0-3 Bulan)**\nFokus pada pembangunan aset digital yang solid. Termasuk garansi bug fixing intensif pasca-launching untuk memastikan sistem berjalan mulus sesuai operasional Graha Kost.",
    extra: {
      specialBox: {
        title: "Fase 2: Operational Assurance",
        content: "Sistem digital seperti mobil; butuh servis rutin agar tidak mogok. Kami menjadi 'Bengkel Resmi' Anda.",
        highlight: "Rp 2.500.000 / Bulan (Flat)",
        subtext: "Investasi kecil untuk melindungi omzet milyaran. Mencegah sistem down, data hilang, atau serangan siber.",
        details: [
          "Cover Biaya Server & Database",
          "WhatsApp API Quota",
          "Prioritas Support Teknis"
        ]
      }
    },
    visualPrompt: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 14,
    layout: SlideLayout.COMPARISON,
    title: "Mengapa Memilih Flowmind?",
    subtitle: "Smart Investment vs High Risk Options",
    extra: [
      { 
        name: "In-House Programmer", 
        pros: ["Standby di lokasi"], 
        cons: [
          "Biaya Tinggi: Gaji Rp 15Jt/bln (Rp 180Jt/thn)",
          "Resiko Turnover: Programmer resign = Sistem mati",
          "Biaya Hidden: BPJS, THR, Laptop, Ruangan",
          "Single Point of Failure"
        ],
        icon: UserPlus
      },
      { 
        name: "Flowmind Agency", 
        pros: [
          "Hemat: One-time cost (Setara 2 bulan gaji programmer)",
          "Expert Team: Paham bisnis kost & teknis",
          "No Turnover Risk: Didukung tim, bukan perorangan",
          "Server Gratis Tahun Pertama (Hemat 6jt)"
        ], 
        cons: [], 
        highlight: true,
        icon: CheckCircle2
      },
      { 
        name: "Software House Lain", 
        pros: ["Tim teknis banyak"], 
        cons: [
          "Mahal: Project sejenis biasanya Rp 50Jt+",
          "Vendor Lock-in: Source code sering ditahan",
          "Biaya Maintenance Mahal & Respons Lambat",
          "Tidak Paham Lapangan (Cuma bisa coding)"
        ],
        icon: Building2
      }
    ]
  },
  {
    id: 15,
    layout: SlideLayout.CHECKLIST,
    title: "Serah Terima & Hak Kepemilikan",
    subtitle: "Aset Digital Anda, 100% Kendali Anda",
    content: "Kami memprioritaskan transparansi. Tidak ada 'Vendor Lock-in'. Semua aset yang dibangun adalah Intellectual Property (IP) Graha Kost.",
    extra: [
      { 
        title: "1. Intellectual Property (IP)", 
        items: [
          "Full Source Code (Akses Repositori Git)", 
          "Credential Database & Cloud Server", 
          "Environment Variables & Secrets"
        ], 
        icon: Database,
        color: "text-blue-400"
      },
      { 
        title: "2. Production Assets", 
        items: [
          "Web Admin Dashboard (Live)", 
          "Mobile Apps (File .APK & .AAB)", 
          "Domain & Akun Hosting Cloudflare"
        ], 
        icon: Smartphone,
        color: "text-green-400"
      },
      { 
        title: "3. Documentation & Knowledge", 
        items: [
          "Dokumentasi API (Swagger/Postman)", 
          "User Manual Guide (PDF/Video)", 
          "SOP Penanganan Error Dasar"
        ], 
        icon: FolderCheck,
        color: "text-gold-400"
      },
      { 
        title: "4. Service Warranty", 
        items: [
          "30 Hari Priority Bug Fix Guarantee", 
          "Sesi Training Staff (Online/Offline)", 
          "Pendampingan Deployment ke Play Store"
        ], 
        icon: ShieldCheck,
        color: "text-purple-400"
      },
    ],
    footer: "🛡️ 100% TRANSPARAN: ANDA MEMEGANG KUNCI UTAMA SISTEM INI"
  },
  {
    id: 16,
    layout: SlideLayout.CTA,
    title: "Mulai Transformasi Digital Graha Kost",
    subtitle: "4 Langkah Mudah Menuju Sistem Auto-Pilot",
    content: "Slot Januari 2026: 1 TERISI | 1 SISA",
    extra: [
      "Approve & Pilih Paket",
      "Sign Contract & DP 40%",
      "Kick-off Development",
      "Launch Juni 2026"
    ]
  }
];