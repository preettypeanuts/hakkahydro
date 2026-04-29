const badgesData = [
    {
        number: "100",
        title: "Pengiriman Sukses",
        description:
            "Telah menangani ratusan pengiriman lintas kota dan antar pulau dengan proses yang terstruktur dan minim kendala."
    },
    {
        number: "50",
        title: "Klien Perusahaan",
        description:
            "Dipercaya oleh berbagai perusahaan dari sektor manufaktur, FMCG, hingga teknologi untuk kebutuhan logistik mereka."
    },
    {
        number: "10",
        title: "Kota Operasional",
        description:
            "Jaringan operasional tersebar di kota-kota strategis untuk memastikan distribusi lebih cepat dan efisien."
    }
];

interface BadgeCardProps {
    title: string;
    description: string;
    index: number;
    className: string;
}

function BadgeCard({ title, description, index, number, className }: BadgeCardProps & { number: string }) {
    return (
        <div
            className={className}
        >
            <h3 className="text-8xl font-semibold text-primary">
                {number}<span className="text-primary">+</span>
            </h3>
            <h3 className="text-2xl font-semibold text-primary mb-2">
                {title}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export const Badges = () => {
    return (
        <>
            <section className="margin spacing">
                <div className="grid md:grid-cols-3">
                    {badgesData.map((item, i) => (
                        <BadgeCard
                            key={i}
                            title={item.title}
                            description={item.description}
                            index={i}
                            number={item.number}
                            className={`
                                px-10
                                ${i !== 0 && i !== badgesData.length - 1 ? "border-x border-darkColor/20" : ""}
                                `}
                        />
                    ))}
                </div>
            </section>
        </>
    )

}