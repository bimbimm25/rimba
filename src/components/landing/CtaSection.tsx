import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const CtaSection = () => {
    return (
        <section className="py-20 bg-rimba-900 text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                    Sudah Siap Menjelajah Dunia R.I.M.B.A?
                </h2>
                <p className="text-rimba-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Ambil peranmu sebagai pelindung lingkungan. Pelajari caranya dengan menyenangkan, selesaikan latihan kasus, dan jadilah Sahabat Rimba hari ini.
                </p>
                <div className="pt-4 flex justify-center">
                    <Link href="/belajar">
                        <Button size="lg" className="bg-leaf hover:bg-leaf-dark text-white px-8">
                            <Compass className="w-5 h-5 mr-2" />
                            Mulai Petualangan Sekarang
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};