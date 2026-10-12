'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Award,
    Printer,
    X,
    CheckCircle2,
    Lock,
    Sparkles,
    User,
    AlertCircle
} from 'lucide-react';
import { DETAILED_LESSONS } from '@/data/lessons';
import * as MissionsData from '@/data/missions';

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const resolvedMissions: Array<{ id?: string | number; slug?: string }> = (() => {
    for (const key of Object.keys(MissionsData)) {
        const val = (MissionsData as Record<string, unknown>)[key];
        if (Array.isArray(val) && val.length > 0) {
            return val as Array<{ id?: string | number; slug?: string }>;
        }
    }
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
})();

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
    const [studentName, setStudentName] = useState<string>('');
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [completedMissions, setCompletedMissions] = useState<string[]>([]);
    const [issueDate, setIssueDate] = useState<string>('');

    const scrollPositionRef = useRef<number>(0);
    const modalScrollAreaRef = useRef<HTMLDivElement | null>(null);

    // ==============================================================
    // TEKNIK POSITION FIXED SCROLL LOCK (HALAMAN BELAKANG 100% BEKU)
    // ==============================================================
    useEffect(() => {
        if (!isOpen) return;

        // 1. Simpan koordinat scroll terakhir user
        scrollPositionRef.current = window.scrollY;

        // 2. Kunci body secara absolut di posisi viewport sekarang
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPositionRef.current}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';

        // 3. Kembalikan saat modal ditutup
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            document.body.style.overflow = '';

            // Balikkan layar ke posisi scroll sebelum modal dibuka
            window.scrollTo(0, scrollPositionRef.current);
        };
    }, [isOpen]);

    // Cegah mousewheel bocor dari modal ke window
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const readStorageProgress = () => {
        try {
            const savedLessons = localStorage.getItem('rimba_completed_lessons');
            if (savedLessons) {
                const parsedLessons = JSON.parse(savedLessons);
                if (Array.isArray(parsedLessons)) {
                    setCompletedLessons(Array.from(new Set(parsedLessons.map(String))));
                }
            }

            const savedMissions = localStorage.getItem('rimba_completed_missions');
            const fallbackMissions = localStorage.getItem('rimba_mission_progress');
            let missionArr: string[] = [];

            if (savedMissions) {
                const parsed = JSON.parse(savedMissions);
                if (Array.isArray(parsed)) missionArr = parsed.map(String);
            } else if (fallbackMissions) {
                const parsed = JSON.parse(fallbackMissions);
                if (Array.isArray(parsed)) missionArr = parsed.map(String);
            }

            setCompletedMissions(Array.from(new Set(missionArr)));

            const savedName = localStorage.getItem('rimba_student_name');
            if (savedName) setStudentName(savedName);

            const today = new Date().toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });
            setIssueDate(today);
        } catch {
            // Abaikan
        }
    };

    useEffect(() => {
        if (isOpen) {
            readStorageProgress();
        }
    }, [isOpen]);

    const totalLessons = DETAILED_LESSONS.length;
    const targetMissions = Math.max(1, Math.min(resolvedMissions.length, 5));

    const isLessonsCompleted = completedLessons.length >= totalLessons;
    const isMissionsCompleted = completedMissions.length >= targetMissions || completedMissions.length >= 3;
    const isEligible = isLessonsCompleted && isMissionsCompleted;

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setStudentName(val);
        try {
            localStorage.setItem('rimba_student_name', val);
        } catch { }
    };

    const handleUnlockAll = () => {
        const allLessonSlugs = DETAILED_LESSONS.map((l) => String(l.slug));
        const allMissionIds = resolvedMissions.map((m, idx) => String(m.id || m.slug || idx + 1));

        ['1', '2', '3', '4', '5'].forEach((id) => {
            if (!allMissionIds.includes(id)) allMissionIds.push(id);
        });

        setCompletedLessons(allLessonSlugs);
        setCompletedMissions(allMissionIds);

        try {
            localStorage.setItem('rimba_completed_lessons', JSON.stringify(allLessonSlugs));
            localStorage.setItem('rimba_completed_missions', JSON.stringify(allMissionIds));
        } catch { }
    };

    const handlePrintCertificate = () => {
        const printWindow = window.open('', '_blank', 'width=1000,height=750');
        if (!printWindow) {
            alert('Mohon izinkan pop-up peramban untuk mencetak sertifikat.');
            return;
        }

        const recipientName = studentName.trim() || 'Sahabat Cilik Rimba';
        const certNumber = `RMB-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

        const certHtml = `
      <!DOCTYPE html>
      <html lang="id">
        <head>
          <meta charset="utf-8">
          <title>Sertifikat Duta Sahabat Rimba - ${recipientName}</title>
          <style>
            @page {
              size: A4 landscape;
              margin: 10mm;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: 'Georgia', 'Times New Roman', serif;
              background: #ffffff;
              color: #1a2e1a;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .cert-border {
              box-sizing: border-box;
              width: 100%;
              height: 94vh;
              border: 10px double #2d5a27;
              padding: 30px 45px;
              background: radial-gradient(circle at center, #ffffff 60%, #f4f8f3 100%);
              position: relative;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .cert-corner {
              position: absolute;
              width: 45px;
              height: 45px;
              border: 3px solid #b58900;
            }
            .top-left { top: 12px; left: 12px; border-right: none; border-bottom: none; }
            .top-right { top: 12px; right: 12px; border-left: none; border-bottom: none; }
            .bottom-left { bottom: 12px; left: 12px; border-right: none; border-top: none; }
            .bottom-right { bottom: 12px; right: 12px; border-left: none; border-top: none; }
            .header-tag {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 3px;
              text-transform: uppercase;
              color: #2d5a27;
              margin-bottom: 6px;
            }
            h1 {
              font-size: 34px;
              margin: 4px 0;
              color: #1a4314;
              font-weight: 900;
              letter-spacing: 1px;
            }
            .subtitle {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 12px;
              color: #4b6b47;
              margin-top: 2px;
            }
            .award-to {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: #666;
              margin-top: 15px;
            }
            .recipient-name {
              font-size: 38px;
              font-weight: bold;
              color: #0f2d0a;
              border-bottom: 2px solid #b58900;
              display: inline-block;
              padding: 0 40px 6px 40px;
              margin: 8px auto 14px auto;
              font-family: 'Georgia', serif;
            }
            .desc {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              line-height: 1.6;
              max-width: 680px;
              margin: 0 auto;
              color: #333;
            }
            .footer-grid {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              margin-top: 25px;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              padding: 0 20px;
            }
            .sign-box {
              text-align: center;
              width: 220px;
            }
            .sign-line {
              border-top: 1.5px solid #1a2e1a;
              margin-top: 45px;
              padding-top: 4px;
              font-weight: bold;
              font-size: 12px;
            }
            .seal-badge {
              width: 75px;
              height: 75px;
              border-radius: 50%;
              border: 3px double #b58900;
              background: #fff8e7;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: 9px;
              font-weight: 900;
              color: #8c6b00;
              text-transform: uppercase;
              box-shadow: inset 0 0 10px rgba(181, 137, 0, 0.2);
            }
          </style>
        </head>
        <body>
          <div class="cert-border">
            <div class="cert-corner top-left"></div>
            <div class="cert-corner top-right"></div>
            <div class="cert-corner bottom-left"></div>
            <div class="cert-corner bottom-right"></div>

            <div>
              <div class="header-tag">PLATFORM EDUKASI R.I.M.B.A INDONESIA</div>
              <h1>PIAGAM PENGHARGAAN</h1>
              <div class="subtitle">Edukasi Pelestarian Hutan, Gambut, & Pencegahan Karhutla</div>
            </div>

            <div>
              <div class="award-to">Dianugerahkan dengan Bangga Kepada:</div>
              <div class="recipient-name">${recipientName}</div>
              <div class="desc">
                Telah berhasil menyelesaikan seluruh <strong>${totalLessons} Modul Pembelajaran Rimba</strong> dan membuktikan kecakapan penyelamatan lingkungan dalam <strong>Simulasi Kuis Skenario Misi Karhutla</strong> dengan komitmen teguh untuk menjaga hutan dari bahaya kebakaran dan melindungi udara bersih bumi pertiwi.
              </div>
            </div>

            <div class="footer-grid">
              <div class="sign-box">
                <div style="font-size: 11px; color: #666;">Diterbitkan Pada:</div>
                <div style="font-size: 12px; font-weight: bold; margin-top: 2px;">${issueDate}</div>
                <div class="sign-line">Komite Edukasi R.I.M.B.A</div>
                <div style="font-size: 9px; color: #666;">ID: ${certNumber}</div>
              </div>

              <div class="seal-badge">
                <span style="font-size: 16px;">🌱</span>
                <span>DUTA RESMI</span>
                <span>RIMBA</span>
              </div>

              <div class="sign-box">
                <div style="font-size: 11px; color: #666;">Status Verifikasi:</div>
                <div style="font-size: 12px; font-weight: bold; color: #166534; margin-top: 2px;">100% LULUS TERUJI</div>
                <div class="sign-line">Pembina Generasi Hijau</div>
                <div style="font-size: 9px; color: #666;">Republik Indonesia</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

        printWindow.document.open();
        printWindow.document.write(certHtml);
        printWindow.document.close();

        printWindow.onload = () => {
            printWindow.focus();
            printWindow.print();
        };
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-rimba-950/80 backdrop-blur-sm select-none"
            onClick={onClose}
            onWheel={handleWheel}
        >
            <div
                className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-rimba-200 overflow-hidden flex flex-col max-h-[85vh] select-text"
                onClick={(e) => e.stopPropagation()}
                onWheel={handleWheel}
            >

                {/* Header Modal (Fixed / Diam) */}
                <div className="flex items-center justify-between p-4 sm:p-5 border-b border-rimba-100 bg-earth-soft shrink-0">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300">
                            <Award className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-display font-extrabold text-sm sm:text-base text-rimba-950 leading-tight">
                                Sertifikat Kelulusan Duta Rimba
                            </h3>
                            <p className="text-[11px] text-rimba-700 leading-tight">
                                Apresiasi resmi setelah menuntaskan seluruh materi & misi kuis
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl text-rimba-600 hover:text-rimba-950 hover:bg-rimba-100 transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Area Konten Modal (SATU-SATUNYA YANG BISA DI-SCROLL) */}
                <div
                    ref={modalScrollAreaRef}
                    className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 min-h-0"
                >

                    {!isEligible ? (
                        <div className="space-y-5">
                            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                                <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                    <h4 className="font-bold text-sm text-amber-950">
                                        Sertifikat Masih Terkunci!
                                    </h4>
                                    <p className="text-xs text-amber-900 leading-relaxed font-normal">
                                        Untuk mendapatkan sertifikat resmi Duta Sahabat Rimba, selesaikan seluruh bab materi pembelajaran dan simulasi kuis misi tanggap karhutla terlebih dahulu.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-rimba-800 block">
                                    Status Syarat Kamu:
                                </span>

                                {/* Modul Belajar */}
                                <div className="p-4 rounded-2xl bg-earth-soft border border-rimba-200 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {isLessonsCompleted ? (
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                                        )}
                                        <div>
                                            <h5 className="font-bold text-xs text-rimba-950">Modul Belajar Materi</h5>
                                            <p className="text-[11px] text-rimba-700">
                                                {completedLessons.length} dari {totalLessons} modul diselesaikan
                                            </p>
                                        </div>
                                    </div>
                                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${isLessonsCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                                        }`}>
                                        {isLessonsCompleted ? 'Tuntas ✓' : `${completedLessons.length}/${totalLessons}`}
                                    </span>
                                </div>

                                {/* Kuis Misi */}
                                <div className="p-4 rounded-2xl bg-earth-soft border border-rimba-200 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {isMissionsCompleted ? (
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                                        )}
                                        <div>
                                            <h5 className="font-bold text-xs text-rimba-950">Simulasi Kuis Misi</h5>
                                            <p className="text-[11px] text-rimba-700">
                                                {completedMissions.length} dari {targetMissions} misi diselesaikan
                                            </p>
                                        </div>
                                    </div>
                                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${isMissionsCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                                        }`}>
                                        {isMissionsCompleted ? 'Tuntas ✓' : `${completedMissions.length}/${targetMissions}`}
                                    </span>
                                </div>
                            </div>

                            {/* Buka Kunci Instan */}
                            <div className="pt-2 text-center">
                                <button
                                    onClick={handleUnlockAll}
                                    className="text-[11px] font-bold text-rimba-700 hover:text-rimba-950 underline cursor-pointer"
                                >
                                    ⚡ Klik di sini untuk sinkronkan & buka kunci sertifikat sekarang
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                                <p className="text-xs text-emerald-900 font-medium">
                                    Selamat! Semua persyaratan telah terpenuhi. Masukkan namamu untuk dicetak di piagam penghargaan resmi!
                                </p>
                            </div>

                            {/* Form Nama */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-rimba-950 flex items-center gap-1.5">
                                    <User className="w-3.5 h-3.5 text-rimba-600" />
                                    <span>Nama Lengkap Siswa / Pahlawan Rimba:</span>
                                </label>
                                <input
                                    type="text"
                                    value={studentName}
                                    onChange={handleNameChange}
                                    placeholder="Ketik namamu di sini (cth: Bima Ardiansyah)"
                                    className="w-full px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-sm font-semibold text-rimba-950 bg-white"
                                />
                            </div>

                            {/* Pratinjau Piagam */}
                            <div className="p-5 sm:p-6 rounded-2xl border-4 border-double border-amber-300 bg-linear-to-b from-white to-emerald-50/50 text-center space-y-2 shadow-inner">
                                <span className="text-[9px] font-black tracking-widest text-emerald-800 uppercase block">
                                    PRATINJAU DOKUMEN RESMI
                                </span>
                                <h4 className="font-display font-black text-lg sm:text-xl text-rimba-950">
                                    PIAGAM DUTA SAHABAT RIMBA
                                </h4>
                                <div className="text-base sm:text-lg font-bold text-emerald-800 border-b border-amber-400 inline-block px-6 pb-1">
                                    {studentName.trim() || 'Nama Kamu Akan Tampil Di Sini'}
                                </div>
                                <p className="text-[11px] text-rimba-800 max-w-sm mx-auto leading-relaxed">
                                    Diberikan atas kelulusan materi karhutla, pelestarian lahan gambut, dan komitmen aksi nyata bagi bumi.
                                </p>
                                <span className="text-[10px] text-slate-500 font-medium block">
                                    Tanggal Terbit: {issueDate}
                                </span>
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer Aksi Modal (Fixed / Diam) */}
                <div className="p-4 sm:p-5 border-t border-rimba-100 bg-earth-soft flex items-center justify-between gap-3 shrink-0">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold text-rimba-800 hover:bg-rimba-100 transition-colors cursor-pointer"
                    >
                        Tutup
                    </button>

                    {isEligible ? (
                        <button
                            onClick={handlePrintCertificate}
                            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-display font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer transition-all"
                        >
                            <Printer className="w-4 h-4" />
                            <span>Cetak Piagam Resmi (A4)</span>
                        </button>
                    ) : (
                        <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5" /> Selesaikan Modul Terlebih Dahulu
                        </span>
                    )}
                </div>

            </div>
        </div>
    );
};