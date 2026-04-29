import Image from "next/image"
import { Button } from "./ui/button"

export const HeroHome = () => {
    return (
        <>
            <section className="w-full h-screen relative">
                <Image
                    fill
                    src="/pc.webp"
                    alt=""
                />

                <div className="absolute inset-0 bg-black/5"></div>

                <div className="absolute inset-0 flex">
                    <div className="mt-30 mb-10 mx-15 flex flex-col items-start gap-10 h-auto justify-between">
                        <div className="space-y-10">
                            <h1 className="text-[58px] leading-16 font-semibold text-white max-w-3xl tracking-12">
                                Solusi Logistik Terintegrasi untuk Operasional yang Lebih Efisien
                            </h1>
                            <div className="space-x-3">
                                <Button
                                    size={"xl"}
                                    className="rounded-none bg-white text-primary hover:bg-neutral-100"
                                >
                                    Konsultasikan Kebuthuhan Anda
                                </Button>
                                <Button
                                    variant={"outline"}
                                    size={"xl"}
                                    className="text-white"
                                >
                                    Jelajahi
                                </Button>
                            </div>
                        </div>
                        <h2 className="max-w-2xl text-white text-lg tracking-6 font-medium ">
                            Dari ekspor hingga distribusi domestik, kami membantu perusahaan Anda bergerak lebih cepat dengan sistem logistik yang terstruktur, transparan, dan dapat diandalkan.
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
} 