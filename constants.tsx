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
  Gift
} from 'lucide-react';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    layout: SlideLayout.TITLE,
    title: "GRAHA KOST v2.0: Digital Transformation Proposal",
    subtitle: "Scalable Property Management System for 1000+ Rooms",
    content: "Command 1000 Rooms from Your Phone — Zero Commission, Fully Automated",
    footer: "Prepared by: Flowmind Agency | For: Bapak Agung Rizki Sanjaya | Date: Januari 2026"
  },
  {
    id: 2,
    layout: SlideLayout.SPLIT,
    title: "The Bottom Line: Menuju Efisiensi Total",
    subtitle: "Executive Summary",
    content: "Kami merancang peta jalan untuk mengubah Graha Kost dari manajemen konvensional menjadi properti berbasis teknologi yang berjalan otomatis. Backend Admin telah berjalan stabil (Investasi Fase 1). Next: Web App (PWA) & Mobile App.",
    highlights: [
      "INVESTASI: Rp 25.000.000 (One-time)",
      "RETURN: ~Rp 20.000.000/bulan",
      "BREAK-EVEN: 1.5 Bulan ⚡",
      "DELIVERY: Juni 2026 (16 minggu)"
    ],
    // Visual: Tablet showing dashboard analytics - fits "Efficiency" and "Digital"
    visualPrompt: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
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
    title: "Fitur Unggulan Kelas Enterprise",
    subtitle: "Dibagi untuk Penghuni dan Administrator",
    content: "Two ecosystems working in harmony.",
    extra: {
      left: [
        { title: "Instant Booking", desc: "Upload KTP, bayar DP hitungan menit." },
        { title: "Digital Contract", desc: "Tanda tangan sah hukum & Paperless." },
        { title: "Payment History", desc: "Riwayat transparan & Invoice digital." },
        { title: "Complaint Tracking", desc: "Lapor kerusakan dengan foto real-time." }
      ],
      right: [
        { title: "One-Click Verify", desc: "Validasi pembayaran massal cepat." },
        { title: "Occupancy Dashboard", desc: "Monitor ketersediaan live satu layar." },
        { title: "Financial Report", desc: "Laporan omzet otomatis, export Excel." }
      ]
    }
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
    title: "Analisis ROI: Mengapa Investasi Ini Menguntungkan?",
    subtitle: "Transfer dari Operasional Boros ke Aset Permanen",
    highlights: [
      "Stop Komisi Platform: Rp 15.000.000/bln",
      "Efisiensi Admin: Rp 5.000.000/bln",
      "Total Hemat: Rp 20.000.000 / Bulan"
    ],
    stats: [
      { label: "INVESTASI", value: "Rp 25 Jt" },
      { label: "HEMAT/BLN", value: "Rp 20 Jt" },
      { label: "BREAK EVEN", value: "1.25 BLN" }
    ],
    footer: "ROI: 960% di Tahun Pertama"
  },
  {
    id: 9,
    layout: SlideLayout.CHECKLIST,
    title: "Lingkup Pengembangan",
    subtitle: "Paket Business Preferred — Rp 25.000.000",
    highlights: [
      "Premium UI/UX Design Custom (Sesuai brand Graha Kost)",
      "Full Stack Development (Web PWA + Mobile App + Backend)",
      "Quality Assurance & Load Testing (1000+ user)",
      "Deployment & Go-Live Support (Play Store/App Store)",
      "1 Year Warranty (3 Bulan Support + 9 Bulan Bug Fix)"
    ],
    footer: "SOURCE CODE 100% MILIK ANDA. No Vendor Lock-in."
  },
  {
    id: 10,
    layout: SlideLayout.SPLIT,
    title: "Biaya Operasional Infrastruktur (OPEX)",
    subtitle: "Yang Dibutuhkan untuk Menjaga Sistem Online",
    content: "Estimasi Biaya Normal: Rp 6.000.000 / Tahun (Mencakup VPS Server, Managed Database, Domain + SSL, dan Cloudflare Pro).",
    highlights: [
      "🎁 PENAWARAN SPESIAL FLOWMIND:",
      "Untuk paket BUSINESS PREFERRED, biaya infrastruktur TAHUN PERTAMA DITANGGUNG SEPENUHNYA.",
      "Anda hemat Rp 6jt di tahun pertama!"
    ],
    // Visual: High-tech Server Room with blue/gold tones
    visualPrompt: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: 11,
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
    id: 12,
    layout: SlideLayout.SPLIT,
    title: "Strategi Kemitraan Jangka Panjang",
    subtitle: "Kami Tidak Build and Leave.",
    content: "TAHUN 1: Build & Stabilize. Garansi bug fixing, support prioritas. TAHUN 2+: Maintenance & Scale (Optional Rp 2.5jt/bln).",
    highlights: [
      "Kepemilikan Penuh",
      "No Vendor Lock-in",
      "Source Code di tangan Anda"
    ],
    // Visual: Professional Handshake / Partnership
    visualPrompt: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: 13,
    layout: SlideLayout.PRICING,
    title: "Pilihan Paket Investasi",
    subtitle: "Pilih Skema yang Sesuai Kebutuhan",
    extra: [
      {
        name: "STARTER",
        price: "Rp 22.000.000",
        features: ["Infrastruktur Thn 1: ❌", "Support: 1 Bulan", "Maintenance: Bayar bln ke-2"],
        rec: false
      },
      {
        name: "BUSINESS PREFERRED",
        price: "Rp 25.000.000",
        features: ["Infrastruktur Thn 1: ✅", "Support: 3 Bulan", "Maintenance: Bayar bln ke-4"],
        rec: true
      },
      {
        name: "ENTERPRISE",
        price: "Rp 35.000.000",
        features: ["Infrastruktur Thn 1: ✅", "Support: 1 Tahun VIP", "Maintenance: GRATIS 1 Tahun"],
        rec: false
      }
    ]
  },
  {
    id: 14,
    layout: SlideLayout.COMPARISON,
    title: "Mengapa Memilih Flowmind?",
    subtitle: "Kualitas Enterprise, Harga Startup",
    extra: [
      { name: "Software House", pros: [], cons: ["Mahal (35-50jt)", "Birokrasi Lambat"] },
      { name: "Flowmind", pros: ["Hemat (25jt)", "Agile & Cepat", "Expert Team"], cons: [], highlight: true },
      { name: "In-House Hire", pros: [], cons: ["Gaji Rutin (15jt/bln)", "Drama HR"] }
    ]
  },
  {
    id: 15,
    layout: SlideLayout.CHECKLIST,
    title: "Jaminan Aset & Deliverables",
    subtitle: "Apa yang Anda Terima Setelah Project Selesai?",
    highlights: [
      "100% Source Code Ownership (Git)",
      "Technical Documentation (Admin & API Guide)",
      "Aplikasi Live (Web & Mobile Published)",
      "Training & Handover Meeting"
    ],
    footer: "🛡️ GARANSI UANG KEMBALI 30 HARI"
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